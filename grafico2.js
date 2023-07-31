document.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById('grafico_linha').getContext('2d');

  Chart.defaults.borderColor = '#fff';
  Chart.defaults.color = '#fff';
  Chart.defaults.font.size = 26;
  Chart.defaults.font.family = 'sans-serif';
  Chart.defaults.font.weight = 'bold';

  const labels = ['2017', '2018', '2019', '2020', '2021', '2022'];
  const data = {
      labels,
      datasets: [{
          data: [56, 78, 62, 89, 95, 84],
          label: 'Pessoas em condição análoga à de escravo no Maranhão',
          fill: false,
          backgroundColor: 'cornflowerblue',
          borderColor: '#00f',
          borderWidth: 3,
          tension: 0.2
      }],
  };

  const config = {
      type: 'line',
      data,
      options: {
          scales: {
            y: {
              beginAtZero: true
            }
          },
          color: 'white',
          pointBackgroundColor: 'black',
          pointBorderColor: 'black',
      },
  }

  const graph = new Chart(ctx, config);
});
