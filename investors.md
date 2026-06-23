---
layout: default
title: Инвесторам
description: Финансовая модель платформы «Опора»: NPV 4,5 млрд ₽, IRR 32%, 8 сценариев стресс-тестирования. ROI для государства 1:3–1:5.
---

<section class="section">
  <div class="container">
    <h1 class="section-title">Инвесторам</h1>
    <p class="section-subtitle">
      Финансовая модель, подтверждённая 8 сценариями стресс-тестирования.
      Взвешенный NPV — 3,12 млрд руб.
    </p>

    <!-- Ключевые метрики -->
    <h2>Ключевые инвестиционные показатели</h2>
    <div class="financials-grid" style="margin-bottom: 3rem;">
      <div class="financial-card">
        <div class="fin-value">4,5 млрд ₽</div>
        <div class="fin-label">NPV (базовый сценарий A)</div>
      </div>
      <div class="financial-card">
        <div class="fin-value">3,12 млрд ₽</div>
        <div class="fin-label">Взвешенный NPV (8 сценариев)</div>
      </div>
      <div class="financial-card">
        <div class="fin-value">32%</div>
        <div class="fin-label">IRR (базовый)</div>
      </div>
      <div class="financial-card">
        <div class="fin-value">1,7×</div>
        <div class="fin-label">Бюджетный мультипликатор</div>
      </div>
      <div class="financial-card">
        <div class="fin-value">4,2 года</div>
        <div class="fin-label">Срок окупаемости</div>
      </div>
      <div class="financial-card">
        <div class="fin-value">6,04 млрд ₽</div>
        <div class="fin-label">Выручка (год 5)</div>
      </div>
      <div class="financial-card">
        <div class="fin-value">1:3 – 1:5</div>
        <div class="fin-label">ROI для государства</div>
      </div>
      <div class="financial-card">
        <div class="fin-value">10–12,5 млрд ₽</div>
        <div class="fin-label">Общий бюджет (5 лет)</div>
      </div>
    </div>

    <!-- Доходы -->
    <h2>Структура доходов (год 5, базовый сценарий)</h2>
    <div class="scenarios-table-wrap" style="margin-bottom: 3rem;">
      <table class="scenarios-table">
        <thead>
          <tr>
            <th>Статья дохода</th>
            <th>Сумма</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Комиссия с транзакций лояльности</td><td>1,18 млрд ₽</td></tr>
          <tr><td>Комиссия с краудфандинга</td><td>0,94 млрд ₽</td></tr>
          <tr><td>Подписка на премиум-аналитику</td><td>1,54 млрд ₽</td></tr>
          <tr><td>Платное продвижение карточек</td><td>1,02 млрд ₽</td></tr>
          <tr><td>Интеграционные доходы (API)</td><td>0,45 млрд ₽</td></tr>
          <tr><td>Комиссия Биржи креаторов</td><td>0,26 млрд ₽</td></tr>
          <tr><td>Комиссия Опора.Цепочки</td><td>0,31 млрд ₽</td></tr>
          <tr><td>Доход от резервного фонда</td><td>0,32 млрд ₽</td></tr>
          <tr style="font-weight: 600; color: #233370;"><td>ИТОГО</td><td>6,04 млрд ₽</td></tr>
        </tbody>
      </table>
    </div>

    <!-- 8 сценариев -->
    <h2>8 сценариев стресс-тестирования</h2>
    <p class="text-secondary" style="margin-bottom: 1.5rem;">
      Каждый сценарий моделирует комбинацию четырёх «рубильников»:
      поправки в ст. 149 НК РФ, смарт-контракты ЦБ, включение в ЭПР, санкционный режим.
    </p>

    <div class="scenarios-table-wrap">
      <table class="scenarios-table">
        <thead>
          <tr>
            <th>Сценарий</th>
            <th>NPV</th>
            <th>IRR</th>
            <th>Окупаемость</th>
            <th>Мульт.</th>
            <th>Вер.</th>
          </tr>
        </thead>
        <tbody>
          {% for s in site.data.scenarios %}
          <tr {% if s.class == 'highlight' %}style="background: rgba(46,196,182,0.08);"{% endif %}
              {% if s.class == 'negative' %}style="background: rgba(198,40,40,0.05);"{% endif %}>
            <td><strong>{{ s.id }} — {{ s.name }}</strong></td>
            <td>{{ s.npv }}</td>
            <td>{{ s.irr }}</td>
            <td>{{ s.payback }}</td>
            <td>{{ s.multiplier }}</td>
            <td>{{ s.probability }}</td>
          </tr>
          {% endfor %}
        </tbody>
      </table>
    </div>

    <!-- Источники финансирования -->
    <h2 style="margin-top: 3rem;">Источники финансирования</h2>
    <div class="scenarios-table-wrap">
      <table class="scenarios-table">
        <thead>
          <tr><th>Источник</th><th>Сумма</th></tr>
        </thead>
        <tbody>
          <tr><td>Федеральный бюджет (нацпроекты)</td><td>2,5–3,5 млрд ₽</td></tr>
          <tr><td>Госсубсидии (Минпромторг, Минцифры)</td><td>1,2–1,8 млрд ₽</td></tr>
          <tr><td>Институты развития (Сколково, ВЭБ.РФ)</td><td>0,8–1,2 млрд ₽</td></tr>
          <tr><td>Корпорация МСП (поручительства)</td><td>1,5–2,0 млрд ₽</td></tr>
          <tr><td>Частные инвестиции</td><td>1,5–2,0 млрд ₽</td></tr>
          <tr><td>Гранты (АСИ, БРИКС, ЕЭК)</td><td>0,3–0,5 млрд ₽</td></tr>
          <tr><td>Собственные средства</td><td>0,5–0,7 млрд ₽</td></tr>
          <tr style="font-weight: 600; color: #233370;"><td>ИТОГО</td><td>10–12,5 млрд ₽</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section class="section cta">
  <div class="container">
    <h2>Заинтересованы в инвестициях?</h2>
    <p class="cta-text">
      Полная финансовая модель с P&L и Cash Flow по 8 сценариям доступна
      в основном репозитории проекта.
    </p>
    <div class="cta-actions">
      <a href="/contacts/" class="btn btn-teal btn-lg">Обсудить участие</a>
      <a href="https://github.com/AlexanderNarbaev/opora" class="btn btn-outline-light btn-lg" target="_blank" rel="noopener">
        Исходный код на GitHub
      </a>
    </div>
  </div>
</section>
