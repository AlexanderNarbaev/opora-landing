---
layout: default
title: Главная
description: «Опора» — национальная цифровая экосистема верификации и B2B-кооперации российских брендов. Верификация через ГИСП/Честный знак/ФНС, AI-подбор поставщиков, кешбэк до 7%.
---

<!-- ── HERO ── -->
<section class="hero">
  <div class="container">
    <div class="hero-content">
      <h1>Национальная платформа верификации и B2B-кооперации российских брендов</h1>
      <p class="hero-subtitle">
        «Опора» — это <strong>3 ядра ценности</strong>: верификация отечественности,
        AI-кооперация поставщиков и программа лояльности.
        Не маркетплейс — инфраструктура доверия для 6,8 млн МСП и 146 млн граждан.
      </p>
      <div class="hero-highlight">
        <div class="hero-highlight-item">
          <span class="hero-highlight-icon">🔍</span>
          <span><strong>Поиск поставщика с 6 месяцев до 2 недель</strong></span>
        </div>
        <div class="hero-highlight-item">
          <span class="hero-highlight-icon">📊</span>
          <span><strong>57% предприятий не могут найти поставщиков</strong> — мы решаем эту проблему</span>
        </div>
      </div>
      <div class="hero-actions">
        <a href="{{ '/investors/' | relative_url }}" class="btn btn-teal btn-lg">Инвесторам</a>
        <a href="{{ '/gr-strategy/' | relative_url }}" class="btn btn-outline-light btn-lg">Государству</a>
        <a href="{{ '/needs/' | relative_url }}" class="btn btn-outline-light btn-lg">Бизнесу</a>
      </div>
    </div>

    <div class="hero-stats">
      <div class="hero-stat">
        <div class="stat-value">146 млн</div>
        <div class="stat-label">потребителей (TAM)</div>
      </div>
      <div class="hero-stat">
        <div class="stat-value">6,8 млн</div>
        <div class="stat-label">субъектов МСП (SAM)</div>
      </div>
      <div class="hero-stat">
        <div class="stat-value">500K</div>
        <div class="stat-label">брендов в первый год (SOM)</div>
      </div>
      <div class="hero-stat">
        <div class="stat-value">7,2×</div>
        <div class="stat-label">LTV/CAC</div>
      </div>
      <div class="hero-stat">
        <div class="stat-value">6 мес</div>
        <div class="stat-label">Time-to-MVP</div>
      </div>
    </div>

    <!-- Статус разработки (14.07.2026) -->
    <div class="hero-dev-status">
      <div class="dev-stat"><strong>24/33 P0</strong> выполнено</div>
      <div class="dev-stat"><strong>67%</strong> готовность (↑21 п.п.)</div>
      <div class="dev-stat"><strong>94</strong> Vitest-теста</div>
      <div class="dev-stat"><strong>11</strong> Storybook-компонентов</div>
      <div class="dev-stat">CSP + audit ✅</div>
      <div class="dev-stat"><a href="https://github.com/AlexanderNarbaev/opora" style="color:#2EC4B6">Репозиторий →</a></div>
    </div>
  </div>
</section>

