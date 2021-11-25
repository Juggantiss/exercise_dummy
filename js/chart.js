$(document).ready(function (e) {
  dibujarGrafica("emisor");
  $("#emisor").click(function () {
    var check = $("#emisor").is(":checked");
    if (check) {
      $("#tipoevento").prop("checked", false);
      $("#mediopago").prop("checked", false);
      limpiarLienzo("Emisores");
      dibujarGrafica("emisor");
    }
  });
  $("#tipoevento").click(function () {
    var check = $("#tipoevento").is(":checked");
    if (check) {
      $("#emisor").prop("checked", false);
      $("#mediopago").prop("checked", false);
      limpiarLienzo("Tipo de evento");
      dibujarGrafica("tipoevento");
    }
  });
  $("#mediopago").click(function () {
    var check = $("#mediopago").is(":checked");
    if (check) {
      $("#emisor").prop("checked", false);
      $("#tipoevento").prop("checked", false);
      limpiarLienzo("Medios de pago");
      dibujarGrafica("mediopago");
    }
  });
});

function limpiarLienzo(text) {
  $("h2").replaceWith(`<h2>${text}</h2>`);
  $("canvas").remove();
  $("#container").append(
    `<canvas id="myChart" width="580" height="580"></canvas>`
  );
}

function dibujarGrafica(type) {
  const { labels, datasets, colors } = llenarArrays(type);
  const ctx = document.getElementById("myChart").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels,
      datasets: [
        {
          data: datasets,
          backgroundColor: colors,
        },
      ],
    },
  });
}

function llenarArrays(type) {
  var labels = [];
  var datasets = [];
  var colors = [];
  data.forEach((element) => {
    const elem =
      type === "emisor"
        ? element.emisor
        : type === "tipoevento"
        ? element.tipoevento
        : type === "mediopago" && element.mediopago;
    if (!labels.includes(elem)) {
      labels.push(elem);
      colors.push(colorRGB());
      datasets = [
        ...datasets,
        {
          id: elem,
          value: obtenerCantidad(elem, type),
        },
      ];
    }
  });
  return { labels, datasets, colors };
}

function obtenerCantidad(elem, type) {
  const cantidad = data.filter((element) =>
    type === "emisor"
      ? element.emisor === elem
      : type === "tipoevento"
      ? element.tipoevento === elem
      : type === "mediopago" && element.mediopago === elem
  );
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
