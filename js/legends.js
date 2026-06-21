// ==========================================
//  LEGENDS — рендеринг карток легендарних атлетів
// ==========================================

import { legends } from './data.js';

export function initLegends() {
    const grid = document.getElementById('legendsGrid');

    grid.innerHTML = legends.map(l => `
        <li>
            <article class="legend-card">
                <header>
                    <span class="legend-icon"><i class="fa-solid ${l.icon}"></i></span>
                    <h3>${l.name}</h3>
                    <p class="legend-meta">${l.country} · ${l.years}</p>
                </header>
                <p class="legend-stat">${l.stat}</p>
                <p>${l.bio}</p>
            </article>
        </li>
    `).join('');
}
