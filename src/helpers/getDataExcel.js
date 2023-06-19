import React from "react";

export const getDataExcel = (data) => {
  data.forEach((item) => {
    item.Codigo = item.code;
    delete item.code;

    item.Cantidad = item.amount;
    delete item.amount;

    item.Transporte = item.transport;
    delete item.transport;

    item.Trayecto = item.journey;
    delete item.journey;

    item.Cliente = item.customer;
    delete item.customer;

    item.Mensajero = item.messenger;
    delete item.messenger;

    item.Estado = item.status;
    delete item.status;
  });
  return data;
};
