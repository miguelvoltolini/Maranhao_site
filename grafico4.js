let ctx = document.getElementById('grafico_radar');

Chart.defaults.borderColor = '#fff';
Chart.defaults.color = '#fff';
Chart.defaults.font.family = 'sans-serif';

const labels = ['Criação de Bovinos', 'Produção Florestal', 'Cultivo de Cana', 'Produção de Ferro-gusa', 'Cultivo de Cereais', 'Extração de Minérios'];

const data = {
    labels,
    datasets: [{
        data: [3610, 0, 0, 0, 0, 0], // Substituição dos dados da pesquisa no Maranhão
        label: 'Maiores trabalhos feitos por escravo no Maranhão',
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(221, 224, 8)',
          'rgb(194, 91, 155)',
          'rgb(100, 149, 119)'
        ],
        borderWidth: 3
    }],
};

const config = {
    type: 'polarArea',
    data,
    options: {
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    font: {
                        size: 20,
                        family: 'Arial, sans-serif',
                    }
                }
            }
        }
    }
};

new Chart(ctx, config); // Adição do comando para criar o gráfico
