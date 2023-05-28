/*Obtención de token para peticiones*/
let token = localStorage.getItem('token')

/*Creacion de Headers para peticiones*/
let headersCreado = new Headers()
headersCreado.append('Content-type', 'application/json')

export const headers = headersCreado
