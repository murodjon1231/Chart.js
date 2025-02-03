// import Chart from 'chart.js/auto';

let ctx1 = document.getElementById('lineChart').getContext('2d');
new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
            label: 'Sales',
            data: [10, 20, 15, 25, 30, 40, 50],
            borderColor: 'blue',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: { beginAtZero: true }
        }
    }
});

let ctx2 = document.getElementById('barChart').getContext('2d');
new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple', 'orange']
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: { beginAtZero: true }
        }
    }
});

let ctx3 = document.getElementById('pieChart').getContext('2d');
new Chart(ctx3, {
    type: 'pie',
    data: {
        labels: ['Apple', 'Samsung', 'Huawei', 'Xiaomi'],
        datasets: [{
            label: 'Market Share',
            data: [30, 25, 20, 25],
            backgroundColor: ['red', 'blue', 'yellow', 'green']
        }]
    },
    options: {
        responsive: true
    }
});

let ctx4 = document.getElementById('pieChart1').getContext('2d');
new Chart(ctx4, {
    type: 'radar',
    data: {
        labels: ['Apple', 'Samsung', 'Huawei', 'Xiaomi'],
        datasets: [{
            label: 'Market Share',
            data: [30, 25, 20, 25],
            backgroundColor: ['red', 'blue', 'yellow', 'green']
        }]
    },
    options: {
        responsive: true
    }
});

let ctx5 = document.getElementById('pieChart2').getContext('2d');
new Chart(ctx5, {
    type: 'doughnut', // 'bar', 'line', 'pie', 'doughnut', 'radar', etc.
    data: {
        labels: ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun'],
        datasets: [
            {
                label: 'Sales',
                data: [12, 19, 3, 5, 2, 7],
                backgroundColor: ['rgba(75, 192, 192, 0.6)', 'red', 'aqua', 'orange', 'blue'],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
})


let ctx6 = document.getElementById('pieChart3').getContext('2d');
new Chart(ctx6, {
    type: 'polarArea', // 'bar', 'line', 'pie', 'polarArea', 'doughnut', etc.
    data: {
        labels: ['Apple', 'Samsung', 'Huawei', 'Xiaomi'],
        datasets: [
            {
                label: 'Market Share',
                data: [30, 25, 20, 25],
                backgroundColor: ['rgba(75, 192, 192, 0.6)', 'red', 'aqua', 'orange'],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
            tooltip: {
                enabled: true,
                mode: 'index',
                intersect: false,
            },
            title: {
                display: true,
                text: 'Market Share',
            },
        },
    },
    scales: {
        y: {
            beginAtZero: true,
        },
    },
},
)