---
layout: default
title: Главная
description: «Опора» — национальная цифровая экосистема роста отечественных брендов. 17 модулей, AI-кооперация, блокчейн-верификация, кешбэк до 7%.
---

<!-- ── HERO ── -->
<section class="hero">
  <div class="container">
    <div class="hero-content">
      <h1>Национальная платформа доверия, роста и кооперации российских брендов</h1>
      <p class="hero-subtitle">
        «Опора» — это 17 модулей на едином технологическом ядре: каталог верифицированных брендов,
        AI-кооперация, биржа креаторов, аналитика, право, финансы и экспорт.
        Не маркетплейс — инфраструктура, связывающая государство, бизнес и граждан в единый контур доверия и выгоды.
      </p>
      <div class="hero-actions">
        <a href="{{ '/investors/' | relative_url }}" class="btn btn-teal btn-lg">Инвесторам</a>
        <a href="{{ '/gr-strategy/' | relative_url }}" class="btn btn-outline-light btn-lg">Государству</a>
        <a href="{{ '/needs/' | relative_url }}" class="btn btn-outline-light btn-lg">Партнёрам</a>
      </div>
    </div>

    <div class="hero-stats">
      <div class="hero-stat">
        <div class="stat-value">6,8 млн</div>
        <div class="stat-label">субъектов МСП в РФ</div>
      </div>
      <div class="hero-stat">
        <div class="stat-value">17</div>
        <div class="stat-label">модулей платформы</div>
      </div>
      <div class="hero-stat">
        <div class="stat-value">4,5 млрд ₽</div>
        <div class="stat-label">NPV (базовый сценарий)</div>
      </div>
      <div class="hero-stat">
        <div class="stat-value">ТОП-100</div>
        <div class="stat-label">СИНВ-2024</div>
      </div>
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
        <h3>Решение</h3>
        <ul class="solution-list">
          <li>
            <strong>Каталог с грейдированием</strong> «Золото/Серебро/Бронза»
            и кешбэком до 7% — прозрачный критерий «отечественности»,
            подтверждённый ГИСП, «Честным знаком» и ФНС.
          </li>
          <li>
            <strong>AI-кооперация</strong> — автоматический подбор партнёров
            по 50+ параметрам, артельные кластеры под крупные заказы,
            смарт-контракты на блокчейне Hyperledger Fabric.
          </li>
          <li>
            <strong>17 модулей на едином ядре</strong> — от биржи креаторов
            до экспортного «единого окна». Платформа интегрируется
            с существующими госсервисами через открытое API. Архитектурный ориентир — ONDC (Индия).
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- ── МОДУЛИ ── -->
<section class="section" id="modules">
  <div class="container">
    <h2 class="section-title">17 модулей платформы</h2>
    <p class="section-subtitle">
      11 бизнес-модулей + 6 инфраструктурных сервисов.
      Каждый модуль закрывает конкретную потребность бизнеса и гражданина.
    </p>

    <div class="modules-grid">
      {% for module in site.data.modules limit:6 %}
      <div class="module-card {{ module.color_class }}">
        <div class="module-icon">
          {% include icons/{{ module.icon }}.svg %}
        </div>
        <h3>{{ module.name }}</h3>
        <p>{{ module.description | truncate: 140 }}</p>
      </div>
      {% endfor %}
    </div>

    <div style="text-align: center; margin-top: 2rem;">
      <a href="{{ '/modules/' | relative_url }}" class="btn btn-outline">
        Все 17 модулей →
      </a>
    </div>
  </div>
</section>

