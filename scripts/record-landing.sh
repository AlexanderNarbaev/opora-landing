#!/bin/bash
set -e

# ============================================================
# Opora Landing — серия скриншотов для презентации
# Использование:
#   ./scripts/record-landing.sh                   # в .screenshots/<date>
#   ./scripts/record-landing.sh ./my-out/        # в свою папку
# Требования: chromium-browser, python3
# ============================================================

OUT_DIR="${1:-.screenshots/$(date +%Y-%m-%d_%H%M%S)}"
mkdir -p "$OUT_DIR"
USER_DATA_DIR="/tmp/chromium-userdata-landing"
mkdir -p "$USER_DATA_DIR" 2>/dev/null || USER_DATA_DIR="./.chromium-userdata-landing"
mkdir -p "$USER_DATA_DIR"

# Поиск браузера
BROWSER=""
for b in chromium-browser google-chrome chromium google-chrome-stable; do
  if command -v "$b" >/dev/null 2>&1; then BROWSER="$b"; break; fi
done
if [ -z "$BROWSER" ]; then
  echo "Не найден chromium/chrome."
  exit 1
fi

# Запуск http-сервера (Jekyll не установлен)
PORT=18091
echo "═══ Opora Landing — серия скриншотов ═══"
echo "Браузер: $BROWSER"
echo "Папка:   $OUT_DIR"
echo "Сервер:  http://localhost:$PORT"
echo

# Запуск http-сервера в фоне
cd "$(dirname "$0")/.."
/usr/bin/python3 -m http.server $PORT > /tmp/landing-http.log 2>&1 &
HTTP_PID=$!
trap "kill $HTTP_PID 2>/dev/null || true" EXIT
sleep 2

WIDTH=1400
HEIGHT=1200
URL_BASE="http://localhost:$PORT/index.html"

# Снимок 1: hero
echo "[1/5] Hero — Главная"
$BROWSER --headless --disable-gpu --no-sandbox --hide-scrollbars \
  --disable-dev-shm-usage --disable-features=SingletonLock \
  --user-data-dir="$USER_DATA_DIR" \
  --window-size=$WIDTH,$HEIGHT \
  --virtual-time-budget=4000 \
  --screenshot="$OUT_DIR/01-hero.png" \
  "$URL_BASE" 2>/dev/null
ls -la "$OUT_DIR/01-hero.png" 2>/dev/null | awk '{print "  → "$5" bytes"}'

# Снимок 2: таб Верификация
echo "[2/5] Таб Верификация (с активным брендом)"
$BROWSER --headless --disable-gpu --no-sandbox --hide-scrollbars \
  --disable-dev-shm-usage --disable-features=SingletonLock \
  --user-data-dir="$USER_DATA_DIR" \
  --window-size=$WIDTH,$HEIGHT \
  --virtual-time-budget=5000 \
  --screenshot="$OUT_DIR/02-verify-sber.png" \
  "$URL_BASE?demo=verify-sber" 2>/dev/null
ls -la "$OUT_DIR/02-verify-sber.png" 2>/dev/null | awk '{print "  → "$5" bytes"}'

# Снимок 3: таб Баллы (после 2 покупок)
echo "[3/5] Таб Баллы (после покупок)"
$BROWSER --headless --disable-gpu --no-sandbox --hide-scrollbars \
  --disable-dev-shm-usage --disable-features=SingletonLock \
  --user-data-dir="$USER_DATA_DIR" \
  --window-size=$WIDTH,$HEIGHT \
  --virtual-time-budget=5000 \
  --screenshot="$OUT_DIR/03-points.png" \
  "$URL_BASE?demo=points" 2>/dev/null
ls -la "$OUT_DIR/03-points.png" 2>/dev/null | awk '{print "  → "$5" bytes"}'

# Снимок 4: таб Каталог (10 карточек)
echo "[4/5] Таб Каталог (10 брендов)"
$BROWSER --headless --disable-gpu --no-sandbox --hide-scrollbars \
  --disable-dev-shm-usage --disable-features=SingletonLock \
  --user-data-dir="$USER_DATA_DIR" \
  --window-size=$WIDTH,$HEIGHT \
  --virtual-time-budget=5000 \
  --screenshot="$OUT_DIR/04-catalog.png" \
  "$URL_BASE?demo=catalog" 2>/dev/null
ls -la "$OUT_DIR/04-catalog.png" 2>/dev/null | awk '{print "  → "$5" bytes"}'

# Снимок 5: Полная длинная страница
echo "[5/5] Полная страница (full-page)"
$BROWSER --headless --disable-gpu --no-sandbox --hide-scrollbars \
  --disable-dev-shm-usage --disable-features=SingletonLock \
  --user-data-dir="$USER_DATA_DIR" \
  --window-size=$WIDTH,$HEIGHT \
  --virtual-time-budget=5000 \
  --screenshot="$OUT_DIR/05-full.png" \
  --full-page \
  "$URL_BASE" 2>/dev/null
ls -la "$OUT_DIR/05-full.png" 2>/dev/null | awk '{print "  → "$5" bytes"}'

echo
echo "═══ Готово ═══"
ls -la "$OUT_DIR" | awk '{print "  "$NF"  "$5" bytes"}' | grep png