<!-- ── ПРОБЛЕМА / РЕШЕНИЕ ── -->
<section class="section section-gray" id="problem">
  <div class="container">
    <h2 class="section-title">Почему «Опора» нужна сейчас</h2>
    <p class="section-subtitle">
      Три разрыва, которые тормозят рост российского бизнеса и снижают доверие граждан к отечественным товарам.
    </p>

    <div class="problem-grid">
      <div>
        <h3>Проблема</h3>
        <ul class="problem-list">
          <li>
            <strong>Невидимость малых брендов.</strong> 80% МСП-производителей
            не имеют бюджета на маркетинг и доступа к каналам сбыта.
            Доля российских товаров в корзине — не выше 35%.
          </li>
          <li>
            <strong>Кризис доверия к «отечественности».</strong>
            Нет единой системы верификации. Граждане хотят поддерживать «своё»,
            но не знают, кому верить. 79% отказываются от программ лояльности из-за сложных условий.
          </li>
          <li>
            <strong>Разобщённость бизнеса.</strong> 57% предприятий
            не могут найти альтернативных поставщиков внутри страны.
            Поиск партнёра занимает 6–8 месяцев. До 30% мощностей простаивает.
          </li>
        </ul>
      </div>

      <div>
        <h3>Решение: 3 ядра ценности</h3>
        <ul class="solution-list">
          <li>
            <strong>1. Верификация</strong> — проверка через ГИСП, «Честный знак» и ФНС.
            Грейдирование «Золото/Серебро/Бронза». Прозрачный критерий «отечественности».
          </li>
          <li>
            <strong>2. B2B Кооперация</strong> — AI-подбор партнёров по 50+ параметрам,
            артельные кластеры под крупные заказы,
            смарт-контракты на блокчейне.
          </li>
          <li>
            <strong>3. Лояльность</strong> — кешбэк до 7% баллами,
            социальный трек (образование, медицина, спорт),
            интеграция с госсервисами через открытое API.
          </li>
        </ul>
        <div class="roadmap-note">
          <strong>De-risked execution:</strong> Time-to-MVP 6 месяцев. Архитектурный и GR-ландшафт готов.
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ── СЕГМЕНТНЫЙ ПЕРЕКЛЮЧАТЕЛЬ ── -->
<section class="section" id="segments">
  <div class="container">
    <h2 class="section-title">«Опора» для каждого</h2>
    <p class="section-subtitle">
      Одна платформа — три перспективы: инвестор, государство, бизнес.
    </p>

    <div class="segment-tabs">
      <button class="segment-tab active" data-segment="investors">Инвесторам</button>
      <button class="segment-tab" data-segment="government">Государству</button>
      <button class="segment-tab" data-segment="business">Бизнесу</button>
    </div>

    <!-- ── ИНВЕСТОРАМ ── -->
    <div class="segment-panel active" id="segment-investors">
      <div class="segment-hero">
        <h3>Национальная B2B/B2C инфраструктура с LTV/CAC = 7.2×</h3>
        <p>Де-рискинг через подготовленную архитектуру и GR-ландшафт. Time-to-MVP 6 месяцев.</p>
      </div>

      <div class="financials-grid">
        <div class="financial-card">
          <div class="fin-value">4,5 млрд ₽</div>
          <div class="fin-label">NPV (базовый)</div>
        </div>
        <div class="financial-card">
          <div class="fin-value">32%</div>
          <div class="fin-label">IRR</div>
        </div>
        <div class="financial-card">
          <div class="fin-value">7,2×</div>
          <div class="fin-label">LTV/CAC</div>
        </div>
        <div class="financial-card">
          <div class="fin-value">6 мес</div>
          <div class="fin-label">Time-to-MVP</div>
        </div>
      </div>

      <div class="segment-block">
        <h4>Рынок</h4>
        <div class="grid-3">
          <div class="card">
            <h3>TAM</h3>
            <p class="text-secondary"><strong>146 млн</strong> граждан — потенциальные потребители верифицированных товаров</p>
          </div>
          <div class="card">
            <h3>SAM</h3>
            <p class="text-secondary"><strong>6,8 млн</strong> субъектов МСП — производители и поставщики</p>
          </div>
          <div class="card">
            <h3>SOM</h3>
            <p class="text-secondary"><strong>500K</strong> брендов в первый год — через каналы партнёрств и господдержку</p>
          </div>
        </div>
      </div>

      <div class="segment-block">
        <h4>Unit-экономика</h4>
        <div class="grid-3">
          <div class="card">
            <h3>Комиссия</h3>
            <p class="text-secondary"><strong>0,8%</strong> с транзакции — ниже маркетплейсов, выше по объёму</p>
          </div>
          <div class="card">
            <h3>ARPU</h3>
            <p class="text-secondary"><strong>72 руб./мес</strong> на активного пользователя — кешбэк + B2B-подписка</p>
          </div>
          <div class="card">
            <h3>Безубыточность</h3>
            <p class="text-secondary"><strong>Год 4</strong> — консервативная оценка при базовом сценарии</p>
          </div>
        </div>
      </div>

      <div class="segment-block">
        <h4>Три сценария стресс-тестирования</h4>
        <div class="scenarios-table-wrap">
          <table class="scenarios-table">
            <thead>
              <tr>
                <th>Параметр</th>
                <th>Пессимистичный</th>
                <th>Базовый</th>
                <th>Оптимистичный</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>NPV</td>
                <td>0,5 млрд ₽</td>
                <td>4,5 млрд ₽</td>
                <td>12,8 млрд ₽</td>
              </tr>
              <tr>
                <td>IRR</td>
                <td>10%</td>
                <td>32%</td>
                <td>52%</td>
              </tr>
              <tr>
                <td>Срок окупаемости</td>
                <td>7,5 лет</td>
                <td>4,2 года</td>
                <td>2,8 года</td>
              </tr>
              <tr>
                <td>Пользователей к 2031</td>
                <td>1,2 млн</td>
                <td>4,38 млн</td>
                <td>12 млн</td>
              </tr>
              <tr>
                <td>Брендов</td>
                <td>50 000</td>
                <td>200 000</td>
                <td>500 000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="segment-block">
        <h4>Команда</h4>
        <div class="team-status">
          <div class="team-status-item">
            <div class="team-status-icon">✅</div>
            <div>
              <strong>Архитектура готова</strong>
              <p>C4-диаграммы, OpenAPI-спецификации, финансовая модель (8 сценариев)</p>
            </div>
          </div>
          <div class="team-status-item">
            <div class="team-status-icon">✅</div>
            <div>
              <strong>GR-стратегия готова</strong>
              <p>Поправки в НК РФ, ЭПР, Устав АО, бюджетный мультипликатор</p>
            </div>
          </div>
          <div class="team-status-item">
            <div class="team-status-icon">🔍</div>
            <div>
              <strong>Ищем операционного партнёра (CEO/GR)</strong>
              <p>Опционы 5% УК, вестинг 2+3 года</p>
            </div>
          </div>
        </div>
      </div>

      <div style="text-align: center; margin-top: 2rem;">
        <a href="{{ '/docs/investment-summary.pdf' | relative_url }}" class="btn btn-teal btn-lg">
          Скачать Investment Summary →
        </a>
      </div>
    </div>

    <!-- ── ГОСУДАРСТВУ ── -->
    <div class="segment-panel" id="segment-government">
      <div class="segment-hero">
        <h3>Национальная цифровая платформа для кооперации МСП</h3>
        <p>Инструмент государственной политики: импортозамещение, обеление самозанятых, рост налоговых поступлений.</p>
      </div>

      <div class="financials-grid">
        <div class="financial-card">
          <div class="fin-value">1,7×</div>
          <div class="fin-label">Бюджетный мультипликатор</div>
        </div>
        <div class="financial-card">
          <div class="fin-value">1:3 – 1:5</div>
          <div class="fin-label">ROI для государства</div>
        </div>
        <div class="financial-card">
          <div class="fin-value">200K</div>
          <div class="fin-label">новых рабочих мест</div>
        </div>
        <div class="financial-card">
          <div class="fin-value">55%</div>
          <div class="fin-label">целевая доля отечественных товаров</div>
        </div>
      </div>

      <div class="segment-block">
        <h4>Ценность для государства</h4>
        <div class="grid-3">
          <div class="card">
            <h3>Импортозамещение</h3>
            <p class="text-secondary">
              Прозрачный мониторинг локализации производств.
              Рост доли российских товаров в потребительской корзине с 35% до 55%.
              Реестр верифицированных отечественных брендов.
            </p>
          </div>
          <div class="card">
            <h3>Обеление самозанятых</h3>
            <p class="text-secondary">
              Интеграция с «Мой налог». Автоматические чеки.
              Вывод из тени для 8+ млн самозанятых без официального дохода.
              Рост налоговых поступлений в бюджет.
            </p>
          </div>
          <div class="card">
            <h3>Налоговые поступления</h3>
            <p class="text-secondary">
              Каждый рубль господдержки генерирует 3–5 рублей роста оборота МСП.
              Легализация теневого сектора. Мультипликативный эффект на региональные бюджеты.
            </p>
          </div>
        </div>
      </div>

      <div class="segment-block">
        <h4>Интеграция с госсистемами</h4>
        <div class="grid-3">
          <div class="card">
            <h3>ЕСИА</h3>
            <p class="text-secondary">Единая авторизация через Госуслуги (OAuth 2.0/OIDC). Никаких дополнительных регистраций.</p>
          </div>
          <div class="card">
            <h3>ГИСП + ФНС</h3>
            <p class="text-secondary">Верификация через государственные реестры. Автоматическая проверка ИНН, статуса МСП, локализации.</p>
          </div>
          <div class="card">
            <h3>ФСТЭК К2</h3>
            <p class="text-secondary">Класс защиты К2 (ФСТЭК №117). ГОСТ-криптография. Обязательный пентест. Сертифицированная инфраструктура.</p>
          </div>
        </div>
      </div>

      <div class="segment-block">
        <h4>Дорожная карта</h4>
        <div class="roadmap">
          <div class="roadmap-item">
            <div class="roadmap-dot"></div>
            <div class="roadmap-content">
              <span class="roadmap-phase">Фаза 0. Предзапуск</span>
              <div class="roadmap-year">Июль 2026 – Июнь 2027 · 2 200 млн руб.</div>
              <p>Поручение Правительства, регистрация АО, поправки в ГД, формирование команды.</p>
              <div style="margin-top: 0.75rem; display: flex; flex-wrap: wrap; gap: 0.5rem;">
                <span class="badge badge-silver">Поручение Правительства</span>
                <span class="badge badge-silver">Регистрация АО</span>
                <span class="badge badge-silver">Поправки в НК РФ</span>
              </div>
            </div>
          </div>
          <div class="roadmap-item">
            <div class="roadmap-dot"></div>
            <div class="roadmap-content">
              <span class="roadmap-phase">Фаза 1. Пилот</span>
              <div class="roadmap-year">Июль 2027 – Июнь 2028 · 1 000 млн руб.</div>
              <p>Москва + Зеленоград. Запуск 3 ядер: верификация, кооперация, лояльность.</p>
              <div style="margin-top: 0.75rem; display: flex; flex-wrap: wrap; gap: 0.5rem;">
                <span class="badge badge-silver">≥100 брендов</span>
                <span class="badge badge-silver">≥50K пользователей</span>
                <span class="badge badge-silver">SLA ≥99.5%</span>
              </div>
            </div>
          </div>
          <div class="roadmap-item">
            <div class="roadmap-dot"></div>
            <div class="roadmap-content">
              <span class="roadmap-phase">Фаза 2. Масштабирование</span>
              <div class="roadmap-year">Июль 2028 – Дек 2030 · 2 200 млн руб.</div>
              <p>Федеральный масштаб. Запуск дополнительных модулей. Выход на самоокупаемость.</p>
              <div style="margin-top: 0.75rem; display: flex; flex-wrap: wrap; gap: 0.5rem;">
                <span class="badge badge-silver">≥200K брендов</span>
                <span class="badge badge-silver">≥8M пользователей</span>
                <span class="badge badge-silver">Капитализация 50 млрд</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style="text-align: center; margin-top: 2rem;">
        <a href="{{ '/docs/gr-strategy.pdf' | relative_url }}" class="btn btn-teal btn-lg">
          Скачать GR-стратегию →
        </a>
      </div>
    </div>

    <!-- ── БИЗНЕСУ ── -->
    <div class="segment-panel" id="segment-business">
      <div class="segment-hero">
        <h3>Найдите поставщика за 2 недели вместо 6 месяцев</h3>
        <p>Верификация бренда, AI-подбор партнёров, кешбэк до 7% — единая платформа для роста вашего бизнеса.</p>
      </div>

      <div class="segment-block">
        <h4>Ключевая ценность</h4>
        <div class="grid-3">
          <div class="card">
            <h3>Верификация</h3>
            <p class="text-secondary">
              Знак качества «Золото/Серебро/Бронза».
              Проверка через ГИСП, «Честный знак» и ФНС.
              Доступ к аудитории 146 млн граждан.
            </p>
          </div>
          <div class="card">
            <h3>B2B-кооперация</h3>
            <p class="text-secondary">
              AI-подбор партнёров по 50+ параметрам.
              Артельные кластеры для крупных заказов.
              Смарт-контракты. Поиск за 2 недели.
            </p>
          </div>
          <div class="card">
            <h3>Лояльность</h3>
            <p class="text-secondary">
              Кешбэк до 7% баллами.
              Социальный трек: образование, медицина, спорт.
              Программа без сложных условий.
            </p>
          </div>
        </div>
      </div>

      <div class="segment-block">
        <h4>Как это работает</h4>
        <div class="grid-3">
          <div class="card" style="text-align: center;">
            <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">①</div>
            <h3>Регистрация</h3>
            <p class="text-secondary">
              Вход через Госуслуги (ЕСИА). Профиль уже подтверждён государством.
              Загрузка документов о локализации.
            </p>
          </div>
          <div class="card" style="text-align: center;">
            <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">②</div>
            <h3>Верификация</h3>
            <p class="text-secondary">
              Автоматическая проверка через ГИСП, «Честный знак», ФНС.
              Присвоение грейда. Публикация в каталоге.
            </p>
          </div>
          <div class="card" style="text-align: center;">
            <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">③</div>
            <h3>Рост</h3>
            <p class="text-secondary">
              AI-подбор поставщиков и партнёров. Доступ к аудитории.
              Кешбэк и программа лояльности. Экспортные каналы.
            </p>
          </div>
        </div>
      </div>

      <div class="segment-block">
        <h4>Для кого платформа</h4>
        <div class="grid-3">
          <div class="card">
            <h3>Производитель</h3>
            <p class="text-secondary">
              «Не могу найти каналы сбыта для своей продукции.
              Крупные маркетплейсы берут 15–35% комиссии.
              Нужен доступ к аудитории, которая ценит отечественное.»
            </p>
            <div class="roadmap-note">
              <strong>Решение:</strong> верификация + каталог с аудиторией 146 млн. Комиссия 0,8%.
            </div>
          </div>
          <div class="card">
            <h3>Самозанятый</h3>
            <p class="text-secondary">
              «Работаю на себя, но не могу подтвердить квалификацию.
              Нет доступа к крупным заказам. Хочу легализоваться, но боюсь сложностей.»
            </p>
            <div class="roadmap-note">
              <strong>Решение:</strong> интеграция с «Мой налог», автоматические чеки, песочница с 0% комиссией.
            </div>
          </div>
          <div class="card">
            <h3>Ремесленник</h3>
            <p class="text-secondary">
              «Произвожу уникальные товары, но не знаю, как выйти на федеральный рынок.
              Нужны партнёры для масштабирования производства.»
            </p>
            <div class="roadmap-note">
              <strong>Решение:</strong> AI-подбор партнёров, артельные кластеры, доступ к B2B-закупкам.
            </div>
          </div>
        </div>
      </div>

      <div style="text-align: center; margin-top: 2rem;">
        <a href="{{ '/needs/' | relative_url }}" class="btn btn-teal btn-lg">
          Присоединиться к платформе →
        </a>
      </div>
    </div>
  </div>
