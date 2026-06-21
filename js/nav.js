export function initNav() {
    const toggle = document.getElementById('navToggle');
    const nav = document.getElementById('mainNav');

    toggle.addEventListener('click', () => {
        nav.classList.toggle('open');
    });

    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => nav.classList.remove('open'));
    });
}
