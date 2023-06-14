import { Button, Form, Input, Modal, Upload, message } from 'antd'
import { handleSetState } from '../../../../helpers/handleSetState'
import { STATES, TRANSPORTS } from '../../../../utils/enums'
import { TimelineUpdate } from '../TimelineUpdate'
import { useEffect, useState, } from 'react'
import './style.scss'
import { handleInputChange } from '../../../../helpers/handleInputChange'
import { normFile, setUrlImgBase64 } from '../../../../helpers/handleUpload'
import { UploadOutlined, LoadingOutlined } from "@ant-design/icons";
import { useForm } from 'antd/es/form/Form'
import { openNotificationWithIcon } from '../../../../helpers/openNotificationWithIcon'
import { createUpdate } from '../../../../helpers/createUpdate'

export const ServiceInfoModal = ({ data, modalInfo, setModalInfo }) => {

    const [form] = useForm()
    const [updates, setUpdates] = useState({
        description: "",
        photo: ""
    })

    const handleAddUpdate = () => {
        console.log("🚀 ~ file: index.jsx:20 ~ ServiceInfoModal ~ updates:", updates)
        createUpdate()
    }

    return (
        <Modal
            title={`Detalle del servicio ${data.code}`}
            open={modalInfo}
            onCancel={() => handleSetState(false, setModalInfo)}
            footer={[]}
        >
            <div className='d-flex justify-content-evenly'>
                <div className='d-flex justify-content-center flex-column'>
                    <div className='infoService'>
                        <span className='text'>Descripción: </span>
                        <span>{data.description}</span>
                    </div>
                    <div className='infoService'>
                        <span className='text'>Cantidad: </span>
                        <span>{data.amount}</span>
                    </div>
                    <div className='infoService'>
                        <span className='text'>Transporte: </span>
                        <span>{TRANSPORTS[data.transport]}</span>
                    </div>
                    <div className='infoService'>
                        <span className='text'>Mensajero: </span>
                        <span>{!!data.messenger ? data.messenger : 'No existe información'}</span>
                    </div>
                </div>

                <div className='d-flex justify-content-center flex-column'>
                    <div className='infoService'>
                        <span className='text'>Origen: </span>
                        <span>{data.source_office}</span>
                    </div>
                    <div className='infoService'>
                        <span className='text'>Destino: </span>
                        <span>{data.destination_office}</span>
                    </div>
                    <div className='infoService'>
                        <span className='text'>Cliente: </span>
                        <span>{data.customer.name}</span>
                    </div>
                </div>
            </div>
            <div className='infoService d-flex justify-content-center'>
                <span
                    className={
                        `state ${STATES[data.updates[data.updates.length - 1].state] === 'Requerido' ? 'required' :
                            STATES[data.updates[data.updates.length - 1].state] === "Asignado" ? 'assigned' :
                                STATES[data.updates[data.updates.length - 1].state] === "Recogido" ? 'picked_up' : "delivered"}`
                    }
                    style={{ fontWeight: '500', width: '120px' }}
                >
                    {STATES[data.updates[data.updates.length - 1].state]}
                </span>
            </div>

            <hr />


            <Form
                form={form}
                name="crearCliente"
                className="crearCliente"
                id="crearCliente"
                onFinish={() => handleAddUpdate()}
                onFinishFailed={() => {
                    const type = "warning";
                    const message = "¡No se pudo completar el registro!";
                    const description = "Algunos campos obligatorios no están diligenciados";
                    openNotificationWithIcon(type, message, description);
                }}
            >
                <div className='d-flex justify-content-center align-items-center'>
                    <Button type='primary' htmlType="submit">
                        Añadir actualización
                    </Button>
                </div>
                <div className="d-flex justify-content-evenly">
                    <Form.Item
                        name="description"
                        label="Descripción"
                        rules={[{ required: true, message: "Este campo es obligatorio" }]}
                        className="d-flex flex-column"
                    >
                        <Input
                            type="text"
                            pattern="^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+${2,60}"
                            title="Ingresa un nombre válido"
                            onChange={(event) => handleInputChange(updates, setUpdates, null, null, null, event)}
                            name="description"
                        />
                    </Form.Item>

                    <Form.Item
                        accept="image/svg+xml, image/png, image/jpeg, image/jpg"
                        name="urlImg"
                        label="Imágen"
                        valuePropName="fileList"
                        getValueFromEvent={(event) => normFile(event)}
                        rules={[]}
                        className="d-flex text-center"
                    >
                        <Upload
                            style={{ maxWidth: "200px" }}
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            beforeUpload={async (file) => {
                                const notImage =
                                    file.type === "image/jpg" ||
                                    file.type === "image/jpeg" ||
                                    file.type === "image/png" ||
                                    file.type === "image/svg+xml";
                                if (!notImage) {
                                    await message.error(`${file.name} no es un archivo válido`);
                                } else {
                                    await message.success(`${file.name} añadido exitosamente`);
                                    setUrlImgBase64(file, updates, setUpdates);
                                }
                                return notImage || Upload.LIST_IGNORE;
                            }}
                            name="urlImg"
                            listType="picture"
                            maxCount={1}
                            id="urlImg"
                        >
                            <Button icon={<UploadOutlined />}>Subir imágen</Button>
                        </Upload>
                    </Form.Item>
                </div>


                {/* <div className={registeredUser ? "text-center mt-3" : "loading"}>
          <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
        </div> */}
            </Form>

            <div style={{ margin: '20px 0' }}>
                <div className='text-center'>
                    <span className='title'>Actualizaciones</span>
                </div>

                <div className='p-3'>
                    <TimelineUpdate
                        updates={data.updates}
                        data={data}
                    />
                </div>
            </div>
        </Modal >
    )
}
