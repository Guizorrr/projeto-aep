// financeiro2.js
document.getElementById('salesForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const totalSales = parseFloat(document.getElementById('totalSales').value);
    const totalExpenses = parseFloat(document.getElementById('totalExpenses').value);
    const months = parseInt(document.getElementById('months').value);
    const averageSales = totalSales / months;
    const averageExpenses = totalExpenses / months;

    const salesData = new Array(12).fill(0).map((_, i) => (i < months ? averageSales : 0));
    const expensesData = new Array(12).fill(0).map((_, i) => (i < months ? averageExpenses : 0));

    const ctx = document.getElementById('myChart').getContext('2d');

    const data = {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [
            {
                label: 'Valor Médio de Venda por Mês',
                data: salesData,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            },
            {
                label: 'Valor Médio de Despesas por Mês',
                data: expensesData,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }
        ]
    };

    if (window.myChart instanceof Chart) {
        window.myChart.destroy();
    }

    window.myChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return 'R$ ' + value;
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        font: {
                            size: 14
                        }
                    }
                }
            }
        }   
    });

    // Display the result
    const resultDiv = document.getElementById('result');
    const difference = totalSales - totalExpenses;

    if (difference > 0) {
        resultDiv.textContent = `Lucro de: R$ ${difference.toFixed(2)}`;
        resultDiv.className = 'result lucro';
    } else {
        resultDiv.textContent = `Prejuízo de: R$ ${Math.abs(difference).toFixed(2)}`;
        resultDiv.className = 'result prejuizo';
    }

    resultDiv.style.display = 'block';
});
