import { Button, Input } from "antd";
import { ServiceModal } from "./components/ServiceModal";
import { useState } from "react";
import { handleSetState } from "../../helpers/handleSetState";

export const ServicesView = () => {
  const [addService, setAddService] = useState(false)

  return (
    <div className="contenedor_main">
      <div className="container">
        <div
          className="d-flex justify-content-between align-items-center mb-3"
          style={{ margin: "10px 20px" }}
        >
          <h1 className="_title">Mis servicios</h1>
          <Button
            type="primary"
          onClick={() => handleSetState(true, setAddService)}
          >
            Solicitar pedido
          </Button>
          <Input
            placeholder="Buscar..."
            // onChange={(event) => onSearch(event, setData)}
            style={{
              width: 400,
            }}
          />
        </div>
      </div>

      <ServiceModal
        addService={addService}
        setAddService={setAddService}
      />
    </div>
  );
};
