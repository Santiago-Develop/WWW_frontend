import { ReportForm } from "./components/Form";

export const ReportView = () => {

  return (
    <div className="contenedor_main">
      <div className="container">
        <div
          className="d-flex justify-content-between align-items-center mb-3"
          style={{ margin: "10px 20px" }}
        >
          <h1 className="_title" style={{ marginBottom: "0 important" }}>
            Reportes de pedidos
          </h1>
        </div>

        <div className="container">
          <ReportForm />
        </div>

      </div>
    </div>
  );
};