</section>

<!-- ── ВАЛИДАЦИЯ СИНВ-2026 ── -->
<section class="section section-gray" id="sinv-validation">
  <div class="container">
    <h2 class="section-title">Валидация через СИНВ-2026</h2>
    <p class="section-subtitle">
      Проект «Опора» прошёл масштабную валидацию на основе 17 845 идей
      конкурса «Сто инновационных лидеров России».
    </p>

    <div class="financials-grid">
      <div class="financial-card">
        <div class="fin-value">17 845</div>
        <div class="fin-label">идей СИНВ-2026 проанализировано</div>
      </div>
      <div class="financial-card">
        <div class="fin-value">1 374</div>
        <div class="fin-label">проанализировано детально</div>
      </div>
      <div class="financial-card">
        <div class="fin-value">319</div>
        <div class="fin-label">релевантных (23,2%)</div>
      </div>
      <div class="financial-card">
        <div class="fin-value">127</div>
        <div class="fin-label">рекомендовано к внедрению</div>
      </div>
    </div>

    <div style="margin-top: 2.5rem;">
      <h3 style="font-size: 1.25rem; margin-bottom: 1rem; color: #233370;">Ключевой вывод</h3>
      <div class="ip-block">
        <div class="ip-block__header">
          <div class="ip-block__icon">🎯</div>
          <div>
            <div class="ip-block__number">Ни одна из 17 845 идей</div>
            <div class="ip-block__subtitle">не предлагает интегрированную экосистему верификации + кооперации</div>
          </div>
        </div>
        <div class="ip-block__body">
          Анализ показал, что все существующие решения носят точечный характер —
          отдельные маркетплейсы, сервисы лояльности или инструменты кооперации.
          «Опора» — единственная платформа, объединяющая верификацию, B2B-кооперацию
          и лояльность на едином технологическом ядре.
        </div>
      </div>
    </div>

    <div style="margin-top: 2rem;">
      <h3 style="font-size: 1.15rem; margin-bottom: 1rem; color: #233370;">Топ-валидирующие идеи СИНВ-2026</h3>
      <div class="scenarios-table-wrap">
        <table class="scenarios-table">
          <thead>
            <tr><th>№ идеи</th><th>Название</th><th>Пересечение с «Опорой»</th></tr>
          </thead>
          <tbody>
            <tr><td>#280002</td><td>Цифровая платформа поддержки МСП</td><td>Каталог, верификация, кооперация</td></tr>
            <tr><td>#280497</td><td>AI-система подбора бизнес-партнёров</td><td>AI-кооперация, артельные кластеры</td></tr>
            <tr><td>#18993</td><td>Система лояльности для отечественных товаров</td><td>Кешбэк, грейдирование, социальный трек</td></tr>
            <tr><td>#228554</td><td>Экспортный маркетплейс для МСП</td><td>Единое окно ЕАЭС/БРИКС</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>

