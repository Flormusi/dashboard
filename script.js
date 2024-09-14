const ctxSales = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(ctxSales, {
    type: 'line',
    data: {
        labels: ['Abr 2023', 'May 2023', 'Jun 2023', 'Jul 2023', 'Ago 2023', 'Sep 2023', 'Oct 2023', 'Nov 2023', 'Dec 2023', 'Ene 2024'],
        datasets: [
            {
                label: 'Total Revenue',
                data: [50345.67, 48000, 52000, 53000, 55000, 57000, 60000, 62000, 65000, 67820],
                borderColor: 'blue',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
                pointRadius: 5,
                pointHoverRadius: 7,
                tension: 0.3,
            },
            {
                label: 'Total Target',
                data: [70321.45, 70000, 70000, 70000, 70000, 70000, 70000, 70000, 70000, 70000],
                borderColor: 'orange',
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                fill: true,
                pointRadius: 5,
                pointHoverRadius: 7,
                tension: 0.3,
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Valor en USD'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Meses'
                }
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return `${tooltipItem.dataset.label}: $${tooltipItem.raw.toFixed(2)}`;
                    }
                }
            },
            legend: {
                display: true,
                position: 'top',
            }
        }
    }
});

// Gráfico de Sales by Region
const ctxRegion = document.getElementById('regionChart').getContext('2d');
const regionChart = new Chart(ctxRegion, {
    type: 'radar',
    data: {
        labels: ['Asia', 'Europe', 'Americans', 'Pacific', 'Middle Est', 'Africa'],
        datasets: [{
            label: 'Sales by Region',
            data: [2201, 2865, 1762, 2475, 1749, 1591],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            pointBackgroundColor: 'rgba(75, 192, 192, 1)',
            pointBorderColor: '#fff',
        }]
    },
    options: {
        elements: {
            line: {
                tension: 0.3 // Suaviza la línea
            }
        },
        scales: {
            r: {
                beginAtZero: true
            }
        }
    }
});