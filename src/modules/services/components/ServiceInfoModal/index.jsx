import { Modal } from 'antd'
import { handleSetState } from '../../../../helpers/handleSetState'
import { STATES, TRANSPORTS } from '../../../../utils/enums'
import './style.scss'
import { TimelineUpdate } from '../TimelineUpdate'
import { getUser } from '../../../../helpers/getUser'
import { useEffect, useState } from 'react'

export const ServiceInfoModal = ({ data, modalInfo, setModalInfo }) => {
    const [customer, setCustomer] = useState(false)

    const getUserModal = async () => {
        const userData = await getUser(data.customer)
        console.log("🚀 ~ file: index.jsx:14 ~ getUserModal ~ userData:", userData)
        setCustomer(userData)
    }

    useEffect(() => {
        getUserModal()
    }, [])

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
                        <span>{customer.username}</span>
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
