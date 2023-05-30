import { handleSetState } from "../../../../helpers/handleSetState";
import { openNotificationWithIcon } from "../../../../helpers/openNotificationWithIcon";
import { useState } from "react";
import { Modal, Form, Input, Row, Spin, Button } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { handleInputChange } from "../../../../helpers/handleInputChange";
import { resetForm } from "../../../../helpers/resetForm";
import { headers } from "../../../../utils/headers";
import PropTypes from "prop-types";

export const OfficeModal = ({ title, edit, form, addOffice, setAddOffice, getOffices }) => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [loading, setLoading] = useState(false);
  const [newOffice, setNewOffice] = useState({
    name: "",
    address: "",
    phone: "",
    customer: parseInt(localStorage.getItem("id")),
  });

  const handleAddOffice = async () => {
    setLoading(true);
    setNewOffice(addOffice);
    const requestOptions = {
      method: "POST",
      headers,
      body: JSON.stringify(newOffice),
    };

    try {
      if (edit) {
        const id_ = localStorage.getItem("currentOffice");
        await fetch(API_URL + "api/office/" + id_ + "/", requestOptions);

        const type = "success";
        const message = "Actualización exitosa!";
        const description = `La surcursal: ${addOffice.name} ha sido modificada`;
        setTimeout(() => {
          openNotificationWithIcon(type, message, description);
          setLoading(false);
          setAddOffice(false);
          resetForm(form);
          getOffices();
        }, 1000);
      } else {
        const res = await fetch(API_URL + "api/office", requestOptions);

        if (res.status === 400) {
          const type = "warning";
          const message = "¡Escribe otro número!";
          const description = "La sucursal con este teléfono ya existe.";
          openNotificationWithIcon(type, message, description);
          setLoading(false);
        } else {
          const type = "success";
          const message = "Creación exitosa!";
          const description = `Tienes una nueva surcursal: ${newOffice.name}`;
          setTimeout(() => {
            openNotificationWithIcon(type, message, description);
            setLoading(false);
            setAddOffice(false);
            resetForm(form);
            getOffices();
          }, 1000);
        }
      }
    } catch (error) {
      console.log("error: ", error);
      const type = "warning";
      const message = "¡Ocurrió algo inusual!";
      const description = error.message;
      setLoading(false);
      openNotificationWithIcon(type, message, description);
    }
  };

  return (
    <Modal
      centered
      open={addOffice}
      title={title}
      onCancel={() => handleSetState(false, setAddOffice)}
      width="50vw"
      footer={[]}
    >
      <Form
        form={form}
        name="crearCliente"
        className="crearCliente"
        id="crearCliente"
        onFinish={() => handleAddOffice()}
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
              name="name"
              label="Nombre"
              rules={!edit ? [{ required: true, message: "Este campo es obligatorio" }] : []}
              className="d-flex flex-column"
            >
              <Input
                type="text"
                pattern="^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+${2,60}"
                title="Ingresa un nombre válido"
                onChange={(event) =>
                  handleInputChange(newOffice, setNewOffice, null, null, null, event)
                }
                name="name"
                defaultValue={addOffice?.name}
              />
            </Form.Item>
            <Form.Item
              name="address"
              label="Dirección"
              rules={!edit ? [{ required: true, message: "Este campo es obligatorio" }] : []}
              className="d-flex flex-column"
            >
              <Input
                type="text"
                title="Ingresa un correo válido"
                onChange={(event) =>
                  handleInputChange(newOffice, setNewOffice, null, null, null, event)
                }
                name="address"
                defaultValue={addOffice?.address}
              />
            </Form.Item>
            <Form.Item
              name="phone"
              label="Teléfono"
              rules={!edit ? [{ required: true, message: "Este campo es obligatorio" }] : []}
              className="d-flex flex-column"
            >
              <Input
                type="text"
                pattern="([0-9]{10})"
                title="Ingresa un número de celular válido"
                onChange={(event) =>
                  handleInputChange(newOffice, setNewOffice, null, null, null, event)
                }
                name="phone"
                defaultValue={addOffice?.phone}
              />
            </Form.Item>
          </div>
        </Row>

        <div className="d-flex justify-content-center">
          <Form.Item>
            <Button
              htmlType="button"
              className="m-2"
              onClick={() => resetForm(form)}
              disabled={loading ? true : false}
            >
              Limpiar
            </Button>

            <Button
              type="primary"
              htmlType="submit"
              disabled={loading ? true : false}
              className="btnCrearCliente m-2"
            >
              {edit ? "Actualizar" : "Crear"}
            </Button>
          </Form.Item>
        </div>

        <div className={loading ? "text-center mt-3" : "loading"}>
          <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
        </div>
      </Form>
    </Modal>
  );
};

OfficeModal.propTypes = {
  title: PropTypes.string.isRequired,
  edit: PropTypes.bool.isRequired,
  form: PropTypes.object.isRequired,
  addOffice: PropTypes.object.isRequired,
  setAddOffice: PropTypes.func.isRequired,
  getOffices: PropTypes.func.isRequired,
};
