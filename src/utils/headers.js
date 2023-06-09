/*Creacion de Headers para peticiones*/
let headersCreado = new Headers();
headersCreado.append("Content-type", "application/json");
headersCreado.append("Access-Control-Allow-Origin", "https://www-frontend-ihpd.vercel.app/");

export const headers = headersCreado;
