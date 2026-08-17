#!/bin/bash
# record-landing-video.sh — запись видео прототипа через chromium + ffmpeg
# Использование:
#   ./scripts/record-landing-video.sh                # 90 сек, 1920x1080
#   ./scripts/record-landing-video.sh 30             # 30 сек
#   ./scripts/record-landing-video.sh 60 ./demo.mp4   # 60 сек, custom output
# Требования: chromium-browser, python3, ffmpeg-python или ffmpeg

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
DURATION="${1:-90}"
OUTPUT="${2:-demo-screenshots/landing-demo-video.mp4}"
WIDTH="${3:-1400}"
HEIGHT="${4:-900}"
FPS="${5:-12}"

mkdir -p "$(dirname "$OUTPUT")"
FRAMES_DIR="$(mktemp -d)"

echo "═══ Запись видео прототипа ═══"
echo "Длительность: ${DURATION}s при $FPS fps"
echo "Разрешение: ${WIDTH}x${HEIGHT}"
echo "Файл: $OUTPUT"
echo "Временные кадры: $FRAMES_DIR"

# Запуск HTTP-сервера
/usr/bin/python3 -m http.server 18091 > /tmp/http.log 2>&1 &
HTTP_PID=$!
trap "kill $HTTP_PID 2>/dev/null; rm -rf $FRAMES_DIR" EXIT
sleep 2

# Генерация сценариев для кадров (JavaScript-объект)
cat > /tmp/landing-scenario.js << 'EOF'
const scenarios = [
  // [wait-ms, click-selector, before-screenshot-tag]
  { 'wait': 500,  'click': null, 'tag': '01-hero' },
  { 'wait': 1000, 'click': '.proto-chip[data-inn="7707083893"]', 'tag': '02-verify-sber' }, // клик "Сбер GOLD"
  { 'wait': 2500, 'click': null, 'tag': '03-verify-result' }, // анимация проверки
  { 'wait': 800,  'click': '.proto-tab[data-tab="points"]', 'tag': '04-points-tab' },
  { 'wait': 500,  'click': '#pointsEarn', 'tag': '05-points-1p' },
  { 'wait': 500,  'click': '#pointsEarn', 'tag': '06-points-2p' },
  { 'wait': 500,  'click': '.proto-tab[data-tab="catalog"]', 'tag': '07-catalog-tab' },
  { 'wait': 1500, 'click': null, 'tag': '08-catalog-all' },
  { 'wait': 500,  'click': '.proto-filter[data-grade-filter="gold"]', 'tag': '09-catalog-gold' },
  { 'wait': 1000, 'click': null, 'tag': '10-catalog-gold-done' },
  { 'wait': 500,  'click': '.proto-filter[data-grade-filter="all"]', 'tag': '11-catalog-all-2' },
  { 'wait': 500,  'click': '.proto-tab[data-tab="verify"]', 'tag': '12-back-to-verify' }
];

return scenarios;
EOF

# Читаем сценарий и генерируем кадры с правильным временем
# Создаем кадры
DURATION="$DURATION" FRAMES_DIR="$FRAMES_DIR" WIDTH="$WIDTH" HEIGHT="$HEIGHT" OUTPUT="$OUTPUT" python3 - <<PYEOF
import os
import json

frames = [
  {'wait': 500,  'click': None,                                 'tag': '01-hero'},
  {'wait': 1000, 'click': '.proto-chip[data-inn="7707083893"]',  'tag': '02-verify-sber'},
  {'wait': 2500, 'click': None,                                  'tag': '03-verify-result'},
  {'wait': 800,  'click': '.proto-tab[data-tab="points"]',    'tag': '04-points-tab'},
  {'wait': 500,  'click': '#pointsEarn',                       'tag': '05-points-1p'},
  {'wait': 500,  'click': '#pointsEarn',                       'tag': '06-points-2p'},
  {'wait': 500,  'click': '.proto-tab[data-tab="catalog"]',   'tag': '07-catalog-tab'},
  {'wait': 1500, 'click': None,                                  'tag': '08-catalog-all'},
  {'wait': 500,  'click': '.proto-filter[data-grade-filter="gold"]', 'tag': '09-catalog-gold'},
  {'wait': 1000, 'click': None,                                  'tag': '10-catalog-gold-done'},
  {'wait': 500,  'click': '.proto-filter[data-grade-filter="all"]',  'tag': '11-catalog-all-2'},
  {'wait': 500,  'click': '.proto-tab[data-tab="verify"]',     'tag': '12-back-to-verify'}
]

cum = 0
accumulated = []
for f in frames:
    cum += f['wait']
    accumulated.append((cum, f))

