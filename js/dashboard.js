const sportsData = {
    dashboard: {
        labels: ['0м', '20м', '40м', '60м', '80м', '100м'],
        label: 'Графік розгону Усейна Болта (м/с)',
        data: [0, 8.5, 11.2, 12.1, 11.8, 11.5],
        borderColor: '#ff4757',
        backgroundColor: 'rgba(255, 71, 87, 0.05)'
    },
    sprint: {
        labels: ['0м', '10м', '20м', '30м', '40м', '50м', '60м'],
        label: 'Середній розгін у спринті на 60м (м/с)',
        data: [0, 7.2, 9.6, 10.5, 10.9, 11.1, 11.0],
        borderColor: '#ffa502',
        backgroundColor: 'rgba(255, 165, 2, 0.05)'
    },
    jumps: {
        labels: ['Старт', '5-й крок', '10-й крок', 'Поштовх'],
        label: 'Швидкість розбігу перед стрибком у довжину (м/с)',
        data: [3.5, 6.8, 9.4, 10.2],
        borderColor: '#2ed573',
        backgroundColor: 'rgba(46, 213, 115, 0.05)'
    }
};

const canvas = document.getElementById('speedchart');
const ctx = canvas.getContext('2d');

let speedChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: sportsData.dashboard.labels,
        datasets: [{
            label: sportsData.dashboard.label,
            data: sportsData.dashboard.data,
            borderColor: sportsData.dashboard.borderColor,
            backgroundColor: sportsData.dashboard.backgroundColor,
            borderWidth: 3,
            tension: 0.4,
            fill: true,
            pointRadius: 5,
            pointBackgroundColor: '#ffffff'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                max: 15,
                grid: { color: '#292930' },
                ticks: { color: '#a4b0be' }
            },
            x: {
                grid: { color: '#292930' },
                ticks: { color: '#a4b0be' }
            }
        },
        plugins: {
            legend: {
                labels: { color: '#ffffff', font: { size: 14 } }
            }
        },
        animation: {
            duration: 900,
            easing: 'easeInOutQuart'
        }
    }
});

export function updateChartByTab(buttonText) {
    let selectedData;

    if (buttonText.includes('Дашборд')) {
        selectedData = sportsData.dashboard;
    } else if (buttonText.includes('Спринт')) {
        selectedData = sportsData.sprint;
    } else if (buttonText.includes('Стрибки')) {
        selectedData = sportsData.jumps;
    }

    if (selectedData) {
        speedChart.data.labels = selectedData.labels;
        speedChart.data.datasets[0].label = selectedData.label;
        speedChart.data.datasets[0].data = selectedData.data;
        speedChart.data.datasets[0].borderColor = selectedData.borderColor;
        speedChart.data.datasets[0].backgroundColor = selectedData.backgroundColor;
        
        speedChart.update(); // Перемальовуємо графік
    }
}