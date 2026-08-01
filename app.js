/**
 * OKECHUKWU BENJAMIN CHIMAOBI - PORTFOLIO CORE ENGINE
 * Pure Vanilla JavaScript Framework
 */

document.addEventListener('DOMContentLoaded', () => {
    initThemeControl();
    initMobileNavigation();
    initScrollTracking();
    initKineticCanvas();
    initTextScrambler();
});

/* ==========================================================================
   1. Theme Management System (Light/Dark Toggle Engine)
   ========================================================================== */
function initThemeControl() {
    const toggleBtn = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    
    document.documentElement.setAttribute('data-theme', savedTheme);

    toggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', targetTheme);
        localStorage.setItem('portfolio-theme', targetTheme);
    });
}

/* ==========================================================================
   2. Responsive Navigation & Fullscreen Mobile Menu Grid
   ========================================================================== */
function initMobileNavigation() {
    const trigger = document.getElementById('hamburger-trigger');
    const overlay = document.getElementById('mobile-menu-overlay');
    const links = document.querySelectorAll('.mobile-link');

    trigger.addEventListener('click', () => {
        trigger.classList.toggle('open');
        overlay.classList.toggle('active');
    });

    // Automatically collapse layout if an inner mobile link is triggered
    links.forEach(link => {
        link.addEventListener('click', () => {
            trigger.classList.remove('open');
            overlay.classList.remove('active');
        });
    });
}

/* ==========================================================================
   3. Global Progress Bar System
   ========================================================================== */
function initScrollTracking() {
    const progressIndicator = document.getElementById('scroll-progress');
    
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressIndicator.style.width = scrolled + '%';
    });
}

/* ==========================================================================
   4. High-Performance Kinetic Hybrid Canvas Backdrop
   ========================================================================== */
function initKineticCanvas() {
    const canvas = document.getElementById('global-kinetic-canvas');
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Particle Array Configuration
    const particleCount = Math.min(80, Math.floor((width * height) / 20000));
    const particles = [];
    let waveIncrement = 0;

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.6;
            this.vy = (Math.random() - 0.5) * 0.6;
            this.radius = Math.random() * 2.5 + 1;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Fluid screen boundary rebounds
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
        }

        draw() {
            // Fetch modern structural system color accents dynamically
            const theme = document.documentElement.getAttribute('data-theme');
            ctx.fillStyle = theme === 'dark' ? 'rgba(255, 215, 0, 0.4)' : 'rgba(114, 9, 183, 0.3)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Initialize Global Particle Array
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    // Primary Loop Engine running at 60fps
    function renderLoop() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        
        // Deep background paint layout calculations
        ctx.clearRect(0, 0, width, height);

        // A. Draw Structural Kinetic Background Grid Array
        ctx.strokeStyle = currentTheme === 'dark' ? 'rgba(255, 215, 0, 0.02)' : 'rgba(114, 9, 183, 0.03)';
        ctx.lineWidth = 1;
        const gridSize = 60;
        for (let x = 0; x < width; x += gridSize) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, height);
            ctx.stroke();
        }
        for (let y = 0; y < height; y += gridSize) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
            ctx.stroke();
        }

        // B. Update & Connect Flying Parallax Particles
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();

            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 150) {
                    ctx.strokeStyle = currentTheme === 'dark' 
                        ? `rgba(138, 43, 226, ${0.15 - dist/150})` 
                        : `rgba(114, 9, 183, ${0.12 - dist/150})`;
                    ctx.lineWidth = 0.8;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }

        // C. Render Continuous Mathematical Mathematical Waves
        waveIncrement += 0.004;
        ctx.beginPath();
        ctx.strokeStyle = currentTheme === 'dark' ? 'rgba(255, 215, 0, 0.04)' : 'rgba(114, 9, 183, 0.05)';
        ctx.lineWidth = 3;
        
        for (let i = 0; i < width; i++) {
            const y = height * 0.8 + Math.sin(i * 0.003 + waveIncrement) * 40 + Math.sin(i * 0.001 + waveIncrement * 2) * 20;
            if (i === 0) ctx.moveTo(i, y);
            else ctx.lineTo(i, y);
        }
        ctx.stroke();

        animationFrameId = requestAnimationFrame(renderLoop);
    }

    renderLoop();

    // Dynamically recalculate scale maps on screen dimensions configurations
    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });
}

/* ==========================================================================
   5. Matrix Character Decoding Text Scrambler System
   ========================================================================== */
