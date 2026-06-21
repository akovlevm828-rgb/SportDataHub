// ==========================================
//  NAV — мобільне меню, активна доріжка при скролі
// ==========================================

export function initNav() {
    const toggle = document.getElementById('navToggle');
    const nav = document.getElementById('mainNav');

    toggle.addEventListener('click', () => {
        nav.classList.toggle('open');
    });

    // Закривати меню після кліку на пункт (мобільні)
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => nav.classList.remove('open'));
    });
}