<!-- ── ИНТЕЛЛЕКТУАЛЬНЫЙ ВКЛАД ── -->
<section class="section" id="ip">
  <div class="container">
    <h2 class="section-title">De-risked execution</h2>
    <p class="section-subtitle">
      Time-to-MVP 6 месяцев. Архитектурный и GR-ландшафт готов.
      Точки интеграции с госсистемами найдены.
    </p>

    <div class="ip-block">
      <div class="ip-block__header">
        <div class="ip-block__icon">🚀</div>
        <div>
          <div class="ip-block__number">Time-to-MVP: 6 месяцев</div>
          <div class="ip-block__subtitle">де-рискинг через подготовленную архитектуру</div>
        </div>
      </div>
      <div class="ip-block__body">
        3 года проработки: архитектура модулей, OpenAPI-спецификации,
        C4-диаграммы, финансовая модель (8 сценариев), юридический пакет (поправки в НК РФ, ЭПР, Устав АО).
        Проект прошёл 5 независимых экспертиз.
        GR-ландшафт готов: точки интеграции с ЕСИА, ГИСП, «Честным знаком», ФНС, ОФД определены.
        Весь IP передаётся в АО «НП Опора» безвозмездно как вклад основателя.
      </div>
      <div class="ip-block__grid">
        <div class="ip-block__stat">
          <div class="ip-block__stat-value">8</div>
          <div class="ip-block__stat-label">сценариев финмодели</div>
        </div>
        <div class="ip-block__stat">
          <div class="ip-block__stat-value">5</div>
          <div class="ip-block__stat-label">независимых экспертиз</div>
        </div>
        <div class="ip-block__stat">
          <div class="ip-block__stat-value">6</div>
          <div class="ip-block__stat-label">интеграций с госсистемами</div>
        </div>
        <div class="ip-block__stat">
          <div class="ip-block__stat-value">6 мес</div>
          <div class="ip-block__stat-label">Time-to-MVP</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ── ФИНАНСЫ ── -->
