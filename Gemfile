source "https://rubygems.org"

# GitHub Pages + Jekyll 3.10 (штатная версия GitHub Pages)
gem "github-pages", "~> 232", group: :jekyll_plugins

# Плагины (все входят в github-pages gem)
group :jekyll_plugins do
  gem "jekyll-sitemap"
  gem "jekyll-seo-tag"
end

# Windows и JRuby (для локальной разработки)
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
