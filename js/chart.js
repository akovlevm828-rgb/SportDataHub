import { progression100m } from './data.js';

export function initProgressChart() {
    const canvas = document.getElementById('progressChart');
    const ctx = canvas.getContext('2d');

    const existing = Chart.getChart(canvas);
    if (existing) existing.destroy();

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: progression100m.map(p => p.year),
            datasets: [{
                label: 'Світовий рекорд 100м (с)',
                data: progression100m.map(p => p.time),
                borderColor: '#ffb238',
                backgroundColor: 'rgba(255, 178, 56, 0.08)',
                borderWidth: 3,
                tension: 0.3,
                fill: true,
                pointRadius: 5,
                pointBackgroundColor: '#0b0c0e',
                pointBorderColor: '#ffb238',
                pointBorderWidth: 2,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                y: {
                    reverse: false,
                    min: 9.4,
                    max: 10.0,
                    title: {
                        display: true,
                        text: 'Час (секунди)',
                        color: '#8b9098',
                    },
                    grid: { color: '#26292d' },
                    ticks: { color: '#8b9098' },
                },
                x: {
                    grid: { color: '#26292d' },
                    ticks: { color: '#8b9098' },
                }
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: '#15171a',
                    borderColor: '#26292d',
                    borderWidth: 1,
                    callbacks: {
                        label: (item) => {
                            const p = progression100m[item.dataIndex];
                            return `${p.time}с — ${p.athlete}`;
                        }
                    }
                }
            },
            animation: { duration: 900, easing: 'easeInOutQuart' }
        }
    });
}
