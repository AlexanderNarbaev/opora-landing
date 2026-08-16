/**
 * Опора — Landing Page Interactions
 * Vanilla JS, no dependencies
 */

(function () {
    'use strict';

    var trackBar = document.getElementById('trackBar');
    var currentTrack = 'investor';

    /* ---- Quad Track Toggle ---- */
    if (trackBar) {
        trackBar.addEventListener('click', function (e) {
            var btn = e.target.closest('.track-bar__btn');
            if (!btn) return;

            var track = btn.dataset.track;
            if (track === currentTrack) return;

            trackBar.querySelectorAll('.track-bar__btn').forEach(function (b) {
                b.classList.remove('track-bar__btn--active');
                b.setAttribute('aria-checked', 'false');
            });
            btn.classList.add('track-bar__btn--active');
            btn.setAttribute('aria-checked', 'true');

            var outViews = document.querySelectorAll('.dual-view[data-view="' + currentTrack + '"]');
            var inViews = document.querySelectorAll('.dual-view[data-view="' + track + '"]');

            inViews.forEach(function (v) {
                v.hidden = false;
                v.style.opacity = '0';
                v.style.transform = 'translateY(8px)';
                requestAnimationFrame(function () {
                    v.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
                    v.style.opacity = '1';
                    v.style.transform = 'translateY(0)';
                });
            });

            outViews.forEach(function (v) {
                v.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
                v.style.opacity = '0';
                v.style.transform = 'translateY(8px)';
                setTimeout(function () {
                    v.hidden = true;
                    v.style.opacity = '';
                    v.style.transform = '';
                    v.style.transition = '';
                }, 400);
            });

            currentTrack = track;
        });
    }

    /* ---- Navigation: scroll shadow ---- */
    var nav = document.getElementById('nav');
    function onScroll() {
        if (window.scrollY > 10) {
            nav.classList.add('nav--scrolled');
        } else {
            nav.classList.remove('nav--scrolled');
        }
    }
    window.addEventListener('scroll', onScroll, { passive: true });

    /* ---- Video autoplay fallback ---- */
    var video = document.querySelector('video[autoplay]');
    if (video) {
        video.play().catch(function () {
            // Autoplay blocked — add click-to-play
            video.addEventListener('click', function () {
                video.play();
            });
            video.style.cursor = 'pointer';
        });
    }

    /* ---- Mobile menu toggle ---- */
    var toggle = document.getElementById('navToggle');
    var links = document.getElementById('navLinks');

    if (toggle && links) {
        toggle.addEventListener('click', function () {
            var isOpen = links.classList.toggle('nav__links--open');
            toggle.classList.toggle('nav__toggle--active');
            toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        links.querySelectorAll('a').forEach(function (a) {
            a.addEventListener('click', function () {
                links.classList.remove('nav__links--open');
                toggle.classList.remove('nav__toggle--active');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    /* ---- Smooth scroll for anchor links ---- */
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
        a.addEventListener('click', function (e) {
            var href = this.getAttribute('href');
            if (href === '#') return;
            var target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                var isMobile = window.innerWidth <= 768;
                var offset = isMobile ? 56 : 120;
                var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top: top, behavior: 'smooth' });
            }
        });
    });

    /* ---- Counter animation ---- */
    function animateCounter(el) {
        if (el.dataset.animated) return;

        var target = parseFloat(el.dataset.target);
        var suffix = el.dataset.suffix || '';
        var isDecimal = target % 1 !== 0;
        var duration = 1800;
        var startTime = null;

        el.textContent = '0' + suffix;

        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = Math.min((timestamp - startTime) / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3);
            var current = target * eased;

            if (isDecimal) {
                var formatted = current.toFixed(2);
                formatted = parseFloat(formatted).toString().replace('.', ',');
                el.textContent = formatted + suffix;
            } else {
                el.textContent = Math.round(current) + suffix;
            }

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                if (isDecimal) {
                    var formattedFinal = target.toFixed(2);
                    formattedFinal = parseFloat(formattedFinal).toString().replace('.', ',');
                    el.textContent = formattedFinal + suffix;
                } else {
                    el.textContent = target + suffix;
                }
            }
        }

        el.dataset.animated = 'true';
        requestAnimationFrame(step);
    }

    /* ---- Intersection Observer ---- */
    if ('IntersectionObserver' in window) {
        var counterObserver = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        var counters = entry.target.querySelectorAll('.counter');
                        if (counters.length === 0 && entry.target.classList.contains('counter')) {
                            animateCounter(entry.target);
                        } else {
                            counters.forEach(function (c) { animateCounter(c); });
                        }
                    }
                });
            },
            { threshold: 0.3 }
        );

        var heroStats = document.querySelector('.hero__stats');
        if (heroStats) counterObserver.observe(heroStats);

        var metricsSection = document.querySelector('.economics');
        if (metricsSection) counterObserver.observe(metricsSection);

        document.querySelectorAll('.metric-card .counter').forEach(function (c) {
            counterObserver.observe(c);
        });

        var fadeObserver = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        fadeObserver.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
        );

        var cards = document.querySelectorAll(
            '.problem-card, .module-card, .metric-card, .tech-card, .doc-card, .dual-card, .roadmap__content, .risk-card, .faq-item, .flow__step'
        );
        cards.forEach(function (card, i) {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease ' + (i % 6) * 0.08 + 's, transform 0.5s ease ' + (i % 6) * 0.08 + 's';
            fadeObserver.observe(card);
        });
    }

    /* ---- Module Card Expansion ---- */
    document.querySelectorAll('.module-card--expandable').forEach(function (card) {
        card.addEventListener('click', function (e) {
            if (e.target.closest('a')) return;
            var wasExpanded = card.classList.contains('module-card--expanded');
            document.querySelectorAll('.module-card--expanded').forEach(function (c) {
                c.classList.remove('module-card--expanded');
            });
            if (!wasExpanded) {
                card.classList.add('module-card--expanded');
                card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
    });

    /* ---- Contact Form handling ---- */
    var form = document.getElementById('contactForm');
    if (form) {
        var formStatus = form.querySelector('.form-status');

        form.addEventListener('submit', function (e) {
            e.preventDefault();

            var data = new FormData(form);
            var obj = {};
            data.forEach(function (v, k) { obj[k] = v; });

            var btn = form.querySelector('button[type="submit"]');
            var originalText = btn.textContent;
            btn.textContent = 'Отправка...';
            btn.disabled = true;
            if (formStatus) formStatus.textContent = '';

            setTimeout(function () {
                btn.textContent = 'Отправлено \u2713';
                btn.style.background = '#4CAF76';
                if (formStatus) {
                    formStatus.textContent = 'Заявка успешно отправлена';
                    formStatus.style.color = '#4CAF76';
                }

                setTimeout(function () {
                    btn.textContent = originalText;
                    btn.style.background = '';
                    btn.disabled = false;
                    form.reset();
                    if (formStatus) formStatus.textContent = '';
                }, 2500);
            }, 1000);

            console.log('[Опора] Contact form submitted:', obj);
        });
    }

    /* ---- Newsletter Form handling ---- */
    var newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        var nlStatus = newsletterForm.querySelector('.form-status');

        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();

            var emailInput = newsletterForm.querySelector('.newsletter__input');
            var btn = newsletterForm.querySelector('.newsletter__btn');
            var originalText = btn.textContent;

            btn.textContent = 'Отправка...';
            btn.disabled = true;
            if (nlStatus) nlStatus.textContent = '';

            setTimeout(function () {
                btn.textContent = 'Готово \u2713';
                btn.style.background = '#4CAF76';
                if (nlStatus) {
                    nlStatus.textContent = 'Подписка оформлена';
                    nlStatus.style.color = '#4CAF76';
                }

                setTimeout(function () {
                    btn.textContent = originalText;
                    btn.style.background = '';
                    btn.disabled = false;
                    emailInput.value = '';
                    if (nlStatus) nlStatus.textContent = '';
                }, 2500);
            }, 800);

            console.log('[Опора] Newsletter signup:', emailInput.value);
        });
    }

    /* ---- Active nav link on scroll ---- */
    var sections = document.querySelectorAll('section[id]');

    function highlightNav() {
        var scrollPos = window.scrollY + 140;

        sections.forEach(function (section) {
            var top = section.offsetTop;
            var height = section.offsetHeight;
            var id = section.getAttribute('id');
            var link = document.querySelector('.nav__links a[href="#' + id + '"]');

            if (link && scrollPos >= top && scrollPos < top + height) {
                document.querySelectorAll('.nav__links a').forEach(function (a) {
                    a.removeAttribute('aria-current');
                });
                link.setAttribute('aria-current', 'page');
            }
        });
    }

    window.addEventListener('scroll', highlightNav, { passive: true });

    /* ---- Keyboard: close menu on Escape ---- */
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && links && links.classList.contains('nav__links--open')) {
            links.classList.remove('nav__links--open');
            toggle.classList.remove('nav__toggle--active');
            toggle.setAttribute('aria-expanded', 'false');
            toggle.focus();
        }
    });

    /* ---- Prototype mockup accent colors ---- */
    var mockCards = document.querySelectorAll('.prototype__mock-card');
    if (mockCards.length > 0) {
        var cardColors = ['#2EC4B6', '#4CAF76', '#233370'];
        mockCards.forEach(function (card, i) {
            card.style.background = 'linear-gradient(135deg, ' + cardColors[i % 3] + '15, ' + cardColors[i % 3] + '08)';
            card.style.borderColor = cardColors[i % 3] + '30';
        });
    }

    /* ---- Screenshot Tour ---- */
    var demoImage = document.getElementById('demoImage');
    var demoCursor = document.getElementById('demoCursor');
    var demoHotspot = document.getElementById('demoHotspot');
    var demoCaption = document.getElementById('demoCaption');
    var demoDots = document.getElementById('demoDots');
    var demoPrev = document.getElementById('demoPrev');
    var demoNext = document.getElementById('demoNext');
    var demoPlay = document.getElementById('demoPlay');

    if (demoImage && demoDots) {
        var TOUR_DATA = {
            investor: [
                { src: 'assets/screenshots/investor-1.png', caption: '1/5 · Дашборд: NPV 4.5 млрд, IRR 32%', hotspot: [70, 15] },
                { src: 'assets/screenshots/investor-2.png', caption: '2/5 · Краудфандинг 2.0: токены участия', hotspot: [60, 40] },
                { src: 'assets/screenshots/investor-3.png', caption: '3/5 · Инвестиции: ЦФА, доходность', hotspot: [80, 50] },
                { src: 'assets/screenshots/investor-4.png', caption: '4/5 · Смарт-контракты: NDA + подписание', hotspot: [70, 60] },
                { src: 'assets/screenshots/investor-5.png', caption: '5/5 · Сводка: 20 сервисов, окупаемость 4.2 года', hotspot: [30, 80] }
            ],
            government: [
                { src: 'assets/screenshots/government-1.png', caption: '1/4 · Дашборд: 20 сервисов, 200K+ брендов', hotspot: [50, 20] },
                { src: 'assets/screenshots/government-2.png', caption: '2/4 · Прослеживаемость: блокчейн-аудит', hotspot: [40, 50] },
                { src: 'assets/screenshots/government-3.png', caption: '3/4 · Верификация брендов через ГИСП', hotspot: [70, 30] },
                { src: 'assets/screenshots/government-4.png', caption: '4/4 · Интеграция: ЕСИА, ФНС, Мой налог', hotspot: [60, 40] }
            ],
            business: [
                { src: 'assets/screenshots/business-1.png', caption: '1/5 · Разместите товар бесплатно', hotspot: [60, 40] },
                { src: 'assets/screenshots/business-2.png', caption: '2/5 · AI-матчинг: партнёр за 14 дней', hotspot: [50, 30] },
                { src: 'assets/screenshots/business-3.png', caption: '3/5 · Смарт-контракты: NDA + подписание', hotspot: [70, 60] },
                { src: 'assets/screenshots/business-4.png', caption: '4/5 · Креаторы: 0% комиссия', hotspot: [50, 50] },
                { src: 'assets/screenshots/business-5.png', caption: '5/5 · Доходы: аналитика и отчёты', hotspot: [80, 30] }
            ],
            citizen: [
                { src: 'assets/screenshots/citizen-1.png', caption: '1/4 · Каталог: верифицированные бренды', hotspot: [70, 50] },
                { src: 'assets/screenshots/citizen-2.png', caption: '2/4 · Кешбэк до 7% за покупки', hotspot: [40, 30] },
                { src: 'assets/screenshots/citizen-3.png', caption: '3/4 · Загрузите чек — получите баллы', hotspot: [50, 50] },
                { src: 'assets/screenshots/citizen-4.png', caption: '4/4 · Обменяйте баллы на скидки', hotspot: [80, 60] }
            ]
        };

        var currentTrackTour = TOUR_DATA[currentTrack];
        var currentStep = 0;
        var autoplayTimer = null;
        var isPlaying = true;
        var autoplayDelay = 5000;

        function buildDots() {
            demoDots.innerHTML = '';
            currentTrackTour.forEach(function (_, i) {
                var dot = document.createElement('button');
                dot.className = 'demo-controls__dot' + (i === currentStep ? ' demo-controls__dot--active' : '');
                dot.setAttribute('aria-label', 'Шаг ' + (i + 1));
                dot.addEventListener('click', function () { goToStep(i); });
                demoDots.appendChild(dot);
            });
        }

        function showStep(step) {
            currentStep = step;
            var data = currentTrackTour[step];

            demoImage.classList.add('demo-frame__image--fade');
            setTimeout(function () {
                demoImage.src = data.src;
                demoImage.classList.remove('demo-frame__image--fade');
            }, 200);

            demoCaption.textContent = data.caption;

            // Position hotspot
            if (data.hotspot && demoHotspot) {
                demoHotspot.style.left = data.hotspot[0] + '%';
                demoHotspot.style.top = data.hotspot[1] + '%';
                demoHotspot.classList.add('demo-frame__hotspot--visible');
            } else if (demoHotspot) {
                demoHotspot.classList.remove('demo-frame__hotspot--visible');
            }

            // Position cursor slightly above hotspot
            if (data.hotspot && demoCursor) {
                setTimeout(function () {
                    demoCursor.style.left = (data.hotspot[0] - 1) + '%';
                    demoCursor.style.top = (data.hotspot[1] - 3) + '%';
                    demoCursor.classList.add('demo-frame__cursor--visible');
                    // Click animation
                    setTimeout(function () {
                        demoCursor.classList.add('demo-frame__cursor--click');
                        setTimeout(function () {
                            demoCursor.classList.remove('demo-frame__cursor--click');
                            demoCursor.classList.remove('demo-frame__cursor--visible');
                        }, 400);
                    }, 800);
                }, 400);
            }

            buildDots();
        }

        function goToStep(step) {
            showStep(step);
            resetAutoplay();
        }

        function nextStep() {
            var next = (currentStep + 1) % currentTrackTour.length;
            showStep(next);
            resetAutoplay();
        }

        function prevStep() {
            var prev = (currentStep - 1 + currentTrackTour.length) % currentTrackTour.length;
            showStep(prev);
            resetAutoplay();
        }

        function resetAutoplay() {
            if (autoplayTimer) clearTimeout(autoplayTimer);
            if (isPlaying) {
                autoplayTimer = setTimeout(nextStep, autoplayDelay);
            }
        }

        function togglePlay() {
            isPlaying = !isPlaying;
            if (isPlaying) {
                demoPlay.classList.remove('demo-controls__play--paused');
                demoPlay.innerHTML = '&#9654;';
                resetAutoplay();
            } else {
                demoPlay.classList.add('demo-controls__play--paused');
                demoPlay.innerHTML = '&#10074;&#10074;';
                if (autoplayTimer) clearTimeout(autoplayTimer);
            }
        }

        function switchTrack(track) {
            currentTrackTour = TOUR_DATA[track];
            currentStep = 0;
            showStep(0);
            resetAutoplay();
        }

        // Event listeners
        demoPrev.addEventListener('click', prevStep);
        demoNext.addEventListener('click', nextStep);
        demoPlay.addEventListener('click', togglePlay);

        // Keyboard navigation
        document.addEventListener('keydown', function (e) {
            if (e.key === 'ArrowLeft') { e.preventDefault(); prevStep(); }
            if (e.key === 'ArrowRight') { e.preventDefault(); nextStep(); }
        });

        // Hook into existing track bar clicks
        var trackBarBtns = document.querySelectorAll('.track-bar__btn');
        if (trackBarBtns.length) {
            trackBarBtns.forEach(function (btn) {
                btn.addEventListener('click', function () {
                    var track = btn.dataset.track;
                    if (TOUR_DATA[track]) {
                        setTimeout(function () { switchTrack(track); }, 100);
                    }
                });
            });
        }

        // Init
        buildDots();
        showStep(0);
        autoplayTimer = setTimeout(nextStep, autoplayDelay);
    }

})();

