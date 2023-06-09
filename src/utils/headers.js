/*Creacion de Headers para peticiones*/
let headersCreado = new Headers();
headersCreado.append("Content-type", "application/json");
headersCreado.append("Access-Control-Allow-Origin", "*");

export const headers = headersCreado;
