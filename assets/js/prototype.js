/* ============================================================
   prototype.js — кликабельный прототип MVP для лендинга «Опоры»
   2 ядра: верификация брендов + баллы лояльности
   ============================================================
   Это **встроенные** данные (Jekyll статический, нет backend-fetch).
   Полностью соответствует mock-сервису на демо:
     GET /api/mock/catalog/brands
     POST /api/demo/verify?inn=...
     GET /api/mock/catalog/grading
   ============================================================ */

(function () {
  'use strict';

  /* ── Данные (синхронизированы с mock-service) ───────────── */
  const BRANDS = {
    '7707083893': { name: 'Сбер', grade: 'gold', region: 'Москва', ogrn: '1027700132195', established: 1991, products: 12, status: 'Действующее', esia: 'Подтверждён', honest: 'Участник' },
    '7728168971': { name: 'Вкусно — и точка', grade: 'gold', region: 'Москва', ogrn: '1027700132195', established: 1990, products: 28, status: 'Действующее', esia: 'Подтверждён', honest: 'Участник' },
    '7725715914': { name: 'Опора (демо)', grade: 'silver', region: 'Москва', ogrn: '7725715914012', established: 2026, products: 8, status: 'Действующее', esia: 'Подтверждён', honest: '—' },
    '9999000002': { name: 'Казбековская сыроварня', grade: 'gold', region: 'Северная Осетия', ogrn: '9999000002345', established: 2019, products: 6, status: 'Действующее', esia: 'Подтверждён', honest: 'Участник' },
    '9999000003': { name: 'Богородская игрушка', grade: 'gold', region: 'Нижний Новгород', ogrn: '9999000003456', established: 1992, products: 45, status: 'Действующее', esia: 'Подтверждён', honest: 'Участник' },
    '9999000004': { name: 'Павловопосадский платок', grade: 'silver', region: 'Московская область', ogrn: '9999000004567', established: 1795, products: 12, status: 'Действующее', esia: 'Подтверждён', honest: '—' },
    '9999000005': { name: 'Керамика Гжели', grade: 'gold', region: 'Московская область', ogrn: '9999000005678', established: 1998, products: 9, status: 'Действующее', esia: 'Подтверждён', honest: 'Участник' },
    '9999000006': { name: 'Калевала-парфюм', grade: 'silver', region: 'Карелия', ogrn: '9999000006789', established: 2022, products: 4, status: 'Действующее', esia: 'Подтверждён', honest: '—' },
    '9999000007': { name: 'Ивантеевский трикотаж', grade: 'bronze', region: 'Московская область', ogrn: '9999000007890', established: 2015, products: 7, status: 'Действующее', esia: 'Подтверждён', honest: '—', note: 'Качество упало, ожидается понижение грейда' },
    '9999000008': { name: 'Подольские огурцы', grade: 'gold', region: 'Московская область', ogrn: '9999000008901', established: 2010, products: 3, status: 'Действующее', esia: 'Подтверждён', honest: 'Участник' }
  };

  const GRADE_LABEL = { gold: 'Золото', silver: 'Серебро', bronze: 'Бронза' };
  const GRADE_BADGE = { gold: 'badge-gold', silver: 'badge-silver', bronze: 'badge-bronze' };

  /* ── Утилиты ────────────────────────────────────────────── */
  function $(id) { return document.getElementById(id); }
  function fmtTime() {
    var d = new Date();
    var p = function (n) { return n < 10 ? '0' + n : '' + n; };
    return p(d.getHours()) + ':' + p(d.getMinutes());
  }
  function pad(n) { return n < 10 ? '0' + n : '' + n; }
  function escapeHtml(s) {
    if (s == null) return '';
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  /* ── Tabs (работают даже если кнопок несколько) ──────────── */
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
        // Обновляем URL hash без прыжка страницы
        if (history.replaceState) {
          history.replaceState(null, '', '#proto-' + target);
        }
      });
    });
  // Открываем таб по URL hash при загрузке
  var hash = (location.hash || '').replace(/^#/, '');
  if (hash && /^proto-(verify|points|catalog)$/.test(hash)) {
    var tab = document.querySelector('.proto-tab[data-tab="' + hash.replace('proto-', '') + '"]');
    if (tab) tab.click();
  }

  // Поддержка ?demo= для автоматических сценариев (скриншоты, видео)
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
      }
    }, 400);
  }
}

  /* ── TAB 1: Верификация ──────────────────────────────────── */
  var verifyInput, verifyBtn, verifyResult, verifySteps;

  function renderBrand(query) {
    var inn = String(query || '').replace(/\D/g, '').slice(0, 12);
    var brand = BRANDS[inn] || {
      name: query, grade: 'silver', region: '—', ogrn: '—', established: '—',
      products: 0, status: 'Не найден', esia: '—', honest: '—'
    };
    var badgeClass = GRADE_BADGE[brand.grade] || 'badge-silver';
    var gradeLabel = GRADE_LABEL[brand.grade] || 'Серебро';
    var note = brand.note
      ? '<div class="brand-card__row" style="color: var(--orange);"><span class="brand-card__label">⚠️ Замечание</span><span style="color: var(--orange);">' + escapeHtml(brand.note) + '</span></div>'
      : '';

    verifyResult.innerHTML =
      '<div class="brand-card">' +
        '<div class="brand-card__header">' +
          '<div>' +
            '<div class="brand-card__name">' + escapeHtml(brand.name) + '</div>' +
            '<div class="brand-card__inn">ИНН: ' + escapeHtml(inn) + '</div>' +
          '</div>' +
          '<div class="' + badgeClass + '">' + gradeLabel + '</div>' +
        '</div>' +
        '<div class="brand-card__row"><span class="brand-card__label">Регион</span><span class="brand-card__value">' + escapeHtml(brand.region) + '</span></div>' +
        '<div class="brand-card__row"><span class="brand-card__label">ОГРН</span><span class="brand-card__value">' + escapeHtml(brand.ogrn) + '</span></div>' +
        '<div class="brand-card__row"><span class="brand-card__label">Статус</span><span class="brand-card__value brand-card__value--ok">' + escapeHtml(brand.status) + '</span></div>' +
        '<div class="brand-card__row"><span class="brand-card__label">ЕСИА</span><span class="brand-card__value brand-card__value--ok">' + escapeHtml(brand.esia) + '</span></div>' +
        '<div class="brand-card__row"><span class="brand-card__label">Честный знак</span><span class="brand-card__value brand-card__value--ok">' + escapeHtml(brand.honest) + '</span></div>' +
        '<div class="brand-card__row"><span class="brand-card__label">Год основания</span><span class="brand-card__value">' + escapeHtml(brand.established) + '</span></div>' +
        '<div class="brand-card__row"><span class="brand-card__label">Товаров в каталоге</span><span class="brand-card__value">' + escapeHtml(brand.products) + '</span></div>' +
        note +
      '</div>';
  }

  function runVerification(query) {
    var q = (query || '').trim();
    if (!q) return;
    var inn = q.replace(/\D/g, '').slice(0, 12);
    if (!inn && q.length < 3) {
      verifyResult.innerHTML = '<div class="proto-placeholder"><div class="proto-placeholder__icon">!</div><p>Введите ИНН (10–12 цифр) или название бренда</p></div>';
      return;
    }
    verifyResult.innerHTML = '<div class="proto-placeholder"><div class="proto-placeholder__icon">⌕</div><p>Проверка по 4 реестрам…</p></div>';
    verifySteps.removeAttribute('hidden');
    var steps = verifySteps.querySelectorAll('.proto-step');
    Array.prototype.forEach.call(steps, function (s) {
      s.classList.remove('proto-step--active', 'proto-step--done');
      s.querySelector('.proto-step__status').textContent = 'Ожидание';
    });

    var i = 0;
    function tick() {
      if (i > 0) {
        var prev = steps[i - 1];
        prev.classList.remove('proto-step--active');
        prev.classList.add('proto-step--done');
        prev.querySelector('.proto-step__status').textContent = '✓ Готово';
      }
      if (i >= steps.length) {
        renderBrand(inn || q);
        return;
      }
      var cur = steps[i];
      cur.classList.add('proto-step--active');
      cur.querySelector('.proto-step__status').textContent = 'Проверка…';
      i++;
      setTimeout(tick, 350 + Math.random() * 250);
    }
    setTimeout(tick, 200);
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
        verifyInput.value = inn;
        runVerification(inn);
      });
    });

    verifyBtn.addEventListener('click', function () {
      runVerification(verifyInput.value);
    });

    verifyInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        verifyBtn.click();
      }
    });
  }

  /* ── TAB 2: Баллы лояльности (цифровой рубль) ──────────── */
  var balance = 0;
  var totalEarned = 0;
  var totalSpent = 0;
  var totalSubsidy = 0;
  var balanceEl, statEarnedEl, statSpentEl, statSubsidyEl, feedEl, pointsEarnBtn, pointsSpendBtn;

  function bump(el) {
    el.classList.add('balance-value--bump');
    setTimeout(function () { el.classList.remove('balance-value--bump'); }, 300);
  }

  function addFeedItem(opts) {
    var empty = feedEl ? feedEl.querySelector('.proto-feed__item--empty') : null;
    if (empty) empty.remove();
    var item = document.createElement('div');
    item.className = 'proto-feed__item' + (opts.className ? ' ' + opts.className : '');
    var icon = opts.spent ? '−' : (opts.subsidy ? '★' : '+');
    item.innerHTML =
      '<div class="proto-feed__icon">' + icon + '</div>' +
      '<div class="proto-feed__content">' +
        '<div class="proto-feed__title">' + escapeHtml(opts.title) + '</div>' +
        '<div class="proto-feed__meta">' + escapeHtml(opts.brand) + ' · ' + fmtTime() + '</div>' +
      '</div>' +
      '<div class="proto-feed__amount">' + (opts.spent ? '−' : '+') + ' ' + opts.amount + ' ₽₿</div>';
    if (feedEl) feedEl.insertBefore(item, feedEl.firstChild);
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
      balance += 50;
      totalEarned += 50;
      // Госсубсидия для Золото-грейда (Сбер)
      totalSubsidy += 15;
      updateStats();
      addFeedItem({ title: 'Кешбэк за подписку СберПрайм', brand: 'Сбер (GOLD)' });
      addFeedItem({ title: 'Госсубсидия (Золото-грейд)', brand: 'Государство', subsidy: true, className: 'proto-feed__item--subsidy' });
    });

    pointsSpendBtn.addEventListener('click', function () {
      if (balance < 100) {
        window.alert('Недостаточно баллов. Купите товар, чтобы заработать.');
        return;
      }
      balance -= 100;
      totalSpent += 100;
      updateStats();
      addFeedItem({ title: 'Скидка у партнёра: билет в кино', brand: 'Партнёрская сеть', spent: true, className: 'proto-feed__item--spent' });
    });
  }

  /* ── TAB 3: Каталог (10 брендов) ─────────────────────────── */
  function initCatalog() {
    var grid = $('catalogGrid');
    if (!grid) return;
    var html = Object.keys(BRANDS).map(function (inn) {
      var b = BRANDS[inn];
      var badge = GRADE_BADGE[b.grade];
      return '<div class="catalog-card">' +
        '<div class="catalog-card__name">' + escapeHtml(b.name) + '</div>' +
        '<div class="catalog-card__row"><span>ИНН</span><span>' + escapeHtml(inn) + '</span></div>' +
        '<div class="catalog-card__row"><span>Регион</span><span>' + escapeHtml(b.region) + '</span></div>' +
        '<div class="catalog-card__row"><span>Товаров</span><span>' + escapeHtml(String(b.products)) + '</span></div>' +
        '<div class="catalog-card__row"><span>Грейд</span><span class="' + badge + '" style="padding:2px 8px;">' + escapeHtml(GRADE_LABEL[b.grade]) + '</span></div>' +
      '</div>';
    }).join('');
    grid.innerHTML = html;
  }

  /* ── Старт ─────────────────────────────────────────────── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    initTabs();
    initVerify();
    initPoints();
    initCatalog();
  }
})();