<section class="section section-gray" id="financials">
  <div class="container">
    <h2 class="section-title">Финансовая модель</h2>
    <p class="section-subtitle">
      Unit-экономика: LTV/CAC = 7,2×. Безубыточность к году 4.
      3 сценария стресс-тестирования.
    </p>

    <div class="financials-grid">
      <div class="financial-card">
        <div class="fin-value">7,2×</div>
        <div class="fin-label">LTV/CAC</div>
      </div>
      <div class="financial-card">
        <div class="fin-value">4,5 млрд ₽</div>
        <div class="fin-label">NPV (базовый сценарий)</div>
      </div>
      <div class="financial-card">
        <div class="fin-value">32%</div>
        <div class="fin-label">IRR</div>
      </div>
      <div class="financial-card">
        <div class="fin-value">Год 4</div>
        <div class="fin-label">Безубыточность</div>
      </div>
    </div>

    <div style="margin-top: 2.5rem;">
      <h3 style="font-size: 1.25rem; margin-bottom: 1rem; color: #233370;">Три сценария развития</h3>
      <div class="scenarios-table-wrap">
        <table class="scenarios-table">
          <thead>
            <tr>
              <th>Параметр</th>
              <th>Пессимистичный</th>
              <th>Базовый</th>
              <th>Оптимистичный</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>NPV</td>
              <td>0,5 млрд ₽</td>
              <td>4,5 млрд ₽</td>
              <td>12,8 млрд ₽</td>
            </tr>
            <tr>
              <td>IRR</td>
              <td>10%</td>
              <td>32%</td>
              <td>52%</td>
            </tr>
            <tr>
              <td>Срок окупаемости</td>
              <td>7,5 лет</td>
              <td>4,2 года</td>
              <td>2,8 года</td>
            </tr>
            <tr>
              <td>Пользователей к 2031</td>
              <td>1,2 млн</td>
              <td>4,38 млн</td>
              <td>12 млн</td>
            </tr>
            <tr>
              <td>Брендов</td>
              <td>50 000</td>
              <td>200 000</td>
              <td>500 000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div style="text-align: center; margin-top: 1.5rem;">
      <a href="{{ '/investors/' | relative_url }}" class="btn btn-outline">
        Подробнее для инвесторов →
      </a>
    </div>
  </div>