function initTextScrambler() {
    const target = document.getElementById('scramble-target');
    if (!target) return;

    const phrases = ['Frontend Web Developer', 'Problem Solver', 'Creative Tech Educator'];
    let currentPhraseIndex = 0;

    class TextScrambler {
        constructor(el) {
            this.el = el;
            this.chars = '!<>-_\\/[]{}—=+*^?#________';
            this.update = this.update.bind(this);
        }
        setText(newText) {
            const oldText = this.el.innerText;
            const length = Math.max(oldText.length, newText.length);
            const promise = new Promise((resolve) => this.resolve = resolve);
            this.queue = [];
            for (let i = 0; i < length; i++) {
                const from = oldText[i] || '';
                const to = newText[i] || '';
                const start = Math.floor(Math.random() * 40);
                const end = start + Math.floor(Math.random() * 40);
                this.queue.push({ from, to, start, end });
            }
            cancelAnimationFrame(this.frameId);
            this.frame = 0;
            this.update();
            return promise;
        }
        update() {
            let output = '';
            let complete = 0;
            for (let i = 0, n = this.queue.length; i < n; i++) {
                let { from, to, start, end, char } = this.queue[i];
                if (this.frame >= end) {
                    complete++;
                    output += to;
                } else if (this.frame >= start) {
                    if (!char || Math.random() < 0.28) {
                        char = this.chars[Math.floor(Math.random() * this.chars.length)];
                        this.queue[i].char = char;
                    }
                    output += `<span class="scramble-decoder" style="color: #ffd700;">${char}</span>`;
                } else {
                    output += from;
                }
            }
            this.el.innerHTML = output;
            if (complete === this.queue.length) {
                this.resolve();
            } else {
                this.frameId = requestAnimationFrame(this.update);
                this.frame++;
            }
        }
    }

    const scrambler = new TextScrambler(target);
    
    const cyclePhrases = () => {
        scrambler.setText(phrases[currentPhraseIndex]).then(() => {
            setTimeout(() => {
                currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
                cyclePhrases();
            }, 3500); // Duration phrase remains fully built
        });
    };

    // Delay start for the entrance load sequence
    setTimeout(cyclePhrases, 1000);
}

/* ==========================================================================
   6. Advanced Intersection Observer (Scroll Animation Trigger Engine)
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    initScrollRevealEngine();
});

function initScrollRevealEngine() {
    const revealTargets = document.querySelectorAll('.reveal-element');
    
    const observerOptions = {
        root: null, // Viewport standard
        threshold: 0.12, // Element visibility threshold percentage
        rootMargin: "0px 0px -40px 0px"
    };

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                
                // If the targeting element contains skill bar parameters, fill them out
                const skillBars = entry.target.querySelectorAll('.skill-bar-fill');
                if (skillBars.length > 0) {
                    skillBars.forEach(bar => {
                        const targetWidth = bar.style.getPropertyValue('--target-width');
                        bar.style.width = targetWidth;
                    });
                }
                
                // Unobserve item once animation triggers to maintain baseline processing speeds
                observer.unobserve(entry.target);
            }
        });
    };

    const globalObserver = new IntersectionObserver(revealCallback, observerOptions);

    revealTargets.forEach(target => {
        globalObserver.observe(target);
    });
}

/* ==========================================================================
   7. Live State Filtering Logic Matrix (Engineering Lab Engine)
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    initIsomorphicGridEngine();
});

function initIsomorphicGridEngine() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterButtons.length === 0 || projectCards.length === 0) return;

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Adjust current highlighted button reference states
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const targetedFilter = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (targetedFilter === 'all' || cardCategory === targetedFilter) {
                    card.classList.remove('hidden-card');
                    // Retain layout sync alignment
                    setTimeout(() => {
                        card.style.display = 'flex';
                    }, 10);
                } else {
                    card.classList.add('hidden-card');
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 500); // Sync seamlessly with global fade transitions
                }
            });
        });
    });
}


/* ==========================================================================
   8. Live Telemetry Metric Calculations (Dashboard Engine)
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    initDashboardTelemetry();
});

function initDashboardTelemetry() {
    const fpsDisplay = document.getElementById('fps-counter');
    const latencyDisplay = document.getElementById('latency-counter');
    const uptimeDisplay = document.getElementById('uptime-counter');

    if (!fpsDisplay && !latencyDisplay && !uptimeDisplay) return;

    // A. Live FPS Tracking Loop
    let lastCalledTime;
    let fps;
    
    function calculateFps() {
        if (!lastCalledTime) {
            lastCalledTime = performance.now();
            requestAnimationFrame(calculateFps);
            return;
        }
        let delta = (performance.now() - lastCalledTime) / 1000;
        lastCalledTime = performance.now();
        fps = Math.round(1 / delta);
        
        // Stabilize visual display variance slightly
        if (fpsDisplay && Math.random() < 0.15) {
            fpsDisplay.innerText = (fps > 60 ? 60 : fps).toFixed(1);
        }
        requestAnimationFrame(calculateFps);
    }
    requestAnimationFrame(calculateFps);

    // B. Live Micro Render Latency Fluctuations
    if (latencyDisplay) {
        setInterval(() => {
            const randomLatency = (0.01 + Math.random() * 0.04).toFixed(2);
            latencyDisplay.innerText = `${randomLatency}ms`;
        }, 1200);
    }

    // C. Core Runtime Session Uptime Counter
    if (uptimeDisplay) {
        let absoluteSeconds = 0;
        setInterval(() => {
            absoluteSeconds++;
            const minutes = Math.floor(absoluteSeconds / 60).toString().padStart(2, '0');
            const seconds = (absoluteSeconds % 60).toString().padStart(2, '0');
            uptimeDisplay.innerText = `${minutes}:${seconds}`;
        }, 1000);
    }
}
