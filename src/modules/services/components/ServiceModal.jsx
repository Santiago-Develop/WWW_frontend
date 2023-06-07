import { openNotificationWithIcon } from '../../../helpers/openNotificationWithIcon';
import { LoadingOutlined } from "@ant-design/icons";
import { handleSetState } from '../../../helpers/handleSetState';
import { Button, Form, Input, Modal, Row, Select, Spin } from 'antd';
import { useEffect, useState } from 'react';
import { getOffices } from '../../../helpers/getOffices';
import TextArea from 'antd/es/input/TextArea';
import { handleInputChange } from '../../../helpers/handleInputChange';
import { headers } from '../../../utils/headers';

export const ServiceModal = ({ addService, setAddService }) => {

    const API_URL = import.meta.env.VITE_API_URL;
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [offices, setOffices] = useState(false);
    const [officesOptions, setOfficeOptions] = useState(false);
    const transportsOptions = [
        { value: 'CAR', label: 'Automóvil' },
        { value: 'MOTORCYCLE', label: 'Motocicleta' },
        { value: 'TRUCK', label: 'Camión' },
    ]
    const [newService, setNewService] = useState({
        amount: "",
        transport: "MOTORCYCLE",
        description: "",
        customer: parseInt(localStorage.getItem("id")),
        source_office: "",
        source_destination: ""
    });

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    const handleSelect = (value, type) => {
        console.log(`selected ${value}`);
        if (type === "transports") {
            newService.transport = value
            setNewService(newService)
        } else if (type === "source_office") {
            newService.source_office = value
        } else if (type === "source_destination") {
            newService.source_destination = value
        }

    };

    const handleAddOffice = async () => {

        console.log("🚀 ~ file: ServiceModal.jsx:24 ~ ServiceModal ~ newService:", newService)

        const requestOptions = {
            method: "POST",
            body: JSON.stringify(newService),
            headers
        };

        try {
            const res = await fetch(API_URL + "api/services/", requestOptions);
            await res.json();
        } catch (error) {
            console.log("error: ", error);
        }
    };



    useEffect(() => {
        getOffices(false, setOffices, null, true, setOfficeOptions)
    }, [])


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
                    onFinish={handleAddOffice}
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
                            >
                                <TextArea
                                    showCount
                                    maxLength={100}
                                    rows={4}
                                    placeholder=""
                                    name="description"
                                    style={{ resize: 'none', height: '100px', width: '300px' }}
                                    onChange={(event) =>
                                        handleInputChange(newService, setNewService, null, null, null, event)
                                    }
                                />

                            </Form.Item>
                            <Form.Item
                                name="amount"
                                label="Cantidad de paquetes"
                                className="d-flex flex-column"
                            >
                                <Input
                                    type="number"
                                    onChange={(event) =>
                                        handleInputChange(newService, setNewService, null, null, null, event)
                                    }
                                    name="amount"
                                />
                            </Form.Item>
                            <Form.Item
                                name="transport"
                                label="Transporte"
                                className="d-flex flex-column"
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
                            >
                                <Select
                                    onChange={(value) => handleSelect(value, "source_office")}
                                    options={officesOptions}
                                />

                            </Form.Item>
                            <Form.Item
                                name="source_destination"
                                label="Surcursal de destino"
                                className="d-flex flex-column"
                            >
                                <Select
                                    onChange={(value) => handleSelect(value, "source_destination")}
                                    options={officesOptions}
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

                    <div /*className={loading ? "text-center mt-3" : "loading"}*/ style={{ display: 'none' }}>
                        <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
                    </div>
                </Form>
            </Modal>
        </>
    )
}
