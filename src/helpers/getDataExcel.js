import React from "react";

export const getDataExcel = (data) => {

  let dataReal = []
  
  data.forEach((item) => {
    let itemReal = {}
    itemReal.Codigo = item.code;
    itemReal.Cantidad = item.amount;
    itemReal.Transporte = item.transport;
    itemReal.Trayecto = item.journey;
    itemReal.Cliente = item.customer;
    itemReal.Mensajero = item.messenger;
    itemReal.Estado = item.status;
    dataReal.push(itemReal)
  });
  return dataReal;
};
