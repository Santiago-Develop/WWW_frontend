import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { createServer } from "vite";
import send from "koa-send";
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // Configura el middleware para permitir la entrega de archivos PDF
    middleware: [
      async (req, res, next) => {
        if (req.url.endsWith(".pdf")) {
          // Establece el tipo de contenido como 'application/pdf' para los archivos PDF
          res.setHeader("Content-Type", "application/pdf");

          // Utiliza el paquete 'koa-send' para enviar el archivo PDF
          await send(req, req.url, { root: "." });
        } else {
          next();
        }
      },
    ],
  },
  plugins: [react()],
});
