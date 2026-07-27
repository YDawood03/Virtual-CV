 ========== AOS INIT ==========
AOS.init({
    duration 800,
    once true,
    offset 80,
    easing 'ease-out-cubic'
});

 ========== NAVBAR SCROLL EFFECT ==========
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () = {
    const currentScroll = window.pageYOffset;
    if (currentScroll  80) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
});

 ========== MOBILE NAV TOGGLE ==========
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () = {
    navLinks.classList.toggle('open');
    const icon = navToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

 Close nav on link click (mobile)
document.querySelectorAll('.nav-links a').forEach(link = {
    link.addEventListener('click', () = {
        navLinks.classList.remove('open');
        const icon = navToggle.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});

 ========== ACTIVE NAV LINK ON SCROLL ==========
const sections = document.querySelectorAll('section[id]');
const navLinkItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () = {
    let current = '';
    sections.forEach(section = {
        const sectionTop = section.offsetTop - 120;
        if (window.pageYOffset = sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navLinkItems.forEach(link = {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

 ========== TYPING EFFECT ==========
const typedText = document.getElementById('typed-text');
const phrases = [
    'Full-Stack Developer',
    'C# · Python · Java',
    'Teaching Assistant',
    'Problem Solver',
    'Tech Enthusiast'
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 80;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        typedText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 40;
    } else {
        typedText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 80;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typingSpeed = 2000;  Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 400;
    }

    setTimeout(typeEffect, typingSpeed);
}

typeEffect();

 ========== SKILL BAR ANIMATION ==========
const skillBars = document.querySelectorAll('.skill-progress');

function animateSkillBars() {
    skillBars.forEach(bar = {
        const rect = bar.getBoundingClientRect();
        if (rect.top  window.innerHeight - 50) {
            const width = bar.getAttribute('data-width');
            bar.style.width = width + '%';
        }
    });
}

window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);

 ========== COUNTER ANIMATION ==========
const counters = document.querySelectorAll('.stat-number');

function animateCounters() {
    counters.forEach(counter = {
        const rect = counter.getBoundingClientRect();
        if (rect.top  window.innerHeight - 50 && !counter.classList.contains('counted')) {
            counter.classList.add('counted');
            const target = parseInt(counter.getAttribute('data-count'));
            let current = 0;
            const increment = target  40;
            const duration = 1200;
            const stepTime = duration  40;

            const timer = setInterval(() = {
                current += increment;
                if (current = target) {
                    counter.textContent = target + '+';
                    clearInterval(timer);
                } else {
                    counter.textContent = Math.floor(current);
                }
            }, stepTime);
        }
    });
}

window.addEventListener('scroll', animateCounters);
window.addEventListener('load', animateCounters);

 ========== CONTACT FORM ==========
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

contactForm.addEventListener('submit', (e) = {
    e.preventDefault();
    
     Simulate sending (replace with actual form submission)
    const submitBtn = contactForm.querySelector('button[type=submit]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = 'i class=fas fa-spinner fa-spini Sending...';
    submitBtn.disabled = true;

    setTimeout(() = {
        formSuccess.classList.add('show');
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        contactForm.reset();
        
        setTimeout(() = {
            formSuccess.classList.remove('show');
        }, 5000);
    }, 1500);
});

 ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
document.querySelectorAll('a[href^=#]').forEach(anchor = {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior 'smooth',
                block 'start'
            });
        }
    });
});

 ========== KEYBOARD ACCESSIBILITY ==========
document.addEventListener('keydown', (e) = {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        const icon = navToggle.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    }
});

console.log('%c Yaseen Dawood CV ', 'background #6c63ff; color #fff; padding 10px 20px; font-size 1.5rem; font-weight bold; border-radius 8px;');
console.log('%c Built with ❤️ using HTML, CSS & JavaScript ', 'color #b0b0d0; font-size 1rem;');