// Theme handling
function setTheme(theme) {
    if (theme === 'system') {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', systemTheme);
    } else {
        document.documentElement.setAttribute('data-theme', theme);
    }
    localStorage.setItem('theme', theme);
}

// Theme
const savedTheme = localStorage.getItem('theme') || 'system';
document.getElementById('themeSelect').value = savedTheme;
setTheme(savedTheme);

// Theme change listener
document.getElementById('themeSelect').addEventListener('change', (e) => {
    setTheme(e.target.value);
});

// System theme change listener
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (localStorage.getItem('theme') === 'system') {
        setTheme('system');
    }
});

// Mobile stuff
const hamburger = document.querySelector('.hamburger');
const navItems = document.querySelector('.nav-items');

hamburger.addEventListener('click', () => {
    navItems.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Mobile menu
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navItems.contains(e.target)) {
        navItems.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Smooth scroll
document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const navbarHeight = document.querySelector('.nav-bar').offsetHeight;
        const targetPosition = targetElement.offsetTop - navbarHeight - 20;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });

        navItems.classList.remove('active');
        hamburger.classList.remove('active');
    });
});