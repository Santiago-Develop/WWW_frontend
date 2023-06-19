import { Button } from "antd";
import { ReportForm } from "./components/Form";
import { PlusOutlined } from '@ant-design/icons';
import { useState } from "react";

export const ReportView = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

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
          <Button
            type="primary"
            onClick={() => setOpenDrawer(true)}
          >
            Nuevo reporte
          </Button>
        </div>

        <div className="">
          <ReportForm
            openDrawer={openDrawer}
            setOpenDrawer={setOpenDrawer}
          />
        </div>

      </div>
    </div>
  );
};
