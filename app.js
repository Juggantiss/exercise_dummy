function llenar(data) {
  $("#table_id").DataTable({
    destroy: true,
    searching: false,
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
}
