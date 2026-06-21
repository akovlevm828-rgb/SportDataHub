// ==========================================
//  CALCULATOR — порівняння результату користувача зі світовим рекордом
// ==========================================

import { calcEvents } from './data.js';

export function initCalculator() {
    const eventSelect = document.getElementById('calcEvent');
    const genderSelect = document.getElementById('calcGender');
    const valueInput = document.getElementById('calcValue');
    const valueLabel = document.getElementById('calcValueLabel');
    const btn = document.getElementById('calcBtn');

    // Заповнюємо список дисциплін
    eventSelect.innerHTML = calcEvents.map(e => `<option value="${e.id}">${e.label}</option>`).join('');

    function updateLabel() {
        const ev = calcEvents.find(e => e.id === eventSelect.value);
        valueLabel.textContent = ev.type === 'time' ? 'Твій час (секунди)' : 'Твій результат (метри)';
        valueInput.placeholder = ev.type === 'time' ? 'напр. 13.5' : 'напр. 5.20';
    }
    eventSelect.addEventListener('change', updateLabel);
    updateLabel();

    btn.addEventListener('click', () => {
        const ev = calcEvents.find(e => e.id === eventSelect.value);
        const gender = genderSelect.value;
        const wr = ev[gender];
        const userVal = parseFloat(valueInput.value);

        if (isNaN(userVal) || userVal <= 0) {
            alert('Введи свій результат, будь ласка.');
            return;
        }

        runRace(ev, wr, userVal);
    });
}

function runRace(ev, wr, userVal) {
    const laneRace = document.getElementById('laneRace');
    const wrFill = document.getElementById('wrFill');
    const userFill = document.getElementById('userFill');
    const wrLabel = document.getElementById('wrValueLabel');
    const userLabel = document.getElementById('userValueLabel');
    const resultText = document.getElementById('calcResultText');

    laneRace.style.display = 'table';

    let ratio; // % близькості до рекорду
    if (ev.type === 'time') {
        ratio = (wr / userVal) * 100;
        wrLabel.textContent = `${wr}с`;
        userLabel.textContent = `${userVal}с`;
    } else {
        ratio = (userVal / wr) * 100;
        wrLabel.textContent = `${wr}м`;
        userLabel.textContent = `${userVal}м`;
    }

    const cappedRatio = Math.min(ratio, 100);

    // Анімація заповнення доріжок
    wrFill.style.width = '0%';
    userFill.style.width = '0%';
    requestAnimationFrame(() => {
        setTimeout(() => {
            wrFill.style.width = '100%';
            userFill.style.width = `${cappedRatio}%`;
        }, 50);
    });

    // Текст результату
    if (ratio >= 100) {
        resultText.textContent = `🤯 Це було б новим світовим рекордом! Перевір введені дані — або ти справді неймовірний атлет.`;
    } else if (ratio >= 95) {
        resultText.textContent = `Неймовірно! Твій результат — ${ratio.toFixed(1)}% від світового рекорду. Ти на рівні топових професіоналів.`;
    } else if (ratio >= 80) {
        resultText.textContent = `Дуже сильно! Твій результат — ${ratio.toFixed(1)}% від світового рекорду — рівень серйозних спортсменів.`;
    } else if (ratio >= 60) {
        resultText.textContent = `Непогано! Твій результат — ${ratio.toFixed(1)}% від світового рекорду. Є простір для росту.`;
    } else {
        resultText.textContent = `Твій результат — ${ratio.toFixed(1)}% від світового рекорду. Памʼятай: рекорди тримаються роками саме тому, що це межа людських можливостей.`;
    }
}
