import { openNotificationWithIcon } from '../../../helpers/openNotificationWithIcon';
import { LoadingOutlined } from "@ant-design/icons";
import { handleSetState } from '../../../helpers/handleSetState';
import { Button, Form, Input, Modal, Row, Spin } from 'antd';
import { useState } from 'react';

export const ServiceModal = ({ addService, setAddService }) => {

    const API_URL = import.meta.env.VITE_API_URL;
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [newService, setNewService] = useState({
        name: "",
        address: "",
        phone: "",
        customer: parseInt(localStorage.getItem("id")),
    });

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
                    // onFinish={() => handleAddOffice()}
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
                                // rules={!edit ? [{ required: true, message: "Este campo es obligatorio" }] : []}
                                className="d-flex flex-column"
                            >
                                <Input
                                    type="text"
                                    pattern="^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+${2,60}"
                                    title="Ingresa un nombre válido"
                                    // onChange={(event) =>
                                    //     handleInputChange(newOffice, setNewOffice, null, null, null, event)
                                    // }
                                    name="name"
                                // defaultValue={addOffice?.name}
                                />
                            </Form.Item>
                            <Form.Item
                                name="address"
                                label="Dirección"
                                // rules={!edit ? [{ required: true, message: "Este campo es obligatorio" }] : []}
                                className="d-flex flex-column"
                            >
                                <Input
                                    type="text"
                                    title="Ingresa un correo válido"
                                    // onChange={(event) =>
                                    //     handleInputChange(newOffice, setNewOffice, null, null, null, event)
                                    // }
                                    name="address"
                                // defaultValue={addOffice?.address}
                                />
                            </Form.Item>
                            <Form.Item
                                name="phone"
                                label="Teléfono"
                                // rules={!edit ? [{ required: true, message: "Este campo es obligatorio" }] : []}
                                className="d-flex flex-column"
                            >
                                <Input
                                    type="text"
                                    pattern="([0-9]{10})"
                                    title="Ingresa un número de celular válido"
                                    // onChange={(event) =>
                                    //     handleInputChange(newOffice, setNewOffice, null, null, null, event)
                                    // }
                                    name="phone"
                                // defaultValue={addOffice?.phone}
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
                                // disabled={loading ? true : false}
                                className="btnCrearCliente m-2"
                            >
                                {/* {edit ? "Actualizar" : "Crear"} */}
                                Solicitar
                            </Button>
                        </Form.Item>
                    </div>

                    <div /*className={loading ? "text-center mt-3" : "loading"}*/>
                        <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
                    </div>
                </Form>
            </Modal>
        </>
    )
}
