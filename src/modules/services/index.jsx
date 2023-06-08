import { Button, Empty, Input, Spin } from "antd";
import { ServiceModal } from "./components/ServiceModal/ServiceModal";
import { useEffect, useState } from "react";
import { handleSetState } from "../../helpers/handleSetState";
import { getServices } from "../../helpers/getServices";
import { ServiceCard } from "./components/ServiceCard";

export const ServicesView = () => {
  const [addService, setAddService] = useState(false)
  const [data, setData] = useState(false)
  const [loading, setLoading] = useState(false)
  const type = "services"

  useEffect(() => {
    getServices(type, setData, setLoading, true)
  }, [])


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

      <div className="titles">
        <div className="field">
          <div className="d-flex align-items-center justify-content-center">
            <span className="info_text text-white">Código</span>
          </div>
        </div>

        <div className="field">
          <div className="d-flex align-items-center justify-content-center">
            <span className="info_text text-white">Cantidad de paquetes</span>
          </div>
        </div>
        <div className="field">
          <div className="d-flex align-items-center justify-content-center">
            <span className="info_text text-white">Transporte</span>
          </div>
        </div>
        <div className="field">
          <div className="d-flex align-items-center justify-content-center">
            <span className="info_text text-white">Trayecto</span>
          </div>
        </div>
        <div className="field">
          <div className="d-flex align-items-center justify-content-center">
            <span className="info_text text-white">Estado</span>
          </div>
        </div>
      </div>

      {!data && !loading ? (
        <Spin size="large" className="m-4" sty>
          <div className="content" style={{ height: "50px" }} />
        </Spin>
      ) : !data || data.length < 1 ? (
        <Empty className="m-3" />
      ) : (
        ""
      )}

      <div style={{ maxHeight: "77vh", overflowY: "auto" }}>
        {data
          ? data.map((data) => {
            return (
              <ServiceCard
                key={data.id}
                data={data}
              />
            );
          })
          : ""}
      </div>

      <ServiceModal
        addService={addService}
        setAddService={setAddService}
      />
    </div>
  );
};
