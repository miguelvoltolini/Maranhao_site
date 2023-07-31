document.addEventListener('DOMContentLoaded', function() {
    let ctx = document.getElementById('grafico_barras').getContext('2d');
  
    Chart.defaults.borderColor = '#fff';
    Chart.defaults.color = '#fff';
    Chart.defaults.font.size = 26;
    Chart.defaults.font.family = 'sans-serif';
    Chart.defaults.font.weight = 'bold';
  
    // Dados do gráfico (substituição)
    const labels = ['2017', '2018', '2019', '2020', '2021', '2022'];
    const data = {
        labels,
        datasets: [{
            data: [15, 21, 18, 25, 28, 24],
            label: 'Histórico das Notificações de Violência no Maranhão',
            backgroundColor: 'darkblue',
            borderColor: '#fff',
            borderWidth: 3

        }],
    };
  
    const config = {
        type: 'bar',
        data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };
  
    // Criar a instância do gráfico
    const myChart = new Chart(ctx, config);
  });
  