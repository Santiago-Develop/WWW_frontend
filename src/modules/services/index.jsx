import { Input } from "antd";

export const ServicesView = () => {
  return (
    <div className="contenedor_main">
      <div className="container">
        <div
          className="d-flex justify-content-between align-items-center mb-3"
          style={{ margin: "10px 20px" }}
        >
          <h1 className="_title">Servicios</h1>
          <Input
            placeholder="Buscar..."
            // onChange={(event) => onSearch(event, setData)}
            style={{
              width: 400,
            }}
          />
        </div>
      </div>
    </div>
  );
};
