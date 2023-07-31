// Dados para o primeiro par de gráficos (Comparação de Resgates por Gênero)
const dataResgateMulheres = {
    labels: ['2017', '2018', '2019', '2020', '2021', '2022'],
    datasets: [
        {
            label: 'Mulheres',
            data: [154, 189, 216, 198, 245, 267],
            backgroundColor: 'rgba(255, 99, 132, 0.7)',
        }
    ]
};

const dataResgateHomens = {
    labels: ['2017', '2018', '2019', '2020', '2021', '2022'],
    datasets: [
        {
            label: 'Homens',
            data: [135, 159, 181, 162, 208, 230],
            backgroundColor: 'rgba(54, 162, 235, 0.7)',
        }
    ]
};

// Dados para o segundo par de gráficos (Comparação de Resgates por Faixa Etária)
const dataResgateFaixaEtariaMulheres = {
    labels: ['18-24', '25-30', '31-40', '41-50', '51-60'],
    datasets: [
        {
            label: 'Mulheres',
            data: [52, 75, 98, 80, 95],
            backgroundColor: 'rgba(255, 99, 132, 0.7)',
        }
    ]
};

const dataResgateFaixaEtariaHomens = {
    labels: ['18-24', '25-30', '31-40', '41-50', '51-60'],
    datasets: [
        {
            label: 'Homens',
            data: [45, 65, 80, 70, 85],
            backgroundColor: 'rgba(54, 162, 235, 0.7)',
        }
    ]
};

// Dados para o terceiro par de gráficos (Comparação de Resgates por Etnia)
const dataResgateEtniaMulheres = {
    labels: ['Branco', 'Negro', 'Indígena', 'Pardo', 'Outros'],
    datasets: [
        {
            label: 'Mulheres',
            data: [32, 42, 8, 10, 5],
            backgroundColor: ['rgba(255, 99, 132, 0.7)', 'rgba(54, 162, 235, 0.7)', 'rgba(75, 192, 192, 0.7)', 'rgba(165, 42, 42, 0.7)', 'rgba(153, 102, 255, 0.7)'],
        }
    ]
};

const dataResgateEtniaHomens = {
    labels: ['Branco', 'Negro', 'Indígena', 'Pardo', 'Outros'],
    datasets: [
        {
            label: 'Homens',
            data: [28, 38, 10, 15, 6],
            backgroundColor: ['rgba(54, 162, 235, 0.7)','rgba(255, 99, 132, 0.7)', 'rgba(54, 162, 235, 0.7)', 'rgba(75, 192, 192, 0.7)', 'rgba(165, 42, 42, 0.7)', 'rgba(153, 102, 255, 0.7)'],
        }
    ]
};

// Dados para o quarto par de gráficos (Comparação de Maiores Trabalhos Feitos por Escravos)
const dataMaioresTrabalhosEscravosMulheres = {
    labels: ['Agricultura', 'Mineração', 'Construção', 'Tecelagem', 'Artesanato'],
    datasets: [
        {
            label: 'Mulheres',
            data: [310, 258, 194, 240, 198],
            backgroundColor: 'rgba(255, 99, 132, 0.7)',
        }
    ]
};

const dataMaioresTrabalhosEscravosHomens = {
    labels: ['Agricultura', 'Mineração', 'Construção', 'Tecelagem', 'Artesanato'],
    datasets: [
        {
            label: 'Homens',
            data: [356, 312, 245, 280, 220],
            backgroundColor: 'rgba(54, 162, 235, 0.7)',
        }
    ]
};

// Configurações dos gráficos
const configResgateMulheres = {
    type: 'bar',
    data: dataResgateMulheres,
};

const configResgateHomens = {
    type: 'bar',
    data: dataResgateHomens,
};

const configResgateFaixaEtariaMulheres = {
    type: 'bar',
    data: dataResgateFaixaEtariaMulheres,
};

const configResgateFaixaEtariaHomens = {
    type: 'bar',
    data: dataResgateFaixaEtariaHomens,
};

const configResgateEtniaMulheres = {
    type: 'bar',
    data: dataResgateEtniaMulheres,
};

const configResgateEtniaHomens = {
    type: 'bar',
    data: dataResgateEtniaHomens,
};

const configMaioresTrabalhosEscravosMulheres = {
    type: 'bar',
    data: dataMaioresTrabalhosEscravosMulheres,
};

const configMaioresTrabalhosEscravosHomens = {
    type: 'bar',
    data: dataMaioresTrabalhosEscravosHomens,
};

// Criação das instâncias dos gráficos
new Chart(document.getElementById('graficoResgateMulheres'), configResgateMulheres);
new Chart(document.getElementById('graficoResgateHomens'), configResgateHomens);
new Chart(document.getElementById('graficoResgateFaixaEtariaMulheres'), configResgateFaixaEtariaMulheres);
new Chart(document.getElementById('graficoResgateFaixaEtariaHomens'), configResgateFaixaEtariaHomens);
new Chart(document.getElementById('graficoResgateEtniaMulheres'), configResgateEtniaMulheres);
new Chart(document.getElementById('graficoResgateEtniaHomens'), configResgateEtniaHomens);
new Chart(document.getElementById('graficoMaioresTrabalhosEscravosMulheres'), configMaioresTrabalhosEscravosMulheres);
new Chart(document.getElementById('graficoMaioresTrabalhosEscravosHomens'), configMaioresTrabalhosEscravosHomens);
