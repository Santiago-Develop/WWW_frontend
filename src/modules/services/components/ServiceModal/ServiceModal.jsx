import { openNotificationWithIcon } from "../../../../helpers/openNotificationWithIcon";
import { LoadingOutlined } from "@ant-design/icons";
import { handleSetState } from "../../../../helpers/handleSetState";
import { Button, Form, Input, Modal, Row, Select, Spin } from "antd";
import { useEffect, useState } from "react";
import { getOffices } from "../../../../helpers/getOffices";
import TextArea from "antd/es/input/TextArea";
import { handleInputChange } from "../../../../helpers/handleInputChange";
import { headers } from "../../../../utils/headers";
import { resetForm } from "../../../../helpers/resetForm";
import { getServices } from "../../../../helpers/getServices";
import PropTypes from "prop-types";

export const ServiceModal = ({
  addService,
  setAddService,
  typeService,
  setDataService,
  setLoadingService,
}) => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [offices, setOffices] = useState(false);
  const [officesOptions, setOfficeOptions] = useState(false);
  const id = parseInt(localStorage.getItem("id"));
  const transportsOptions = [
    { value: "CAR", label: "Automóvil" },
    { value: "MOTORCYCLE", label: "Motocicleta" },
    { value: "TRUCK", label: "Camión" },
  ];
  const [newService, setNewService] = useState({
    amount: "",
    transport: "MOTORCYCLE",
    description: "",
    customer: id,
    source_office: null,
    destination_office: null,
  });

  const handleSelect = (value, type) => {
    if (type === "transports") {
      newService.transport = value;
      setNewService(newService);
    } else if (type === "source_office") {
      officesOptions.map((option) =>
        option.value === value ? (option.disabled = true) : (option.disabled = false),
      );
      newService.source_office = value;
    } else if (type === "destination_office") {
      // officesOptions.map(option => option.value === value ? option.disabled = true : option.disabled = false)
      newService.destination_office = value;
    }
  };

  const handleAddService = async () => {
    setLoading(true);

    const requestOptions = {
      method: "POST",
      body: JSON.stringify(newService),
      headers,
    };

    let type = "";
    let message = "";
    let description = "";

    try {
      const res = await fetch(API_URL + "api/services/", requestOptions);
      const { code } = await res.json();

      type = "success";
      message = "¡Solicitud exitosa!";
      description = `Servicio ${code} creado correctamente`;

      setTimeout(async () => {
        await getServices(typeService, setDataService, setLoadingService, true);
        openNotificationWithIcon(type, message, description);
        setLoading(false);
        setAddService(false);
        setLoading(false);
        resetForm(form);
        officesOptions.map((option) => (option.disabled = false));
      }, 2000);
    } catch (error) {
      console.log("error: ", error);
      type = "warning";
      message = "¡Hubo un error!";
      description = error.message;
      openNotificationWithIcon(type, message, description);
      setLoading(false);
    }
  };

  useEffect(() => {
    getOffices(false, setOffices, null, true, setOfficeOptions);
    console.log("🚀 ~ file: ServiceModal.jsx:24 ~ offices:", offices);
  }, []);

  return (
    <>
      <Modal
        centered
        open={addService}
        title="Solicitar servicio"
        onCancel={() => handleSetState(false, setAddService)}
        width="50vw"
        footer={[]}
      >
        <Form
          form={form}
          name="crearCliente"
          className="crearCliente"
          id="crearCliente"
          onFinish={handleAddService}
          onFinishFailed={() => {
            const type = "warning";
            const message = "¡No se pudo completar el registro!";
            const description = "Algunos campos obligatorios no están diligenciados";
            openNotificationWithIcon(type, message, description);
          }}
        >
          <Row className="col-12 col-md-12 d-flex flex-column align-items-center">
            <div className="d-flex justify-content-center flex-column">
              <Form.Item
                name="description"
                label="Descripción"
                className="d-flex flex-column"
                rules={[{ required: true, message: "Este campo es obligatorio" }]}
              >
                <TextArea
                  showCount
                  maxLength={100}
                  rows={4}
                  placeholder=""
                  name="description"
                  style={{ resize: "none", height: "100px", width: "300px" }}
                  onChange={(event) =>
                    handleInputChange(newService, setNewService, null, null, null, event)
                  }
                />
              </Form.Item>
              <Form.Item
                name="amount"
                label="Cantidad de paquetes"
                className="d-flex flex-column"
                rules={[{ required: true, message: "Este campo es obligatorio" }]}
              >
                <Input
                  type="number"
                  onChange={(event) =>
                    handleInputChange(newService, setNewService, null, null, null, event)
                  }
                  min={1}
                  name="amount"
                />
              </Form.Item>
              <Form.Item
                name="transport"
                label="Transporte"
                className="d-flex flex-column"
                // rules={[{ required: true, message: "Este campo es obligatorio" }]}
              >
                <Select
                  defaultValue="MOTORCYCLE"
                  onChange={(value) => handleSelect(value, "transports")}
                  options={transportsOptions}
                />
              </Form.Item>
              <Form.Item
                name="source_office"
                label="Surcursal de origen"
                className="d-flex flex-column"
                rules={[{ required: true, message: "Este campo es obligatorio" }]}
              >
                <Select
                  onChange={(value) => handleSelect(value, "source_office")}
                  options={officesOptions}
                />
              </Form.Item>
              <Form.Item
                name="destination_office"
                label="Surcursal de destino"
                className="d-flex flex-column"
                rules={[{ required: true, message: "Este campo es obligatorio" }]}
              >
                <Select
                  onChange={(value) => handleSelect(value, "destination_office")}
                  options={officesOptions}
                  // disabled={!!newService.source_office ? false : true}
                />
              </Form.Item>
            </div>
          </Row>

          <div className="d-flex justify-content-center">
            <Form.Item>
              <Button
                htmlType="button"
                className="m-2"
                // onClick={() => resetForm(form)}
                // disabled={loading ? true : false}
              >
                Limpiar
              </Button>

              <Button
                type="primary"
                htmlType="submit"
                disabled={loading ? true : false}
                className="btnCrearCliente m-2"
              >
                Solicitar
              </Button>
            </Form.Item>
          </div>

          <div className={loading ? "text-center mt-3" : "loading"}>
            <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
          </div>
        </Form>
      </Modal>
    </>
  );
};

ServiceModal.propTypes = {
  addService: PropTypes.func.isRequired,
  setAddService: PropTypes.func.isRequired,
  setDataService: PropTypes.func.isRequired,
  setLoadingService: PropTypes.func.isRequired,
  typeService: PropTypes.bool.isRequired,
  offices: PropTypes.bool.isRequired,
};
