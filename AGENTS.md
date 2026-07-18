# AGENTS.md — Опора Landing Page

## Identity
Презентационный лендинг национальной цифровой экосистемы «Опора» — Jekyll статический сайт, деплой на GitHub Pages + GitVerse Pages.

## Language
Всё общение на русском. Код и комментарии — на английском.

## Tech Stack
- Jekyll 3.10 (статический генератор)
- SCSS (собственная система стилей)
- Inter (Google Fonts)
- GitHub Actions (автодеплой)

## Key Rules
- Все пути относительные (совместимость с GitVerse Pages)
- Не трогать `_config.yml` без явной команды
- Стили только в `_sass/`, не инлайн
- После изменений запускать `bundle exec jekyll build` для проверки

## Models
- Primary: `deepseek/deepseek-v4-pro`
- Small/fast: `deepseek/deepseek-v4-flash`
