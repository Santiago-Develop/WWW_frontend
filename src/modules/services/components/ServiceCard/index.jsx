import { STATES, TRANSPORTS } from "../../../../utils/enums"

export const ServiceCard = ({ data }) => {
    console.log("🚀 ~ file: index.jsx:3 ~ ServiceCard ~ data:", data)

    return (
        <div className="userCard">
            <div className="field">
                <span className="info_text" style={{ cursor: 'pointer', color: '#c9412c' }}>{data.code}</span>
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
            {/* <div className="field">
                <span className="info_text">{STATES[data.updates[0].state]}</span>
            </div> */}
            <span
                className={`state ${STATES[data.updates[0].state] === 'Requerido' ? 'active' : 'inactive'}`}
                style={{ fontWeight: '500' }}
            >
                {STATES[data.updates[0].state]}
            </span>
        </div>
    )
}