<!-- ── ИНТЕЛЛЕКТУАЛЬНЫЙ ВКЛАД ── -->
<section class="section section-gray" id="ip">
  <div class="container">
    <h2 class="section-title">Интеллектуальный вклад основателя</h2>
    <p class="section-subtitle">
      3 года проработки. 400+ файлов документации и прототипов кода. Оценка методом замещения — 500+ млн руб.
    </p>

    <div class="ip-block">
      <div class="ip-block__header">
        <div class="ip-block__icon">💎</div>
        <div>
          <div class="ip-block__number">500+ млн руб.</div>
          <div class="ip-block__subtitle">оценка методом замещения</div>
        </div>
      </div>
      <div class="ip-block__body">
        400+ файлов технической документации и прототипов кода.
        Архитектура 17 модулей, API-контракты (OpenAPI 3.0), C4-диаграммы,
        финансовая модель (8 сценариев), юридический пакет (поправки в НК РФ, ЭПР, Устав АО).
        Проект прошёл 5 независимых экспертиз, ТОП-100 СИНВ-2024.
        Весь IP передаётся в АО «НП Опора» безвозмездно как вклад основателя.
      </div>
      <div class="ip-block__grid">
        <div class="ip-block__stat">
          <div class="ip-block__stat-value">400+</div>
          <div class="ip-block__stat-label">файлов документации</div>
        </div>
        <div class="ip-block__stat">
          <div class="ip-block__stat-value">205</div>
          <div class="ip-block__stat-label">Java-файлов прототипов</div>
        </div>
        <div class="ip-block__stat">
          <div class="ip-block__stat-value">8</div>
          <div class="ip-block__stat-label">сценариев финмодели</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ── ФИНАНСЫ ── -->
<section class="section" id="financials">
  <div class="container">
    <h2 class="section-title">Финансовая модель</h2>
    <p class="section-subtitle">
      Мульти-source финансирование 10–12,5 млрд руб. на 5 лет.
      Бюджетный мультипликатор 1,7×. 8 сценариев стресс-тестирования.
    </p>

    <div class="financials-grid">
      <div class="financial-card">
        <div class="fin-value">4,5 млрд ₽</div>
        <div class="fin-label">NPV (базовый сценарий)</div>
      </div>
      <div class="financial-card">
        <div class="fin-value">32%</div>
        <div class="fin-label">IRR</div>
      </div>
      <div class="financial-card">
        <div class="fin-value">4,2 года</div>
        <div class="fin-label">Срок окупаемости</div>
      </div>
      <div class="financial-card">
        <div class="fin-value">1,7×</div>
        <div class="fin-label">Бюджетный мультипликатор</div>
      </div>
    </div>

    <div style="text-align: center; margin-top: 1rem;">
      <a href="{{ '/investors/' | relative_url }}" class="btn btn-outline">
        Подробнее для инвесторов →
      </a>
    </div>
  </div>
</section>

<!-- ── ROADMAP ── -->
<section class="section section-gray" id="roadmap">
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

<!-- ── КОМАНДА ── -->
<section class="section" id="team">
  <div class="container">
    <h2 class="section-title">Команда</h2>
    <p class="section-subtitle">
      Волна 1 — Ядро. 9–12 ключевых специалистов.
      Старт найма: июль 2026.
    </p>

    <div class="team-grid">
      {% for person in site.data.team %}
      <div class="team-card">
        <div class="team-avatar">{{ person.initials }}</div>
        <h3>{{ person.name }}</h3>
        <div class="team-role">{{ person.role }}</div>
        <p>{{ person.description }}</p>
      </div>
      {% endfor %}
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
          Финмодель v4.0, 8 сценариев, NPV 4,5 млрд руб., IRR 32%.
          Интеллектуальный вклад 500+ млн руб. Гарантии: Набсовет, buyback, SPO.
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
        <h3 class="cta-card__title">Партнёрам</h3>
        <p class="cta-card__desc">
          Вакансии: GR-директор, CFO, CISO, AI Lead.
          Финансирование по траншам. Доступ к API. Партнёрства.
        </p>
        <a href="{{ '/needs/' | relative_url }}" class="btn btn-teal">Потребности →</a>
      </div>
    </div>
  </div>
</section>