DURATION = int(os.environ['DURATION'])
hold_needed = DURATION * 1000 - cum
hold_frames = max(0, hold_needed // 800)
for i in range(hold_frames):
    cum += 800
    accumulated.append((cum, {'wait': 800, 'click': None, 'tag': f'hold-{i}'}))

with open('/tmp/frames_manifest.json', 'w') as f:
    json.dump(accumulated, f)

print(f'Всего кадров: {len(accumulated)}')
PYEOF

# Запуск puppeteer для генерации кадров
cat > /tmp/screenshot-frames.mjs << 'EOF'
import puppeteer from 'puppeteer-core';
import fs from 'fs';

const manifest = JSON.parse(fs.readFileSync('/tmp/frames_manifest.json', 'utf-8'));
const framesDir = process.argv[2];
const width = parseInt(process.argv[3]);
const height = parseInt(process.argv[4]);
const url = process.argv[5];

const browser = await puppeteer.launch({
  executablePath: '/usr/bin/chromium-browser',
  headless: 'new',
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-features=SingletonLock']
});

const page = await browser.newPage();
await page.setViewport({ width, height });
await page.goto(url, { waitUntil: 'networkidle0' });

const startTime = Date.now();
let prevFrame = 0;

for (let i = 0; i < manifest.length; i++) {
  const [targetMs, frame] = manifest[i];
  const waitMs = targetMs - prevFrame;
  if (waitMs > 0) await new Promise(r => setTimeout(r, waitMs));
  prevFrame = targetMs;

  if (frame.click) {
    try {
      await page.click(frame.click);
    } catch (e) {
      console.log('  click failed:', frame.click, e.message.slice(0, 80));
    }
    await new Promise(r => setTimeout(r, 200)); // ожидание анимации
  }

  const filename = `${String(i).padStart(3, '0')}-${frame.tag}.png`;
  await page.screenshot({ path: `${framesDir}/${filename}` });
  console.log(`  ${i+1}/${manifest.length} → ${filename} (${targetMs}ms)`);
}

await browser.close();
console.log('Все кадры сняты');
EOF

cp /tmp/screenshot-frames.mjs "$ROOT/.tmp-screenshot-frames.mjs"
node "$ROOT/.tmp-screenshot-frames.mjs" "$FRAMES_DIR" "$WIDTH" "$HEIGHT" "http://localhost:18091/index.html" 2>&1 | head -60
rm -f "$ROOT/.tmp-screenshot-frames.mjs"

# Сборка видео через ffmpeg-python (без ffmpeg CLI)
echo "╪ Сборка видео..."
/usr/bin/python3 - <<PYEOF
import os
import glob
from PIL import Image

frames_dir = '$FRAMES_DIR'
out = '$OUTPUT'
fps = $FPS

frames = sorted(glob.glob(os.path.join(frames_dir, '*.png')))
if not frames:
    print('  ERROR: no frames found')
    exit(1)

print(f'  Кадров: {len(frames)} @ {fps} fps')

# Собираем GIF (альтернатива MP4 без ffmpeg)
images = [Image.open(f).convert('P', palette=Image.ADAPTIVE) for f in frames]
gif_out = out.replace('.mp4', '.gif')
images[0].save(
    gif_out,
    save_all=True,
    append_images=images[1:],
    duration=int(1000/fps),
    loop=0,
    optimize=True
)
print(f'  ✅ GIF: {gif_out} ({os.path.getsize(gif_out)} bytes)')

# Если у нас есть ffmpeg-python — пытаемся сделать MP4
try:
    import ffmpeg
    # Проверяем, есть ли ffmpeg binary
    ffmpeg.input('pipe:0', f='concat', safe=0).output('null').run(capture_stdout=True, capture_stderr=True)
    has_ffmpeg = True
except (Exception, FileNotFoundError) as e:
    print(f'  ffmpeg-python недоступен: {e}')
    has_ffmpeg = False

if has_ffmpeg:
    # MP4 через ffmpeg-python
    video = None  # построить через ImageSequence
    out_paths = []
    for fn in frames:
        pass
    # Простой способ: использовать streams
    process = ffmpeg.input(os.path.join(frames_dir, '%03d-*.png'), pattern_type='glob', framerate=fps)
    process = ffmpeg.output(process, out, vcodec='libx264', pix_fmt='yuv420p', crf=18)
    ffmpeg.run(process, overwrite_output=True)
    print(f'  ✅ MP4: {out} ({os.path.getsize(out)} bytes)')
else:
    print('  (MP4 не создан — ffmpeg нет; GIF — основной формат)')
PYEOF

echo
echo "╪ Видео готово!"
ls -la "$OUTPUT" "${OUTPUT%.mp4}.gif" 2>/dev/null | head -5
