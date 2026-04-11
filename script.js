// Scroll suau per als enllaços de la navegació
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efecte de parpelleig al cursor del logo
const logo = document.querySelector('.logo span');
setInterval(() => {
    logo.style.opacity = logo.style.opacity == 0 ? 1 : 0;
}, 600);

// Animació bàsica d'aparició en fer scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 400;
        if (top >= offset) {
            sec.style.transition = "1s";
            sec.style.opacity = "1";
            sec.style.transform = "translateY(0)";
        }
    });
});
