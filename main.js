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
