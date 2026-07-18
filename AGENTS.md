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

## AI Development Tools (via opencode_initializer)

Recommended open-source AI plugins:
- DevoxxGenie (JetBrains, Apache 2.0) — local LLMs, RAG, MCP, agent mode
- Cline (VS Code+JetBrains, Apache 2.0) — AI coding agent, Ollama, MCP
- Tabby (VS Code+JetBrains, Apache 2.0) — self-hosted code completion
- Aider (CLI, Apache 2.0) — git-aware multi-file AI edits