</section>

<!-- ── ROADMAP ── -->
<section class="section" id="roadmap">
  <div class="container">
    <h2 class="section-title">Дорожная карта</h2>
    <p class="section-subtitle">
      От пилота в Москве до международной экспансии — четыре фазы.
    </p>

    <div class="roadmap">
      {% for item in site.data.roadmap %}
      <div class="roadmap-item">
        <div class="roadmap-dot"></div>
        <div class="roadmap-content">
          <span class="roadmap-phase">{{ item.phase }}</span>
          <div class="roadmap-year">{{ item.year }} · {{ item.budget }}</div>
          <p>{{ item.description }}</p>
          {% if item.kpis %}
          <div style="margin-top: 0.75rem; display: flex; flex-wrap: wrap; gap: 0.5rem;">
            {% for kpi in item.kpis %}
            <span class="badge badge-silver">{{ kpi }}</span>
            {% endfor %}
          </div>
          {% endif %}
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</section>

<!-- ── FAQ ── -->
<section class="section section-gray" id="faq">
  <div class="container">
    <h2 class="section-title">Часто задаваемые вопросы</h2>
    <p class="section-subtitle">
      Ответы на ключевые вопросы инвесторов, партнёров и государства.
    </p>

    <div class="faq-list">
      <div class="faq-item">
        <div class="faq-question">
          <h3>Почему не Ozon/Wildberries?</h3>
          <span class="faq-toggle">+</span>
        </div>
        <div class="faq-answer">
          <p>
            Мы не конкурент маркетплейсам — мы <strong>инфраструктура</strong>.
            «Опора» — это национальный слой доверия: верификация отечественности,
            B2B-кооперация поставщиков и программа лояльности.
            Маркетплейсы могут быть каналами сбыта для брендов из «Опоры».
          </p>
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-question">
          <h3>Какая unit-экономика?</h3>
          <span class="faq-toggle">+</span>
        </div>
        <div class="faq-answer">
          <p>
            <strong>LTV/CAC = 7,2×</strong>. Безубыточность к году 4.
            Комиссия 0,8% с транзакции. ARPU 72 руб./мес.
            NPV 4,5 млрд руб. (базовый сценарий). IRR 32%.
            Бюджетный мультипликатор 1,7×.
          </p>
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-question">
          <h3>Где команда?</h3>
          <span class="faq-toggle">+</span>
        </div>
        <div class="faq-answer">
          <p>
            <strong>Ищем операционного партнёра (CEO/GR)</strong>.
            Архитектура и GR-стратегия готовы. Идёт формирование ядра команды.
            Опционы 5% УК, вестинг 2+3 года. Старт найма: июль 2026.
          </p>
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-question">
          <h3>Какие гарантии для инвесторов?</h3>
          <span class="faq-toggle">+</span>
        </div>
        <div class="faq-answer">
          <p>
            Наблюдательный совет с государственным участием.
            Buyback-опцион после выхода на безубыточность.
            «Золотая акция» для стратегических решений.
            5 независимых экспертиз проекта.
          </p>
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-question">
          <h3>Что государство получает?</h3>
          <span class="faq-toggle">+</span>
        </div>
        <div class="faq-answer">
          <p>
            <strong>Бюджетный мультипликатор 1,7×</strong>. ROI 1:3–1:5.
            200 000 рабочих мест. Обеление 8+ млн самозанятых.
            Прозрачный мониторинг импортозамещения.
            Интеграция с ЕСИА, ГИСП, ФНС, ФСТЭК К2.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ── СКАЧАТЬ ДОКУМЕНТЫ ── -->
