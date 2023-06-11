import { ROLES, STATES, TRANSPORTS } from "../../../../utils/enums"
import { Button, Popconfirm, message } from "antd"
import './style.scss'

export const ServiceCard = ({ data, moduleType, confirm = null, cancel = null }) => {
    const role = localStorage.getItem('role')


    return (
        <div className="serviceCard">
            <div className="field">
                <span className="info_text" style={{ cursor: 'pointer', color: '#c9412c' }}>

                    {data.code}
                </span>
            </div>
            <div className="field">
                <span className="info_text">{data.amount} paquetes</span>
            </div>
            <div className="field">
                <span className="info_text">{TRANSPORTS[data.transport]}</span>
            </div>
            <div className="field">
                <span className="info_text">
                    <b>{data.source_office} </b>
                    hacia
                    <b> {data.destination_office}</b>
                </span>
            </div>
            {
                moduleType == "services"
                    ? (
                        <div
                            className={
                                `state ${STATES[data.updates[0].state] === 'Requerido' ? 'active' : 'inactive'}`
                            }
                            style={{ fontWeight: '500', width: '120px' }}
                        >
                            {STATES[data.updates[0].state]}
                        </div>
                    ) : ''
            }

            {
                role === ROLES.MESSENGER ?
                    (
                        <div className="field">
                            <Popconfirm
                                title={`Tomar pedido ${data.code}`}
                                description="¿Estás seguro que quieres aceptar el pedido?"
                                onConfirm={confirm}
                                onCancel={cancel}
                                okText="Sí"
                                cancelText="Quizás luego"
                            >
                                <Button type="primary" >Tomar pedido</Button>
                            </Popconfirm>
                        </div>
                    )
                    : ""
            }

        </div >
    )
}
