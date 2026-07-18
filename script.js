/**
 * Опора — Landing Page Interactions
 * Vanilla JS, no dependencies
 */

(function () {
    'use strict';

    var trackToggle = document.getElementById('trackToggle');
    var currentTrack = 'investor';

    /* ---- Quad Track Toggle ---- */
    if (trackToggle) {
        trackToggle.addEventListener('click', function (e) {
            var btn = e.target.closest('.nav__track-btn');
            if (!btn) return;

            var track = btn.dataset.track;
            if (track === currentTrack) return;

            trackToggle.querySelectorAll('.nav__track-btn').forEach(function (b) {
                b.classList.remove('nav__track-btn--active');
                b.setAttribute('aria-checked', 'false');
            });
            btn.classList.add('nav__track-btn--active');
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
                v.style.opacity = '0';
                v.style.transform = 'translateY(8px)';
                v.addEventListener('transitionend', function handler() {
                    v.hidden = true;
                    v.removeEventListener('transitionend', handler);
                });
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
                var offset = 72;
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
            '.problem-card, .module-card, .metric-card, .tech-card, .doc-card, .dual-card, .roadmap__content, .risk-card, .faq-item'
        );
        cards.forEach(function (card, i) {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease ' + (i % 6) * 0.08 + 's, transform 0.5s ease ' + (i % 6) * 0.08 + 's';
            fadeObserver.observe(card);
        });
    }

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
                btn.textContent = 'Отправлено ✓';
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
                btn.textContent = 'Готово ✓';
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
        var scrollPos = window.scrollY + 100;

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

})();
