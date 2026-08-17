/* ============================================================
   prototype.js — кликабельный прототип MVP для лендинга «Опоры»
   2 ядра: верификация брендов + баллы лояльности
   Полная версия для показа MVP

   Использует локальные данные (Jekyll статический).
   Структура идентична mock-service на демо:
     GET  /api/mock/catalog/brands           — 50+ брендов
     GET  /api/mock/catalog/grading          — уровни доверия
     POST /api/demo/verify?inn=<inn>         — верификация бренда
     GET  /api/mock/loyalty/accounts/{id}    — кошелёк баллов (mock)
   ============================================================ */

(function () {
  'use strict';

  /* ── 50+ брендов (синхронизировано с mock-service) ──────── */
  const BRANDS = {
    // Реальные бренды с публичными данными
    '7707083893': { name: 'Сбер', category: 'Финансы', grade: 'gold', region: 'Москва', ogrn: '1027700132195', established: 1991, products: 12, status: 'Действующее', esia: 'Подтверждён', honest: 'Участник' },
    '7728168971': { name: 'Вкусно — и точка', category: 'Еда', grade: 'gold', region: 'Москва', ogrn: '1027700132195', established: 1990, products: 28, status: 'Действующее', esia: 'Подтверждён', honest: 'Участник' },
    // Демо-бренды с вымышленными ИНН (9999...)
    '7725715914': { name: 'Опора (демо-бренд)', category: 'Цифровые сервисы', grade: 'silver', region: 'Москва', ogrn: '7725715914012', established: 2026, products: 8, status: 'Действующее', esia: 'Подтверждён', honest: '—' },
    '9999000002': { name: 'Казбековская сыроварня', category: 'Сыры', grade: 'gold', region: 'Северная Осетия', ogrn: '9999000002345', established: 2019, products: 6, status: 'Действующее', esia: 'Подтверждён', honest: 'Участник' },
    '9999000003': { name: 'Богородская игрушка', category: 'Игрушки', grade: 'gold', region: 'Нижний Новгород', ogrn: '9999000003456', established: 1992, products: 45, status: 'Действующее', esia: 'Подтверждён', honest: 'Участник' },
    '9999000004': { name: 'Павловопосадский платок', category: 'Текстиль', grade: 'silver', region: 'Московская область', ogrn: '9999000004567', established: 1795, products: 12, status: 'Действующее', esia: 'Подтверждён', honest: '—' },
    '9999000005': { name: 'Керамика Гжели', category: 'Керамика', grade: 'gold', region: 'Московская область', ogrn: '9999000005678', established: 1998, products: 9, status: 'Действующее', esia: 'Подтверждён', honest: 'Участник' },
    '9999000006': { name: 'Калевала-парфюм', category: 'Парфюмерия', grade: 'silver', region: 'Карелия', ogrn: '9999000006789', established: 2022, products: 4, status: 'Действующее', esia: 'Подтверждён', honest: '—' },
    '9999000007': { name: 'Ивантеевский трикотаж', category: 'Текстиль', grade: 'bronze', region: 'Московская область', ogrn: '9999000007890', established: 2015, products: 7, status: 'Действующее', esia: 'Подтверждён', honest: '—', note: 'Качество упало, ожидается понижение грейда' },
    '9999000008': { name: 'Подольские огурцы', category: 'Овощи', grade: 'gold', region: 'Московская область', ogrn: '9999000008901', established: 2010, products: 3, status: 'Действующее', esia: 'Подтверждён', honest: 'Участник' },
    // Расширенный набор — народные промыслы
    '9999100001': { name: 'Хохлома (Семёнов)', category: 'Народные промыслы', grade: 'gold', region: 'Нижегородская обл.', ogrn: '9999100001234', established: 1690, products: 22, status: 'Действующее', esia: 'Подтверждён', honest: 'Участник' },
    '9999100002': { name: 'Дымковская игрушка', category: 'Народные промылы', grade: 'gold', region: 'Киров', ogrn: '9999100002345', established: 1644, products: 8, status: 'Действующее', esia: 'Подтверждён', honest: 'Участник' },
    '9999100003': { name: 'Гжель (фарфор)', category: 'Народные промыслы', grade: 'gold', region: 'Московская обл.', ogrn: '9999100003456', established: 1345, products: 31, status: 'Действующее', esia: 'Подтверждён', honest: 'Участник' },
    '9999100004': { name: 'Тульский пряник', category: 'Кондитерские изделия', grade: 'gold', region: 'Тула', ogrn: '9999100004567', established: 1685, products: 15, status: 'Действующее', esia: 'Подтверждён', honest: 'Участник' },
    '9999100005': { name: 'Жостовская роспись', category: 'Народные промыслы', grade: 'silver', region: 'Московская обл.', ogrn: '9999100005678', established: 1825, products: 18, status: 'Действующее', esia: 'Подтверждён', honest: '—' },
    '9999100006': { name: 'Палехская миниатюра', category: 'Народные промыслы', grade: 'silver', region: 'Ивановская обл.', ogrn: '9999100006789', established: 1924, products: 9, status: 'Действующее', esia: 'Подтверждён', honest: '—' },
    '9999100007': { name: 'Городецкая роспись', category: 'Народные промыслы', grade: 'silver', region: 'Нижегородская обл.', ogrn: '9999100007890', established: 1870, products: 14, status: 'Действующее', esia: 'Подтверждён', honest: '—' },
    '9999100008': { name: 'Вологодское кружево', category: 'Народные промыслы', grade: 'silver', region: 'Вологда', ogrn: '9999100008901', established: 1820, products: 7, status: 'Действующее', esia: 'Подтверждён', honest: '—' },
    '9999100009': { name: 'Павлово-Посадский платок', category: 'Текстиль', grade: 'silver', region: 'Московская обл.', ogrn: '9999100009901', established: 1795, products: 12, status: 'Действующее', esia: 'Подтверждён', honest: '—' },
    '9999100010': { name: 'Мстёрский лак', category: 'Народные промыслы', grade: 'silver', region: 'Владимирская обл.', ogrn: '9999100010012', established: 1923, products: 11, status: 'Действующее', esia: 'Подтверждён', honest: '—' },
    // IT и цифровые сервисы
    '9999200001': { name: '1С-Битрикс', category: 'Цифровые сервисы', grade: 'gold', region: 'Калининград', ogrn: '9999200001234', established: 1998, products: 8, status: 'Действующее', esia: 'Подтверждён', honest: 'Участник' },
    '9999200002': { name: 'Лаборатория Касперского', category: 'Цифровые сервисы', grade: 'gold', region: 'Москва', ogrn: '9999200002345', established: 1997, products: 24, status: 'Действующее', esia: 'Подтверждён', honest: 'Участник' },
    '9999200003': { name: 'Аквариус', category: 'Цифровые сервисы', grade: 'silver', region: 'Московская обл.', ogrn: '9999200003456', established: 1989, products: 14, status: 'Действующее', esia: 'Подтверждён', honest: '—' },
    // Продукты питания
    '9999300001': { name: 'Красный Октябрь', category: 'Кондитерские изделия', grade: 'gold', region: 'Москва', ogrn: '9999300001234', established: 1851, products: 320, status: 'Действующее', esia: 'Подтверждён', honest: 'Участник' },
    '9999300002': { name: 'Вологодское масло', category: 'Молочные продукты', grade: 'gold', region: 'Вологда', ogrn: '9999300002345', established: 1938, products: 85, status: 'Действующее', esia: 'Подтверждён', honest: 'Участник' },
    '9999300003': { name: 'Дымов', category: 'Мясные деликатесы', grade: 'gold', region: 'Владимирская обл.', ogrn: '9999300003456', established: 2002, products: 210, status: 'Действующее', esia: 'Подтверждён', honest: 'Участник' },
    '9999300004': { name: 'Черноголовка', category: 'Напитки', grade: 'gold', region: 'Московская обл.', ogrn: '9999300004567', established: 1998, products: 180, status: 'Действующее', esia: 'Подтверждён', honest: 'Участник' },
    '9999300005': { name: 'Балтика', category: 'Пиво', grade: 'gold', region: 'Санкт-Петербург', ogrn: '9999300005678', established: 1990, products: 95, status: 'Действующее', esia: 'Подтверждён', honest: 'Участник' },
    '9999300006': { name: 'Мираторг', category: 'Мясо', grade: 'gold', region: 'Москва', ogrn: '9999300006789', established: 1995, products: 250, status: 'Действующее', esia: 'Подтверждён', honest: 'Участник' },
    '9999300007': { name: 'Макфа', category: 'Макаронные изделия', grade: 'silver', region: 'Челябинск', ogrn: '9999300007890', established: 1937, products: 70, status: 'Действующее', esia: 'Подтверждён', honest: '—' },
    '9999300008': { name: 'Ehrmann', category: 'Молочные продукты', grade: 'silver', region: 'Московская обл.', ogrn: '9999300008901', established: 1932, products: 110, status: 'Действующее', esia: 'Подтверждён', honest: '—' },
    '9999300009': { name: 'Каждый день', category: 'Хлеб и выпечка', grade: 'silver', region: 'Москва', ogrn: '9999300009901', established: 2003, products: 130, status: 'Действующее', esia: 'Подтверждён', honest: '—' },
    '9999300010': { name: 'Вкусный дом', category: 'Сыры', grade: 'silver', region: 'Московская обл.', ogrn: '9999300010012', established: 1998, products: 90, status: 'Действующее', esia: 'Подтверждён', honest: '—' },
    // Одежда и обувь
    '9999400001': { name: 'Спортмастер', category: 'Спорттовары', grade: 'gold', region: 'Москва', ogrn: '9999400001234', established: 1992, products: 480, status: 'Действующее', esia: 'Подтверждён', honest: 'Участник' },
    '9999400002': { name: 'ЦентрОбувь', category: 'Обувь', grade: 'silver', region: 'Москва', ogrn: '9999400002345', established: 1992, products: 350, status: 'Действующее', esia: 'Подтверждён', honest: '—' },
    '9999400003': { name: 'Эконика', category: 'Обувь', grade: 'silver', region: 'Москва', ogrn: '9999400003456', established: 2000, products: 220, status: 'Действующее', esia: 'Подтверждён', honest: '—' },
    '9999400004': { name: 'Леовик', category: 'Продукты питания', grade: 'silver', region: 'Москва', ogrn: '9999400004567', established: 1992, products: 240, status: 'Действующее', esia: 'Подтверждён', honest: '—' },
    '9999400005': { name: 'BELWEST', category: 'Обувь', grade: 'silver', region: 'Смоленск', ogrn: '9999400005678', established: 1939, products: 140, status: 'Действующее', esia: 'Подтверждён', honest: '—' },
    '9999400006': { name: 'Терволина', category: 'Обувь', grade: 'silver', region: 'Санкт-Петербург', ogrn: '9999400006789', established: 1998, products: 180, status: 'Действующее', esia: 'Подтверждён', honest: '—' },
    '9999400007': { name: 'Sinta Sole', category: 'Обувь', grade: 'bronze', region: 'Самара', ogrn: '9999400007890', established: 1987, products: 60, status: 'Действующее', esia: 'Подтверждён', honest: '—' },
    '9999400008': { name: 'Котофей', category: 'Обувь', grade: 'silver', region: 'Москва', ogrn: '9999400008901', established: 1936, products: 110, status: 'Действующее', esia: 'Подтверждён', honest: '—' },
    '9999400009': { name: 'Семёновская керамика', category: 'Народные промыслы', grade: 'silver', region: 'Нижегородская обл.', ogrn: '9999400009901', established: 1758, products: 17, status: 'Действующее', esia: 'Подтверждён', honest: '—' },
    '9999400010': { name: 'Конфаэль', category: 'Кондитерские изделия', grade: 'silver', region: 'Москва', ogrn: '9999400010012', established: 1999, products: 95, status: 'Действующее', esia: 'Подтверждён', honest: '—' },
    // Косметика и парфюмерия
    '9999500001': { name: 'Natura Siberica', category: 'Косметика', grade: 'gold', region: 'Москва', ogrn: '9999500001234', established: 1998, products: 280, status: 'Действующее', esia: 'Подтверждён', honest: 'Участник' },
    '9999500002': { name: 'Русская косметика', category: 'Косметика', grade: 'silver', region: 'Москва', ogrn: '9999500002345', established: 1993, products: 150, status: 'Действующее', esia: 'Подтверждён', honest: '—' },
    '9999500003': { name: 'Greenway', category: 'Бытовая химия', grade: 'silver', region: 'Москва', ogrn: '9999500003456', established: 2003, products: 200, status: 'Действующее', esia: 'Подтверждён', honest: '—' },
    '9999500004': { name: 'Сибирское здоровье', category: 'Косметика', grade: 'silver', region: 'Новосибирск', ogrn: '9999500004567', established: 1996, products: 320, status: 'Действующее', esia: 'Подтверждён', honest: '—' },
    '9999500005': { name: 'Чистая линия', category: 'Косметика', grade: 'gold', region: 'Москва', ogrn: '9999500005678', established: 1993, products: 180, status: 'Действующее', esia: 'Подтверждён', honest: 'Участник' },
    '9999500006': { name: 'Вкусвилл', category: 'Продукты питания', grade: 'gold', region: 'Москва', ogrn: '9999500006789', established: 2012, products: 380, status: 'Действующее', esia: 'Подтверждён', honest: 'Участник' },
    '9999500007': { name: 'Барни', category: 'Кондитерские изделия', grade: 'gold', region: 'Московская обл.', ogrn: '9999500007890', established: 1993, products: 24, status: 'Действующее', esia: 'Подтверждён', honest: 'Участник' },
    '9999500008': { name: 'Сокольская косметика', category: 'Косметика', grade: 'bronze', region: 'Москва', ogrn: '9999500008901', established: 1999, products: 80, status: 'Действующее', esia: 'Подтверждён', honest: '—' },
    '9999500009': { name: 'Aromashka', category: 'Косметика', grade: 'silver', region: 'Москва', ogrn: '9999500009901', established: 2014, products: 95, status: 'Действующее', esia: 'Подтверждён', honest: '—' },
    '9999500010': { name: 'Скин Системс', category: 'Косметика', grade: 'bronze', region: 'Московская обл.', ogrn: '9999500010012', established: 2008, products: 60, status: 'Действующее', esia: 'Подтверждён', honest: '—', note: 'Качество дешёвое, ожидается понижение грейда' }
  };

  const GRADE_LABEL = { gold: 'Золото', silver: 'Серебро', bronze: 'Бронза' };
  const GRADE_BADGE = { gold: 'badge-gold', silver: 'badge-silver', bronze: 'badge-bronze' };
  const GRADE_RANK = { gold: 3, silver: 2, bronze: 1 };

  /* ── Утилиты ────────────────────────────────────────────── */
  function $(id) { return document.getElementById(id); }
  function pad(n) { return n < 10 ? '0' + n : '' + n; }
  function fmtTime() {
    var d = new Date();
    return pad(d.getHours()) + ':' + pad(d.getMinutes());
  }
  function escapeHtml(s) {
    if (s == null) return '';
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function debounce(fn, ms) {
    var t;
    return function () {
      var ctx = this, args = arguments;
      clearTimeout(t);
      t = setTimeout(function () { fn.apply(ctx, args); }, ms);
    };
  }

  /* ── Tabs ────────────────────────────────────────────────── */
  function initTabs() {
    var tabs = document.querySelectorAll('.proto-tab');
    var panels = document.querySelectorAll('.proto-panel');
    Array.prototype.forEach.call(tabs, function (tab) {
      tab.addEventListener('click', function () {
        var target = tab.dataset.tab;
        Array.prototype.forEach.call(tabs, function (t) {
          t.classList.remove('proto-tab--active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('proto-tab--active');
        tab.setAttribute('aria-selected', 'true');
        Array.prototype.forEach.call(panels, function (p) {
          if (p.id === 'proto-' + target) {
            p.classList.add('proto-panel--active');
            p.removeAttribute('hidden');
          } else {
            p.classList.remove('proto-panel--active');
            p.setAttribute('hidden', '');
          }
        });
        // Обновляем URL hash без скролла
        if (history.replaceState) {
          history.replaceState(null, '', '#proto-' + target);
        }
        // Сообщаем аналитике / мастеру
        try {
          window.dispatchEvent(new CustomEvent('opora:tabchange', { detail: { tab: target } }));
        } catch (_) {}
      });
    });

    // При загрузке открываем таб по hash
    var hash = (location.hash || '').replace(/^#/, '');
    if (hash && /^proto-(verify|points|catalog)$/.test(hash)) {
      var tab = document.querySelector('.proto-tab[data-tab="' + hash.replace('proto-', '') + '"]');
      if (tab) tab.click();
    }
  }

  /* ── TAB 1: Верификация бренда ──────────────────────────── */
  var verifyInput, verifyBtn, verifyResult, verifySteps, verifyFilter;

  function findBrandByName(query) {
    query = (query || '').toLowerCase().trim();
    if (!query) return null;
    var keys = Object.keys(BRANDS);
    for (var i = 0; i < keys.length; i++) {
      var inn = keys[i];
      if (BRANDS[inn].name.toLowerCase().indexOf(query) >= 0) return inn;
    }
    return null;
  }

  function renderBrand(query) {
    var inn = String(query || '').replace(/\D/g, '').slice(0, 12);
    // Если по имени — ищем
    if (!inn && query) {
      var byName = findBrandByName(query);
      if (byName) inn = byName;
    }
    var brand = BRANDS[inn] || {
      name: query, grade: 'silver', region: '—', ogrn: '—', established: '—',
      products: 0, status: 'Не найден', esia: '—', honest: '—'
    };
    var gradeKey = GRADE_RANK[brand.grade] ? brand.grade : 'silver';
    var gradeLabel = GRADE_LABEL[gradeKey];
    var note = brand.note
      ? '<div class="brand-card__row brand-card__row--warn"><span class="brand-card__label">⚠️ Замечание</span><span class="brand-card__value--warn">' + escapeHtml(brand.note) + '</span></div>'
      : '';

    verifyResult.innerHTML =
      '<div class="brand-card">' +
        '<div class="brand-card__header">' +
          '<div>' +
            '<div class="brand-card__name">' + escapeHtml(brand.name) + '</div>' +
            '<div class="brand-card__inn">ИНН: ' + escapeHtml(inn || query) + '</div>' +
          '</div>' +
          '<div class="badge ' + GRADE_BADGE[gradeKey] + '">' + gradeLabel + '</div>' +
        '</div>' +
        '<div class="brand-card__row"><span class="brand-card__label">Отрасль</span><span class="brand-card__value">' + escapeHtml(brand.category) + '</span></div>' +
        '<div class="brand-card__row"><span class="brand-card__label">Регион</span><span class="brand-card__value">' + escapeHtml(brand.region) + '</span></div>' +
        '<div class="brand-card__row"><span class="brand-card__label">ОГРН</span><span class="brand-card__value">' + escapeHtml(brand.ogrn) + '</span></div>' +
        '<div class="brand-card__row"><span class="brand-card__label">Год основания</span><span class="brand-card__value">' + escapeHtml(brand.established) + '</span></div>' +
        '<div class="brand-card__row"><span class="brand-card__label">Статус</span><span class="brand-card__value brand-card__value--ok">' + escapeHtml(brand.status) + '</span></div>' +
        '<div class="brand-card__row"><span class="brand-card__label">ЕСИА</span><span class="brand-card__value brand-card__value--ok">' + escapeHtml(brand.esia) + '</span></div>' +
        '<div class="brand-card__row"><span class="brand-card__label">Честный знак</span><span class="brand-card__value brand-card__value--ok">' + escapeHtml(brand.honest) + '</span></div>' +
        '<div class="brand-card__row"><span class="brand-card__label">Товаров в каталоге</span><span class="brand-card__value">' + escapeHtml(brand.products) + '</span></div>' +
        note +
      '</div>';

    // Скрываем steps
    if (verifySteps) verifySteps.setAttribute('hidden', '');
  }

  function runVerification(query) {
    var q = (query || '').trim();
    if (!q) return;
    var digits = q.replace(/\D/g, '');
    if (digits && digits.length < 10) {
      verifyResult.innerHTML = '<div class="proto-placeholder"><div class="proto-placeholder__icon">!</div><p>ИНН должен быть от 10 цифр</p></div>';
      return;
    }
    verifyResult.innerHTML = '<div class="proto-placeholder proto-placeholder--loading"><div class="proto-placeholder__icon">⌕</div><p>Проверка по 4 государственным реестрам…</p></div>';
    if (verifySteps) verifySteps.removeAttribute('hidden');
    var steps = verifySteps ? verifySteps.querySelectorAll('.proto-step') : [];
    Array.prototype.forEach.call(steps, function (s) {
      s.classList.remove('proto-step--active', 'proto-step--done');
      s.querySelector('.proto-step__status').textContent = 'Ожидание';
    });

    var i = 0;
    function tick() {
      if (i > 0) {
        var prev = steps[i - 1];
        if (prev) {
          prev.classList.remove('proto-step--active');
          prev.classList.add('proto-step--done');
          var statusEl = prev.querySelector('.proto-step__status');
          if (statusEl) statusEl.textContent = '✓ Готово';
        }
      }
      if (i >= steps.length) {
        renderBrand(q);
        return;
      }
      var cur = steps[i];
      if (cur) {
        cur.classList.add('proto-step--active');
        var statusEl = cur.querySelector('.proto-step__status');
        if (statusEl) statusEl.textContent = 'Проверка…';
      }
      i++;
      setTimeout(tick, 350 + Math.random() * 250);
    }
    setTimeout(tick, 250);
  }

  function initVerify() {
    verifyInput = $('verifyInput');
    verifyBtn = $('verifyBtn');
    verifyResult = $('verifyResult');
    verifySteps = $('verifySteps');
    if (!verifyBtn || !verifyInput) return;

    // Чекбоксы примеров
    var chips = document.querySelectorAll('.proto-chip');
    Array.prototype.forEach.call(chips, function (chip) {
      chip.addEventListener('click', function () {
        var inn = chip.dataset.inn || '';
        if (verifyInput) verifyInput.value = inn;
        runVerification(inn);
      });
    });

    if (verifyBtn) {
      verifyBtn.addEventListener('click', function () {
        runVerification(verifyInput.value);
      });
    }

    if (verifyInput) {
      verifyInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          if (verifyBtn) verifyBtn.click();
        }
      });
    }

    // Поиск по брендам (с автодополнением)
    if (verifyInput) {
      var suggestBox = $('verifySuggest');
      if (suggestBox) {
        verifyInput.addEventListener('input', debounce(function () {
          var q = verifyInput.value.toLowerCase().trim();
          if (q.length < 2) {
            suggestBox.innerHTML = '';
            suggestBox.setAttribute('hidden', '');
            return;
          }
          var matches = [];
          Object.keys(BRANDS).forEach(function (inn) {
            if (BRANDS[inn].name.toLowerCase().indexOf(q) >= 0 && matches.length < 6) {
              matches.push({ inn: inn, name: BRANDS[inn].name });
            }
          });
          if (matches.length === 0) {
            suggestBox.innerHTML = '';
            suggestBox.setAttribute('hidden', '');
            return;
          }
          suggestBox.innerHTML = matches.map(function (m) {
            return '<button class="proto-suggest" data-inn="' + m.inn + '">' + escapeHtml(m.name) + ' · ' + m.inn + '</button>';
          }).join('');
          suggestBox.removeAttribute('hidden');
          var buttons = suggestBox.querySelectorAll('.proto-suggest');
          Array.prototype.forEach.call(buttons, function (btn) {
            btn.addEventListener('click', function () {
              verifyInput.value = btn.dataset.inn;
              suggestBox.innerHTML = '';
              suggestBox.setAttribute('hidden', '');
              runVerification(btn.dataset.inn);
            });
          });
        }, 150));
      }
    }
  }

  /* ── TAB 2: Баллы лояльности (цифровой рубль) ──────────── */
  var balance = 0;
  var totalEarned = 0;
  var totalSpent = 0;
  var totalSubsidy = 0;
  var balanceEl, statEarnedEl, statSpentEl, statSubsidyEl, feedEl, pointsEarnBtn, pointsSpendBtn;

  function bump(el) {
    if (!el) return;
    el.classList.add('balance-value--bump');
    setTimeout(function () { el.classList.remove('balance-value--bump'); }, 350);
  }

  function addFeedItem(opts) {
    var empty = feedEl ? feedEl.querySelector('.proto-feed__item--empty') : null;
    if (empty) empty.remove();
    var item = document.createElement('div');
    item.className = 'proto-feed__item' + (opts.className ? ' ' + opts.className : '');
    var icon = opts.spent ? '−' : (opts.subsidy ? '★' : '+');
    var sign = opts.spent ? '−' : '+';
    var colorClass = opts.spent ? 'proto-feed__item--spent' : (opts.subsidy ? 'proto-feed__item--subsidy' : '');
    var amountColor = opts.spent ? 'proto-feed__amount--spent' : (opts.subsidy ? 'proto-feed__amount--subsidy' : '');
    item.className = 'proto-feed__item ' + colorClass;
    item.innerHTML =
      '<div class="proto-feed__icon">' + icon + '</div>' +
      '<div class="proto-feed__content">' +
        '<div class="proto-feed__title">' + escapeHtml(opts.title) + '</div>' +
        '<div class="proto-feed__meta">' + escapeHtml(opts.brand) + ' · ' + fmtTime() + '</div>' +
      '</div>' +
      '<div class="proto-feed__amount ' + amountColor + '">' + sign + ' ' + opts.amount + ' ₽₿</div>';
    if (feedEl) feedEl.insertBefore(item, feedEl.firstChild);
    // Ограничиваем ленту 50 элементами
    var items = feedEl ? feedEl.querySelectorAll('.proto-feed__item') : [];
    if (items.length > 50) {
      for (var i = 50; i < items.length; i++) {
        items[i].remove();
      }
    }
  }

  function updateStats() {
    if (balanceEl) balanceEl.textContent = balance;
    if (statEarnedEl) statEarnedEl.textContent = totalEarned;
    if (statSpentEl) statSpentEl.textContent = totalSpent;
    if (statSubsidyEl) statSubsidyEl.textContent = totalSubsidy;
    if (balanceEl) bump(balanceEl);
  }

  function initPoints() {
    balanceEl = $('pointsBalance');
    statEarnedEl = $('statEarned');
    statSpentEl = $('statSpent');
    statSubsidyEl = $('statCashback');
    feedEl = $('pointsFeed');
    pointsEarnBtn = $('pointsEarn');
    pointsSpendBtn = $('pointsSpend');
    if (!pointsEarnBtn || !pointsSpendBtn) return;

    pointsEarnBtn.addEventListener('click', function () {
      var earn = 50;
      balance += earn;
      totalEarned += earn;
      // Госсубсидия для Золото-грейда (Сбер — наш якорный партнёр)
      totalSubsidy += 15;
      updateStats();
      addFeedItem({ title: 'Кешбэк за подписку СберПрайм', brand: 'Сбер (GOLD) · ИНН 7707083893', amount: earn });
      addFeedItem({ title: 'Госсубсидия (Золото-грейд)', brand: 'Государство · ФЗ-224', amount: 15, subsidy: true });
    });

    pointsSpendBtn.addEventListener('click', function () {
      if (balance < 100) {
        // Не показываем alert в iframe — используем inline-сообщение
        var balEl = $('pointsBalance');
        if (balEl) {
          balEl.classList.add('balance-shake');
          setTimeout(function () { balEl.classList.remove('balance-shake'); }, 600);
        }
        return;
      }
      balance -= 100;
      totalSpent += 100;
      updateStats();
      addFeedItem({
        title: 'Скидка у партнёра: билет в кино',
        brand: 'Партнёрская сеть',
        amount: 100,
        spent: true
      });
    });
  }

  /* ── TAB 3: Каталог (с фильтрами) ──────────────────────── */
  var catalogGrid, catalogSearch, catalogFilter;

  function initCatalog() {
    catalogGrid = $('catalogGrid');
    catalogSearch = $('catalogSearch');
    catalogFilter = $('catalogFilter');
    if (!catalogGrid) return;

    var currentFilter = 'all';
    var currentQuery = '';

    function renderCatalog() {
      var entries = Object.keys(BRANDS).map(function (inn) {
        return Object.assign({ inn: inn }, BRANDS[inn]);
      });
      // Фильтр по грейду
      if (currentFilter !== 'all') {
        entries = entries.filter(function (b) { return b.grade === currentFilter; });
      }
      // Поиск
      var q = currentQuery.toLowerCase().trim();
      if (q) {
        entries = entries.filter(function (b) {
          return b.name.toLowerCase().indexOf(q) >= 0
            || b.category.toLowerCase().indexOf(q) >= 0
            || b.region.toLowerCase().indexOf(q) >= 0;
        });
      }
      // Сортировка: gold первым, потом silver, потом bronze
      entries.sort(function (a, b) {
        return (GRADE_RANK[b.grade] || 0) - (GRADE_RANK[a.grade] || 0);
      });

      if (entries.length === 0) {
        catalogGrid.innerHTML = '<p class="catalog-empty">Ничего не найдено. Попробуйте другой запрос.</p>';
        return;
      }

      catalogGrid.innerHTML = entries.map(function (b) {
        var badgeClass = GRADE_BADGE[b.grade] || 'badge-silver';
        var label = GRADE_LABEL[b.grade] || 'Серебро';
        var noteFlag = b.note ? ' ⚠️' : '';
        return (
          '<button class="catalog-card" data-inn="' + b.inn + '" data-grade="' + b.grade + '">' +
            '<div class="catalog-card__head">' +
              '<div class="catalog-card__name">' + escapeHtml(b.name) + noteFlag + '</div>' +
              '<div class="badge ' + badgeClass + ' catalog-card__badge">' + label + '</div>' +
            '</div>' +
            '<div class="catalog-card__meta">' +
              '<div class="catalog-card__row"><span>ИНН</span><span>' + escapeHtml(b.inn) + '</span></div>' +
              '<div class="catalog-card__row"><span>Отрасль</span><span>' + escapeHtml(b.category) + '</span></div>' +
              '<div class="catalog-card__row"><span>Регион</span><span>' + escapeHtml(b.region) + '</span></div>' +
              '<div class="catalog-card__row"><span>Товаров</span><span>' + escapeHtml(b.products) + '</span></div>' +
            '</div>' +
          '</button>'
        );
      }).join('');

      // Клик по карточке → открываем верификацию + переключаем таб
      var cards = catalogGrid.querySelectorAll('.catalog-card');
      Array.prototype.forEach.call(cards, function (card) {
        card.addEventListener('click', function () {
          var inn = card.dataset.inn;
          // Открываем таб «Верификация», устанавливаем ИНН, кликаем «Проверить»
          var verifyTab = document.querySelector('.proto-tab[data-tab="verify"]');
          if (verifyTab) verifyTab.click();
          if (verifyInput) verifyInput.value = inn;
          if (verifyBtn) setTimeout(function () { verifyBtn.click(); }, 350);
        });
      });
    }

    if (catalogSearch) {
      catalogSearch.addEventListener('input', debounce(function () {
        currentQuery = catalogSearch.value;
        renderCatalog();
      }, 200));
    }

    if (catalogFilter) {
      var filterButtons = catalogFilter.querySelectorAll('[data-grade-filter]');
      Array.prototype.forEach.call(filterButtons, function (btn) {
        btn.addEventListener('click', function () {
          currentFilter = btn.dataset.gradeFilter;
          Array.prototype.forEach.call(filterButtons, function (b) {
            b.classList.remove('proto-filter--active');
          });
          btn.classList.add('proto-filter--active');
          renderCatalog();
        });
      });
    }

    renderCatalog();
  }

  /* ── Видео-плеер (встроенный inline) ─────────────────── */
  function initVideo() {
    var videos = document.querySelectorAll('video[data-demo-video]');
    Array.prototype.forEach.call(videos, function (v) {
      // Плей/пауза на клик
      v.addEventListener('click', function () {
        if (v.paused) v.play(); else v.pause();
      });
      // Отслеживаем время для аналитики
      v.addEventListener('timeupdate', debounce(function () {
        try {
          window.dispatchEvent(new CustomEvent('opora:video', {
            detail: { time: v.currentTime, duration: v.duration }
          }));
        } catch (_) {}
      }, 1000));
    });
  }

  /* ── Главный старт ─────────────────────────────────────── */
  function init() {
    initTabs();
    initVerify();
    initPoints();
    initCatalog();
    initVideo();

    // Поддержка ?demo= для воспроизводимых скриншотов
    var demo = new URLSearchParams(location.search).get('demo');
    if (demo) {
      setTimeout(function () {
        if (demo === 'verify-sber') {
          var vInput = $('verifyInput');
          if (vInput) {
            vInput.value = '7707083893';
            var vBtn = $('verifyBtn');
            if (vBtn) vBtn.click();
          }
        } else if (demo === 'points') {
          var pTab = document.querySelector('.proto-tab[data-tab="points"]');
          if (pTab) pTab.click();
          var earn = $('pointsEarn');
          if (earn) { earn.click(); earn.click(); }
        } else if (demo === 'catalog') {
          var cTab = document.querySelector('.proto-tab[data-tab="catalog"]');
          if (cTab) cTab.click();
        } else if (demo === 'verify-ivanteev') {
          var vInput2 = $('verifyInput');
          if (vInput2) {
            vInput2.value = '9999000007';
            var vBtn2 = $('verifyBtn');
            if (vBtn2) vBtn2.click();
          }
        }
      }, 500);
    }
  }

  /* ── Запуск ────────────────────────────────────────────── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();