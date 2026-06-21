// ==========================================
//  RECORDS — фільтрація та рендеринг карток рекордів
// ==========================================

import { records } from './data.js';

let currentGender = 'men';
let currentCategory = 'sprint';

export function initRecords() {
    const grid = document.getElementById('recordsGrid');
    const genderToggle = document.getElementById('genderToggle');
    const categoryTabs = document.getElementById('categoryTabs');

    genderToggle.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            genderToggle.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentGender = btn.dataset.gender;
            render(grid);
        });
    });

    categoryTabs.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            categoryTabs.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.cat;
            render(grid);
        });
    });

    render(grid);
}

function render(grid) {
    const list = records[currentGender][currentCategory] || [];
    grid.innerHTML = list.map(r => `
        <li>
            <article class="record-card">
                ${r.isNew ? '<span class="new-badge">Новий!</span>' : ''}
                <h3 class="event-name">${r.event}</h3>
                <span class="perf">${r.perf}</span><span class="perf-unit">${r.unit}</span>
                <footer class="athlete-row">
                    <span>${r.country} ${r.athlete}</span>
                    <span class="year">${r.year}</span>
                </footer>
            </article>
        </li>
    `).join('');
}
