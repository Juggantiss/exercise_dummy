$(document).ready(function (e) {
  dibujarGrafica();
});

function dibujarGrafica() {
  const { labels, datasets, colors } = llenarArrays(data);
  const ctx = document.getElementById("myChart").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          label: "Uso de los tipos de emisores",
          data: datasets,
          backgroundColor: colors,
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      responsive: true,
      maintainAspectRatio: false,
    },
  });
}

function llenarArrays(data) {
  var labels = [];
  var datasets = [];
  var colors = [];
  data.forEach((element) => {
    if (!labels.includes(element.emisor)) {
      labels.push(element.emisor);
      colors.push(colorRGB());
      datasets = [
        ...datasets,
        {
          x: element.emisor,
          y: obtenerCantidad(element.emisor, data),
        },
      ];
    }
  });
  return { labels, datasets, colors };
}

function obtenerCantidad(elem, data) {
  const cantidad = data.filter((element) => element.emisor === elem);
  return cantidad.length;
}

function generarNumero(numero) {
  return (Math.random() * numero).toFixed(0);
}

function colorRGB() {
  var coolor =
    "(" +
    generarNumero(255) +
    "," +
    generarNumero(255) +
    "," +
    generarNumero(255) +
    ")";
  return "rgb" + coolor;
}
