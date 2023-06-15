import { useState, } from 'react'
import { Button, Form, Input, Modal, Select, Spin, Upload, message } from 'antd'
import { handleSetState } from '../../../../helpers/handleSetState'
import { ROLES, STATES, TRANSPORTS } from '../../../../utils/enums'
import { TimelineUpdate } from '../TimelineUpdate'
import { handleInputChange } from '../../../../helpers/handleInputChange'
import { normFile, setUrlImgBase64 } from '../../../../helpers/handleUpload'
import { UploadOutlined, LoadingOutlined } from "@ant-design/icons";
import { useForm } from 'antd/es/form/Form'
import { openNotificationWithIcon } from '../../../../helpers/openNotificationWithIcon'
import { createUpdate } from '../../../../helpers/createUpdate'
import './style.scss'
import TextArea from 'antd/es/input/TextArea'

export const ServiceInfoModal = ({ data, modalInfo, setModalInfo }) => {

    const [form] = useForm()
    const [updates, setUpdates] = useState({
        service: data.id,
        description: "",
        photo: ""
    })
    const [loading, setLoading] = useState(false)
    const options = [
        { value: 1, label: 'Requerido' },
        { value: 2, label: 'Asignado' },
        { value: 3, label: 'Recogido' },
        { value: 4, label: 'Entregado' },
    ]
    const id = parseInt(localStorage.getItem("id"))

    const handleAddUpdate = () => {
        console.log("🚀 ~ file: index.jsx:20 ~ ServiceInfoModal ~ updates:", updates)
        createUpdate(updates, false, updates.state)
    }

    return (
        <Modal
            title={`Detalle del servicio ${data.code}`}
            open={modalInfo}
            onCancel={() => handleSetState(false, setModalInfo)}
            width={
                data.messenger.id === id && data.messenger.role === ROLES.MESSENGER
                    ? 800
                    : 500
            }
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
                        <span>{!!data.messenger.name ? data.messenger.name : 'No existe información'}</span>
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
            {
                (data.messenger.id === id && data.messenger.role === ROLES.MESSENGER) && (data.updates[data.updates.length - 1].state !== 4)
                    ?
                    (<Form
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

                        <div className="d-flex justify-content-evenly align-items-center">
                            <Form.Item
                                name="description"
                                label="Descripción"
                                rules={[{ required: true, message: "Este campo es obligatorio" }]}
                                className="d-flex flex-column"
                            >
                                <TextArea
                                    showCount
                                    maxLength={100}
                                    rows={3}
                                    placeholder=""
                                    name="description"
                                    style={{ resize: 'none', height: '100px', width: '200px' }}
                                    onChange={(event) =>
                                        handleInputChange(updates, setUpdates, null, null, null, event)
                                    }
                                />
                            </Form.Item>

                            <Form.Item
                                accept="image/svg+xml, image/png, image/jpeg, image/jpg"
                                name="photo"
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
                                            setUrlImgBase64(file, updates, setUpdates, "photo");
                                        }
                                        return notImage || Upload.LIST_IGNORE;
                                    }}
                                    name="photo"
                                    listType="picture"
                                    maxCount={1}
                                    id="photo"
                                >
                                    <Button icon={<UploadOutlined />}>Subir imágen</Button>
                                </Upload>
                            </Form.Item>


                            <Form.Item
                                name="state"
                                label="Estado"
                                rules={[]}
                                className="d-flex flex-column"
                            >
                                <Select
                                    defaultValue={data.updates[data.updates.length - 1].state}
                                    style={{ width: 120 }}
                                    // onChange={handleChange}
                                    options={options.map(option => {
                                        if (option.value <= data.updates[data.updates.length - 1].state) {
                                            option.disabled = true
                                        } else {
                                            option.disabled = false
                                        }
                                        return option
                                    })}
                                />
                            </Form.Item>

                            <div className='d-flex justify-content-center align-items-center'>
                                <Button
                                    type='primary'
                                    htmlType="submit"
                                    disabled={!loading ? false : true}
                                >
                                    {
                                        !loading
                                            ?
                                            "+" :
                                            (<div>
                                                <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
                                            </div>)
                                    }
                                </Button>
                            </div>
                        </div>

                    </Form>)
                    :
                    ''

            }


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
