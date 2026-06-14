import { updateChartByTab } from './dashboard.js';

const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();

        menuItems.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        const buttonText = this.textContent.trim();
        
        updateChartByTab(buttonText);
    });
});

const footerLinks = document.querySelectorAll('.footer-links a');

footerLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        const linkText = this.textContent.trim();
        
        alert(`🤖 Розділ "${linkText}" зараз у розробці.\nДякуємо, що тестуєте SportDataHub!`);
    });
});