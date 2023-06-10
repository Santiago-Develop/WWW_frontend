import { ROLES, STATES, TRANSPORTS } from "../../../../utils/enums"
import './style.scss'
import { Button } from "antd"
export const ServiceCard = ({ data }) => {
    const role = localStorage.getItem('role')
    console.log("🚀 ~ file: index.jsx:3 ~ ServiceCard ~ data:", data)

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
            <div
                className={
                    `state ${STATES[data.updates[0].state] === 'Requerido' ? 'active' : 'inactive'}`
                }
                style={{ fontWeight: '500', width: '120px' }}
            >
                {STATES[data.updates[0].state]}
            </div>
            {
                role === ROLES.MESSENGER ?
                    (
                        <div className="field">
                            <Button type="dashed" danger>Tomar pedido</Button>
                        </div>
                    )
                    : ""
            }

        </div>
    )
}