/* === Prototype (MVP: verification + loyalty) === */
(function () {
    var root = document.getElementById('prototype');
    if (!root) return;

    /* ---- Tab switching ---- */
    var tabs = root.querySelectorAll('.proto-tab');
    var panels = root.querySelectorAll('.proto-panel');
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
        });
    });

    /* ---- Demo data for verification ---- */
    var brands = {
        '7707083893': { name: 'Сбер', grade: 'gold', region: 'Москва', products: 12, ogrn: '1027700132195', status: 'Действующее', esia: 'Подтверждён', honest: 'Участник', established: 1991 },
        '7728168971': { name: 'Вкусно — и точка', grade: 'gold', region: 'Москва', products: 28, ogrn: '1027700132195', status: 'Действующее', esia: 'Подтверждён', honest: 'Участник', established: 1990 },
        '7725715914': { name: 'Опора (демо)', grade: 'silver', region: 'Москва', products: 8, ogrn: '7725715914012', status: 'Действующее', esia: 'Подтверждён', honest: '—', established: 2026 },
    };

    var gradeLabel = { gold: 'Золото', silver: 'Серебро', bronze: 'Бронза' };

    function renderGrade(query) {
        var brand = brands[query.replace(/\D/g, '')] || {
            name: query,
            grade: 'silver',
            region: '—',
            products: 0,
            ogrn: query,
            status: 'Проверка',
            esia: '—',
            honest: '—',
            established: '—'
        };
        var gradeClass = 'proto-grade-card__badge--' + brand.grade;
        var html = '<div class="proto-grade-card">' +
            '<div class="proto-grade-card__header">' +
            '<div><div class="proto-grade-card__brand">' + brand.name + '</div>' +
            '<div class="proto-grade-card__inn">ИНН: ' + query + '</div></div>' +
            '<div class="proto-grade-card__badge ' + gradeClass + '">' + gradeLabel[brand.grade] + '</div>' +
            '</div>' +
            '<div class="proto-grade-card__row"><span class="proto-grade-card__label">Регион</span><span class="proto-grade-card__value">' + brand.region + '</span></div>' +
            '<div class="proto-grade-card__row"><span class="proto-grade-card__label">ОГРН</span><span class="proto-grade-card__value">' + brand.ogrn + '</span></div>' +
            '<div class="proto-grade-card__row"><span class="proto-grade-card__label">Статус</span><span class="proto-grade-card__value proto-grade-card__value--ok">' + brand.status + '</span></div>' +
            '<div class="proto-grade-card__row"><span class="proto-grade-card__label">ЕСИА</span><span class="proto-grade-card__value proto-grade-card__value--ok">' + brand.esia + '</span></div>' +
            '<div class="proto-grade-card__row"><span class="proto-grade-card__label">Честный знак</span><span class="proto-grade-card__value proto-grade-card__value--ok">' + brand.honest + '</span></div>' +
            '<div class="proto-grade-card__row"><span class="proto-grade-card__label">Товаров в каталоге</span><span class="proto-grade-card__value">' + brand.products + '</span></div>' +
            '</div>';
        document.getElementById('verifyResult').innerHTML = html;
    }

    /* ---- Verification flow ---- */
    var verifyBtn = document.getElementById('verifyBtn');
    var verifyInput = document.getElementById('verifyInput');
    var verifySteps = document.getElementById('verifySteps');
    var stepSeq = ['gis', 'fns', 'mark', 'grade'];
    var stepStatus = { 'gis': 'ГИСП — реестр производственных площадок', 'fns': 'ФНС — проверка ИНН и статуса юрлица', 'mark': 'Честный знак — система маркировки', 'grade': 'Грейдирование — расчёт доверия' };

    function runVerification(query) {
        verifyResult.innerHTML = '<div class="proto-placeholder"><div class="proto-placeholder__icon">⌕</div><p>Проверка по реестрам…</p></div>';
        verifySteps.removeAttribute('hidden');
        var states = {};
        stepSeq.forEach(function (s) { states[s] = 'el'; var el = verifySteps.querySelector('[data-step="' + s + '"]'); el.classList.remove('proto-step--active', 'proto-step--done'); el.querySelector('.proto-step__status').textContent = 'Ожидание'; });
        var i = 0;
        function tick() {
            if (i > 0) {
                var prev = stepSeq[i - 1];
                var prevEl = verifySteps.querySelector('[data-step="' + prev + '"]');
                prevEl.classList.remove('proto-step--active');
                prevEl.classList.add('proto-step--done');
                prevEl.querySelector('.proto-step__status').textContent = '✓ Готово';
            }
            if (i >= stepSeq.length) {
                renderGrade(query);
                return;
            }
            var cur = stepSeq[i];
            var curEl = verifySteps.querySelector('[data-step="' + cur + '"]');
            curEl.classList.add('proto-step--active');
            curEl.querySelector('.proto-step__status').textContent = 'Проверка…';
            i++;
            setTimeout(tick, 700);
        }
        setTimeout(tick, 300);
    }

    if (verifyBtn) {
        verifyBtn.addEventListener('click', function () {
            var q = (verifyInput.value || '').trim();
            if (!q) { q = '7707083893'; verifyInput.value = q; }
            runVerification(q);
        });
    }
    var chips = root.querySelectorAll('.proto-chip');
    Array.prototype.forEach.call(chips, function (chip) {
        chip.addEventListener('click', function () {
            var inn = chip.dataset.inn || '';
            var name = chip.dataset.name || '';
            verifyInput.value = inn + ' / ' + name;
            runVerification(inn);
        });
    });

    /* ---- Loyalty points ---- */
    var balance = 0;
    var totalEarned = 0;
    var totalSpent = 0;
    var pointsBalance = document.getElementById('pointsBalance');
    var statEarned = document.getElementById('statEarned');
    var statSpent = document.getElementById('statSpent');
    var statCashback = document.getElementById('statCashback');
    var pointsFeed = document.getElementById('pointsFeed');
    var pointsEarn = document.getElementById('pointsEarn');
    var pointsSpend = document.getElementById('pointsSpend');

    function fmtTime() {
        var d = new Date();
        var pad = function (n) { return n < 10 ? '0' + n : '' + n; };
        return pad(d.getHours()) + ':' + pad(d.getMinutes());
    }

    function updateStats() {
        pointsBalance.textContent = balance;
        statEarned.textContent = totalEarned;
        statSpent.textContent = totalSpent;
        statCashback.textContent = totalEarned + ' ₽';
        pointsBalance.classList.add('proto-balance__value--bump');
        setTimeout(function () { pointsBalance.classList.remove('proto-balance__value--bump'); }, 300);
    }

    function addFeedItem(opts) {
        var empty = pointsFeed.querySelector('.proto-feed__item--empty');
        if (empty) empty.remove();
        var item = document.createElement('div');
        item.className = 'proto-feed__item' + (opts.spent ? ' proto-feed__item--spent' : '');
        item.innerHTML = '<div class="proto-feed__icon">' + (opts.spent ? '−' : '+') + '</div>' +
            '<div class="proto-feed__content">' +
            '<div class="proto-feed__title">' + opts.title + '</div>' +
            '<div class="proto-feed__meta">' + opts.brand + ' · ' + fmtTime() + '</div>' +
            '</div>' +
            '<div class="proto-feed__amount">' + (opts.spent ? '−' : '+') + ' ' + opts.amount + '</div>';
        pointsFeed.insertBefore(item, pointsFeed.firstChild);
    }

    if (pointsEarn) {
        pointsEarn.addEventListener('click', function () {
            var earn = Math.round(1500 * 0.07); // 7% cashback on 1500 ₽ = 105 points
            balance += earn;
            totalEarned += earn;
            updateStats();
            addFeedItem({ title: 'Кешбэк за покупку', brand: 'Товар российского бренда', amount: earn });
        });
    }
    if (pointsSpend) {
        pointsSpend.addEventListener('click', function () {
            if (balance < 100) {
                alert('Недостаточно баллов. Купите товар, чтобы заработать.');
                return;
            }
            balance -= 100;
            totalSpent += 100;
            updateStats();
            addFeedItem({ title: 'Скидка у партнёра', brand: 'Партнёрская сеть', amount: 100, spent: true });
        });
    }
})();
