---
layout: default
title: Модули
description: 17 модулей платформы «Опора» — от Витрины до Экспорта. Каждый модуль закрывает конкретную потребность бизнеса и гражданина.
---

<section class="section">
  <div class="container">
    <h1 class="section-title">17 модулей платформы «Опора»</h1>
    <p class="section-subtitle">
      11 бизнес-модулей и 6 инфраструктурных сервисов.
      Каждый — изолированный доменный контекст со своим API и хранилищем.
    </p>

    {% for module in site.data.modules %}
    <div class="module-detail">
      <div class="module-detail-visual" style="text-align: center;">
        <div class="module-detail-icon" style="background: {{ module.color }}15; color: {{ module.color }}; margin: 0 auto;">
          {% include icons/{{ module.icon }}.svg %}
        </div>
      </div>
      <div class="module-detail-info">
        <h2>{{ module.name }}</h2>
        <p class="text-secondary">{{ module.description }}</p>
        <ul class="module-features">
          {% for feature in module.features %}
          <li>{{ feature }}</li>
          {% endfor %}
        </ul>
      </div>
    </div>
    {% endfor %}
  </div>
</section>

<!-- CTA -->
<section class="section cta">
  <div class="container">
    <h2>Готовы стать частью экосистемы?</h2>
    <p class="cta-text">
      Каждый модуль — это изолированный микросервис с открытым API.
      Подключайтесь как партнёр, разработчик или бренд.
    </p>
    <div class="cta-actions">
      <a href="{{ '/contacts/' | relative_url }}" class="btn btn-teal btn-lg">Связаться с нами</a>
      <a href="{{ '/' | relative_url }}#how-it-works" class="btn btn-outline-light btn-lg">Как работает</a>
    </div>
  </div>
</section>