<section class="section" id="downloads">
  <div class="container">
    <h2 class="section-title">Ключевые документы</h2>
    <p class="section-subtitle">
      Загрузите материалы для детального изучения проекта «Опора».
    </p>

    <div class="grid-3">
      <div class="card" style="text-align: center;">
        <h3>One-Pager</h3>
        <p class="text-secondary">
          Краткое описание проекта на одной странице. Идеально для первого знакомства.
        </p>
        <a href="{{ '/docs/one-pager.pdf' | relative_url }}" class="btn btn-outline" style="margin-top: 1rem;">
          Скачать PDF →
        </a>
      </div>
      <div class="card" style="text-align: center;">
        <h3>Investment Summary</h3>
        <p class="text-secondary">
          Финансовая модель, сценарии, NPV/IRR, структура инвестиций и гарантии.
        </p>
        <a href="{{ '/docs/investment-summary.pdf' | relative_url }}" class="btn btn-outline" style="margin-top: 1rem;">
          Скачать PDF →
        </a>
      </div>
      <div class="card" style="text-align: center;">
        <h3>GR-стратегия</h3>
        <p class="text-secondary">
          Стратегия взаимодействия с государством, регуляторная рамка, бюджетный мультипликатор.
        </p>
        <a href="{{ '/docs/gr-strategy.pdf' | relative_url }}" class="btn btn-outline" style="margin-top: 1rem;">
          Скачать PDF →
        </a>
      </div>
    </div>
  </div>
</section>

<!-- ── CTA ── -->
<section class="section cta" id="cta">
  <div class="container">
    <h2>Присоединяйтесь к «Опоре»</h2>
    <p class="cta-text">
      Выберите свой трек — и мы покажем, как платформа работает именно для вас.
    </p>

    <div class="cta-grid">
      <div class="cta-card">
        <div class="cta-card__icon">📈</div>
        <h3 class="cta-card__title">Инвесторам</h3>
        <p class="cta-card__desc">
          Unit-экономика LTV/CAC = 7,2×. NPV 4,5 млрд руб. IRR 32%.
          Time-to-MVP 6 месяцев. Гарантии: Набсовет, buyback, SPO.
        </p>
        <a href="{{ '/investors/' | relative_url }}" class="btn btn-teal">Инвесторам →</a>
      </div>

      <div class="cta-card">
        <div class="cta-card__icon">🏛️</div>
        <h3 class="cta-card__title">Государству</h3>
        <p class="cta-card__desc">
          Бюджетный мультипликатор 1,7×. 200 000 рабочих мест.
          Обеление самозанятых. ROI для государства 1:3–1:5.
        </p>
        <a href="{{ '/gr-strategy/' | relative_url }}" class="btn btn-teal">GR-стратегия →</a>
      </div>

      <div class="cta-card">
        <div class="cta-card__icon">🤝</div>
        <h3 class="cta-card__title">Бизнесу</h3>
        <p class="cta-card__desc">
          Найдите поставщика за 2 недели. Верификация бренда.
          AI-подбор партнёров. Кешбэк до 7%.
        </p>
        <a href="{{ '/needs/' | relative_url }}" class="btn btn-teal">Присоединиться →</a>
      </div>
    </div>
  </div>
