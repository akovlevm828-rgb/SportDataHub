import { initStopwatch } from './hero.js';
import { initNav } from './nav.js';
import { initRecords } from './records.js';
import { initProgressChart } from './chart.js';
import { initCalculator } from './calculator.js';
import { initLegends } from './legends.js';

document.addEventListener('DOMContentLoaded', () => {
    const tasks = [
        ['секундомір', initStopwatch],
        ['навігація', initNav],
        ['рекорди', initRecords],
        ['графік прогресу', initProgressChart],
        ['калькулятор', initCalculator],
        ['легенди', initLegends],
    ];

    tasks.forEach(([name, fn]) => {
        try {
            fn();
        } catch (err) {
            console.error(`Не вдалося ініціалізувати "${name}":`, err);
        }
    });
});
