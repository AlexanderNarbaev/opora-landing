# Опора — Презентационный лендинг

[![Deploy Jekyll to GitHub Pages](https://github.com/AlexanderNarbaev/opora-landing/actions/workflows/github-pages.yml/badge.svg)](https://github.com/AlexanderNarbaev/opora-landing/actions/workflows/github-pages.yml)

Лендинг национальной цифровой экосистемы **«Опора»** — платформы роста, доверия и кооперации российских брендов.

## О проекте

«Опора» — это 17 модулей (11+6) на едином технологическом ядре: от каталога верифицированных брендов до AI-кооперации, биржи креаторов, краудфандинга и экспортного «единого окна».

## Технологии лендинга

- **Jekyll 3.10** — статический генератор (нативная поддержка GitHub Pages)
- **SCSS** — собственная система стилей (без jekyll-тем)
- **Inter** — фирменный шрифт (Google Fonts CDN)
- **GitHub Actions** — автоматический деплой на GitHub Pages
- **Совместимость с GitVerse Pages** — все пути относительные

## Брендбук

Вёрстка соответствует [брендбуку «Опоры» v1.0](https://github.com/AlexanderNarbaev/opora/blob/main/docs/07-marketing/39_Brandbook_Opora.md):

| Элемент | Значение |
|---------|----------|
| Акцентный | `#233370` — глубокий синий |
| Интерактив | `#2EC4B6` — бирюзовый |
| Успех | `#4CAF76` — зелёный |
| Текст | `#1A1A1A` / `#667085` |
| Фон карточек | `#F2F4F7` |
| Шрифт | Inter (Google Fonts) |

## Структура

```
opora-landing/
├── _config.yml              # Конфигурация Jekyll
├── Gemfile                   # Зависимости Ruby
├── _data/                    # Данные (YAML)
│   ├── navigation.yml        # Навигация
│   ├── modules.yml           # 17 модулей
│   ├── scenarios.yml         # 8 сценариев финмодели
│   ├── roadmap.yml           # Дорожная карта
│   └── team.yml              # Команда
├── _includes/                # Переиспользуемые компоненты
│   ├── head.html
│   ├── header.html
│   ├── footer.html
│   └── icons/                # SVG-иконки модулей
├── _layouts/
│   └── default.html          # Основной макет
├── _sass/                    # SCSS (собственная система)
│   ├── _variables.scss
│   ├── _typography.scss
│   ├── _layout.scss
│   ├── _components.scss
│   ├── _hero.scss
│   ├── _problem.scss
│   ├── _modules.scss
│   ├── _financials.scss
│   ├── _roadmap.scss
│   ├── _team.scss
│   ├── _cta.scss
│   └── _responsive.scss
├── assets/
│   ├── css/main.scss         # Точка входа SCSS
│   └── images/
│       ├── logo.svg
│       └── favicon.svg
├── index.md                  # Главная (Hero→Проблема→Модули→Финансы→Roadmap→Команда→CTA)
├── modules.md                # Все 17 модулей с описаниями
├── investors.md              # Финмодель, 8 сценариев, инвестиционные показатели
├── demo.md                   # Как работает платформа
├── contacts.md               # Контакты и форма связи
└── .github/workflows/
    └── github-pages.yml      # CI/CD деплой
```

## Локальный запуск

```bash
# Установка зависимостей
bundle install

# Запуск сервера разработки
bundle exec jekyll serve --livereload

# Сборка для продакшена
JEKYLL_ENV=production bundle exec jekyll build
```

Открыть: `http://localhost:4000`

## Деплой

Деплой автоматический — push в `main` → GitHub Actions собирает Jekyll → публикует на GitHub Pages.

URL: `https://alexandernarbaev.github.io/opora-landing/`

## Связанные репозитории

- [opora](https://github.com/AlexanderNarbaev/opora) — основной репозиторий платформы (Java 25, Quarkus 3.36)

## Лицензия

Проект находится на стадии предзапуска. Все права защищены.

---

© 2026 АО «НП „Опора“». Москва.
