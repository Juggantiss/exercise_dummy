var datos = [];
$(document).ready(function (e) {
  // $.getJSON("data.json", function (data) {
  //   datos = data.slice();
  //   llenar(data);
  // });
  datos = data.slice();
  llenar(data);
});
// Metodos de pago
$("#allmethod").click(function () {
  var check = $("#allmethod").is(":checked");
  if (check) {
    $("#debit").prop("checked", false);
    $("#credit").prop("checked", false);
    llenar(datos);
  }
});
$("#credit").click(function () {
  var check = $("#credit").is(":checked");
  if (check) {
    $("#debit").prop("checked", false);
    $("#allmethod").prop("checked", false);
    const newData = datos.filter((element) => element.mediopago === "CREDIT");
    llenar(newData);
  } else {
    $("#allmethod").prop("checked", true);
    llenar(datos);
  }
});
$("#debit").click(function () {
  var check = $("#debit").is(":checked");
  if (check) {
    $("#credit").prop("checked", false);
    $("#allmethod").prop("checked", false);
    const newData = datos.filter((element) => element.mediopago === "DEBIT");
    llenar(newData);
  } else {
    $("#allmethod").prop("checked", true);
    llenar(datos);
  }
});
// Estatus
$("#allstatus").click(function () {
  var check = $("#allstatus").is(":checked");
  if (check) {
    $("#success").prop("checked", false);
    $("#fail").prop("checked", false);
    llenar(datos);
  }
});
$("#success").click(function () {
  var check = $("#success").is(":checked");
  if (check) {
    $("#fail").prop("checked", false);
    $("#allstatus").prop("checked", false);
    const newData = datos.filter((element) => element.estatus === "EXITOSO");
    llenar(newData);
  } else {
    $("#allstatus").prop("checked", true);
    llenar(datos);
  }
});
$("#fail").click(function () {
  var check = $("#fail").is(":checked");
  if (check) {
    $("#success").prop("checked", false);
    $("#allstatus").prop("checked", false);
    const newData = datos.filter((element) => element.mediopago === "FALLIDO");
    llenar(newData);
  } else {
    $("#allstatus").prop("checked", true);
    llenar(datos);
  }
});
// Emisor
$("#allemisor").click(function () {
  var check = $("#allemisor").is(":checked");
  if (check) {
    $("#carnet").prop("checked", false);
    $("#mastercard").prop("checked", false);
    $("#visa").prop("checked", false);
    $("#americanex").prop("checked", false);
    llenar(datos);
  }
});
$("#carnet").click(function () {
  var check = $("#carnet").is(":checked");
  if (check) {
    $("#mastercard").prop("checked", false);
    $("#visa").prop("checked", false);
    $("#americanex").prop("checked", false);
    $("#allemisor").prop("checked", false);
    const newData = datos.filter((element) => element.emisor === "CARNET");
    llenar(newData);
  } else {
    $("#allemisor").prop("checked", true);
    llenar(datos);
  }
});
$("#mastercard").click(function () {
  var check = $("#mastercard").is(":checked");
  if (check) {
    $("#carnet").prop("checked", false);
    $("#visa").prop("checked", false);
    $("#americanex").prop("checked", false);
    $("#allemisor").prop("checked", false);
    const newData = datos.filter((element) => element.emisor === "MASTER CARD");
    llenar(newData);
  } else {
    $("#allemisor").prop("checked", true);
    llenar(datos);
  }
});
$("#visa").click(function () {
  var check = $("#visa").is(":checked");
  if (check) {
    $("#carnet").prop("checked", false);
    $("#mastercard").prop("checked", false);
    $("#americanex").prop("checked", false);
    $("#allemisor").prop("checked", false);
    const newData = datos.filter((element) => element.emisor === "VISA");
    llenar(newData);
  } else {
    $("#allemisor").prop("checked", true);
    llenar(datos);
  }
});
$("#americanex").click(function () {
  var check = $("#americanex").is(":checked");
  if (check) {
    $("#carnet").prop("checked", false);
    $("#visa").prop("checked", false);
    $("#mastercard").prop("checked", false);
    $("#allemisor").prop("checked", false);
    const newData = datos.filter(
      (element) => element.emisor === "AMERICAN EXPRESS"
    );
    llenar(newData);
  } else {
    $("#allemisor").prop("checked", true);
    llenar(datos);
  }
});
// Tipo de Evento
$("#alltypeev").click(function () {
  var check = $("#alltypeev").is(":checked");
  if (check) {
    $("#previ").prop("checked", false);
    $("#srpago").prop("checked", false);
    $("#billpocket").prop("checked", false);
    llenar(datos);
  }
});
$("#previ").click(function () {
  var check = $("#previ").is(":checked");
  if (check) {
    $("#srpago").prop("checked", false);
    $("#billpocket").prop("checked", false);
    $("#alltypeev").prop("checked", false);
    const newData = datos.filter(
      (element) => element.tipoevento === "PREVIVALE_RETIRO"
    );
    llenar(newData);
  } else {
    $("#alltypeev").prop("checked", true);
    llenar(datos);
  }
});
$("#srpago").click(function () {
  var check = $("#srpago").is(":checked");
  if (check) {
    $("#previ").prop("checked", false);
    $("#billpocket").prop("checked", false);
    $("#alltypeev").prop("checked", false);
    const newData = datos.filter((element) => element.tipoevento === "SRPAGO");
    llenar(newData);
  } else {
    $("#alltypeev").prop("checked", true);
    llenar(datos);
  }
});
$("#billpocket").click(function () {
  var check = $("#billpocket").is(":checked");
  if (check) {
    $("#previ").prop("checked", false);
    $("#srpago").prop("checked", false);
    $("#alltypeev").prop("checked", false);
    const newData = datos.filter(
      (element) => element.tipoevento === "BILLPOCKET_CHECKOUT"
    );
    llenar(newData);
  } else {
    $("#alltypeev").prop("checked", true);
    llenar(datos);
  }
});
// Años
$("#allyear").click(function () {
  var check = $("#allyear").is(":checked");
  if (check) {
    $("#year2021").prop("checked", false);
    $("#year2020").prop("checked", false);
    llenar(datos);
  }
});
$("#year2020").click(function () {
  var check = $("#year2020").is(":checked");
  if (check) {
    $("#year2021").prop("checked", false);
    $("#allyear").prop("checked", false);
    const newData = datos.filter(
      (element) => element.fecha.substr(-7, 2) === "20"
    );
    llenar(newData);
  } else {
    $("#allyear").prop("checked", true);
    llenar(datos);
  }
});
$("#year2021").click(function () {
  var check = $("#year2021").is(":checked");
  if (check) {
    $("#year2020").prop("checked", false);
    $("#allyear").prop("checked", false);
    const newData = datos.filter(
      (element) => element.fecha.substr(-7, 2) === "21"
    );
    llenar(newData);
  } else {
    $("#allyear").prop("checked", true);
    llenar(datos);
  }
});
// Meses
$("#allmonth").click(function () {
  var check = $("#allmonth").is(":checked");
  if (check) {
    $("#january").prop("checked", false);
    $("#february").prop("checked", false);
    llenar(datos);
  }
});
$("#january").click(function () {
  var check = $("#january").is(":checked");
  if (check) {
    $("#february").prop("checked", false);
    $("#allmonth").prop("checked", false);
    const newData = datos.filter(
      (element) => element.fecha.substr(-9, 1) === "1"
    );
    llenar(newData);
  } else {
    $("#allmonth").prop("checked", true);
    llenar(datos);
  }
});
$("#february").click(function () {
  var check = $("#february").is(":checked");
  if (check) {
    $("#january").prop("checked", false);
    $("#allmonth").prop("checked", false);
    const newData = datos.filter(
      (element) => element.fecha.substr(-9, 1) === "2"
    );
    llenar(newData);
  } else {
    $("#allmonth").prop("checked", true);
    llenar(datos);
  }
});
// $("input:checkbox:checked").each(function () {
//   console.log($(this)[0].id);
// });
function llenar(data) {
  var table = $("#table_id").DataTable({
    destroy: true,
    initComplete: function () {
      var api = this.api();
      api.$("td").click(function () {
        api.search(this.innerHTML).draw();
      });
    },
    info: false,
    data: data,
    columns: [
      {
        title: "Fecha",
        data: "fecha",
      },
      {
        title: "Tipo Evento",
        data: "tipoevento",
      },
      {
        title: "Medio Pago",
        data: "mediopago",
      },
      {
        title: "Emisor",
        data: "emisor",
      },
      {
        title: "Tarjeta",
        data: "tarjeta",
      },
      {
        title: "Estatus",
        data: "estatus",
      },
      {
        title: "Cuenta",
        data: "cuenta",
      },
      {
        title: "Monto",
        data: "montodb",
      },
      {
        title: "Comision",
        data: "comisiondb",
      },
      {
        title: "Total",
        data: "total",
      },
    ],
  });

  $("#table_id thead tr").clone(true).appendTo("#table_id thead");
  $("#table_id thead tr:eq(1) th").each(function (i) {
    var title = $(this).text();
    $(this).html('<input type="text" placeholder="Buscar ' + title + '"/>');
    $("input", this).on("keyup change", function () {
      if (table.columns(i).search() !== this.value) {
        table.column(i).search(this.value).draw();
      }
    });
  });
}
