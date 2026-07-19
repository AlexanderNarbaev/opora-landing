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