</section>

<!-- ── SEGMENT SWITCHER SCRIPT ── -->
<script>
document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.segment-tab');
  const panels = document.querySelectorAll('.segment-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const segment = this.dataset.segment;

      // Update active tab
      tabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');

      // Update active panel
      panels.forEach(p => p.classList.remove('active'));
      document.getElementById('segment-' + segment).classList.add('active');
    });
  });

  // FAQ toggle
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', function() {
      item.classList.toggle('active');
      const toggle = this.querySelector('.faq-toggle');
      toggle.textContent = item.classList.contains('active') ? '−' : '+';
    });
  });
});
</script>

<!-- ── ADDITIONAL STYLES ── -->
<style>
  /* Hero highlights */
  .hero-highlight {
    margin: 1.5rem 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  .hero-highlight-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background: rgba(255,255,255,0.1);
    padding: 0.75rem 1rem;
    border-radius: 8px;
  }
  .hero-highlight-icon {
    font-size: 1.25rem;
  }

  /* Segment tabs */
  .segment-tabs {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  .segment-tab {
    padding: 0.75rem 1.5rem;
    border: 2px solid #233370;
    background: transparent;
    color: #233370;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
  }
  .segment-tab.active {
    background: #233370;
    color: white;
  }
  .segment-tab:hover {
    background: #233370;
    color: white;
  }
  .segment-panel {
    display: none;
  }
  .segment-panel.active {
    display: block;
  }

  /* Segment hero */
  .segment-hero {
    text-align: center;
    margin-bottom: 2.5rem;
    padding: 2rem;
    background: linear-gradient(135deg, rgba(35, 51, 112, 0.05), rgba(0, 196, 167, 0.05));
    border-radius: 12px;
  }
  .segment-hero h3 {
    font-size: 1.5rem;
    color: #233370;
    margin-bottom: 0.5rem;
  }
  .segment-hero p {
    color: #555;
    font-size: 1.1rem;
    margin: 0;
  }

  /* Segment block */
  .segment-block {
    margin-top: 2.5rem;
  }
  .segment-block h4 {
    font-size: 1.25rem;
    color: #233370;
    margin-bottom: 1.25rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid rgba(35, 51, 112, 0.1);
  }

  /* Team status */
  .team-status {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2.5rem;
  }
  .team-status-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem;
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  }
  .team-status-icon {
    font-size: 1.5rem;
    flex-shrink: 0;
  }

  /* FAQ */
  .faq-list {
    max-width: 800px;
    margin: 0 auto;
  }
  .faq-item {
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    margin-bottom: 1rem;
    overflow: hidden;
  }
  .faq-question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    cursor: pointer;
    background: white;
    transition: background 0.3s ease;
  }
  .faq-question:hover {
    background: #f5f5f5;
  }
  .faq-question h3 {
    margin: 0;
    font-size: 1.1rem;
    color: #233370;
  }
  .faq-toggle {
    font-size: 1.5rem;
    color: #233370;
    font-weight: bold;
  }
  .faq-answer {
    padding: 0 1.5rem;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease, padding 0.3s ease;
  }
  .faq-item.active .faq-answer {
    max-height: 500px;
    padding: 0 1.5rem 1.5rem;
  }
  .faq-answer p {
    color: #555;
    line-height: 1.6;
  }

  /* Roadmap note */
  .roadmap-note {
    margin-top: 1rem;
    padding: 0.75rem 1rem;
    background: rgba(35, 51, 112, 0.05);
    border-radius: 8px;
    font-size: 0.95rem;
    color: #233370;
  }

  /* Статус разработки */
  .hero-dev-status {
    display: flex;
    flex-wrap: wrap;
    gap: 12px 24px;
    margin-top: 24px;
    padding: 16px 24px;
    background: rgba(46, 196, 182, 0.08);
    border: 1px solid rgba(46, 196, 182, 0.3);
    border-radius: 12px;
  }
  .dev-stat {
    font-size: 0.85rem;
    color: var(--color-text, #1A1A1A);
  }
  .dev-stat strong {
    color: #2EC4B6;
  }
</style>
