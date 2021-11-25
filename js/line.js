$(document).ready(function (e) {
  var datos = [
    { x: "10/1/21", y: 0 },
    { x: "9/1/21", y: 0 },
    { x: "11/1/21", y: 0 },
    { x: "8/1/21", y: 0 },
    { x: "2/1/21", y: 0 },
    { x: "1/1/21", y: 0 },
  ];
  var total11 = 0;
  var total10 = 0;
  var total9 = 0;
  var total8 = 0;
  var total2 = 0;
  var total1 = 0;
  data.forEach((element) => {
    if (element.fecha.substr(0, 7).replace(" ", "") === "11/1/21") {
      total11 += Number(element.total);
      datos.splice(2, 1, { x: "11/1/21", y: total11 });
    }
    if (element.fecha.substr(0, 7).replace(" ", "") === "10/1/21") {
      total10 += Number(element.total);
      datos.splice(0, 1, { x: "10/1/21", y: total10 });
    }
    if (element.fecha.substr(0, 7).replace(" ", "") === "9/1/21") {
      total9 += Number(element.total);
      datos.splice(1, 1, { x: "9/1/21", y: total9 });
    }
    if (element.fecha.substr(0, 7).replace(" ", "") === "8/1/21") {
      total8 += Number(element.total);
      datos.splice(3, 1, { x: "8/1/21", y: total8 });
    }
    if (element.fecha.substr(0, 7).replace(" ", "") === "2/1/21") {
      total2 += Number(element.total);
      datos.splice(4, 1, { x: "2/1/21", y: total2 });
    }
    if (element.fecha.substr(0, 7).replace(" ", "") === "1/1/21") {
      total1 += Number(element.total);
      datos.splice(5, 1, { x: "1/1/21", y: total1 });
    }
  });
  const ctx = document.getElementById("myChart").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "line",
    data: {
      datasets: [
        {
          data: datos,
          label: "Ventas totales por día",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
        },
      ],
    },
  });
});
