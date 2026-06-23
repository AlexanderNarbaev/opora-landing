---
layout: default
title: Демо
description: Как работает платформа «Опора» — пошаговая демонстрация ключевых механик для граждан, бизнеса и государства.
---

<section class="section">
  <div class="container">
    <h1 class="section-title">Как работает «Опора»</h1>
    <p class="section-subtitle">
      Три перспективы одной платформы: гражданин, предприниматель, государство.
    </p>

    <!-- Для гражданина -->
    <div style="margin-bottom: 4rem;">
      <h2>Для гражданина</h2>
      <div class="grid-3" style="margin-top: 1.5rem;">
        <div class="card">
          <h3>1. Авторизация через Госуслуги</h3>
          <p class="text-secondary">
            Вход через ЕСИА (OAuth 2.0/OIDC). Никаких дополнительных регистраций —
            ваш профиль уже подтверждён государством.
          </p>
        </div>
        <div class="card">
          <h3>2. Выбор верифицированных товаров</h3>
          <p class="text-secondary">
            Каталог с грейдированием «Золото/Серебро/Бронза». Каждый бренд проходит
            проверку через ГИСП, «Честный знак» и ФНС.
          </p>
        </div>
        <div class="card">
          <h3>3. Покупка и кешбэк</h3>
          <p class="text-secondary">
            Кешбэк до 7% баллами лояльности. Баллы можно тратить на следующие покупки,
            образование, медицину, спорт — через социальный трек.
          </p>
        </div>
      </div>
    </div>

    <!-- Для предпринимателя -->
    <div style="margin-bottom: 4rem;">
      <h2>Для предпринимателя</h2>
      <div class="grid-3" style="margin-top: 1.5rem;">
        <div class="card">
          <h3>1. Верификация бренда</h3>
          <p class="text-secondary">
            Подключение к платформе, проверка через госреестры, присвоение уровня
            локализации. Бренд получает знак качества и доступ к аудитории.
          </p>
        </div>
        <div class="card">
          <h3>2. AI-Маркетолог (Опора.Гений)</h3>
          <p class="text-secondary">
            YandexGPT + Kandinsky генерируют описания товаров и баннеры.
            Прохождение модерации ≥ 80%. Экономия на маркетинге.
          </p>
        </div>
        <div class="card">
          <h3>3. Поиск партнёров</h3>
          <p class="text-secondary">
            AI-подбор производственных партнёров по 50+ параметрам.
            Артельные кластеры для крупных заказов. Смарт-контракты.
          </p>
        </div>
      </div>
    </div>

    <!-- Для государства -->
    <div>
      <h2>Для государства</h2>
      <div class="grid-3" style="margin-top: 1.5rem;">
        <div class="card">
          <h3>1. Прозрачный инструмент импортозамещения</h3>
          <p class="text-secondary">
            Реальные данные о локализации производств. Мониторинг доли
            российских товаров в потребительской корзине в реальном времени.
          </p>
        </div>
        <div class="card">
          <h3>2. Обеление самозанятых</h3>
          <p class="text-secondary">
            Интеграция с «Мой налог». Автоматические чеки. Вывод из тени
            для 8+ млн самозанятых без официального дохода.
          </p>
        </div>
        <div class="card">
          <h3>3. ROI 1:3–1:5</h3>
          <p class="text-secondary">
            Бюджетный мультипликатор 1,7×. Каждый рубль господдержки
            генерирует 3–5 рублей роста оборота МСП.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section-gray">
  <div class="container">
    <h2 class="section-title">Технологический стек</h2>
    <div class="scenarios-table-wrap">
      <table class="scenarios-table">
        <thead>
          <tr><th>Компонент</th><th>Технология</th></tr>
        </thead>
        <tbody>
          <tr><td>Бэкенд</td><td>Java 25, Quarkus 3.36, Gradle 9.5.1 (Kotlin DSL)</td></tr>
          <tr><td>Фронтенд</td><td>Apache Wicket 10.9.0, React 18</td></tr>
          <tr><td>Базы данных</td><td>PostgreSQL 17, MongoDB 8.3, Redis 8.6.3</td></tr>
          <tr><td>События</td><td>Apache Kafka 4.2.0, Apicurio Registry 3.2.x (Avro)</td></tr>
          <tr><td>Блокчейн</td><td>Hyperledger Fabric + КриптоПро HLF patch</td></tr>
          <tr><td>API</td><td>REST, gRPC 1.81.0, OpenAPI 3.0</td></tr>
          <tr><td>Аутентификация</td><td>Keycloak 24, ЕСИА (OAuth 2.0/OIDC)</td></tr>
          <tr><td>Безопасность</td><td>Класс К2 (ФСТЭК № 117), КриптоПро CSP 5.0</td></tr>
          <tr><td>AI</td><td>YandexGPT, CatBoost, TFT, XGBoost, RuBERT</td></tr>
          <tr><td>Деплой</td><td>Docker Compose, Kubernetes (minikube), GitHub Actions</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
