import { TRANSPORTS } from "../../../../utils/enums"

export const ServiceCard = ({ data }) => {
    console.log("🚀 ~ file: index.jsx:3 ~ ServiceCard ~ data:", data)

    return (
        <div className="userCard">
            <div className="field">
                <span className="info_text">{data.code}</span>
            </div>
            <div className="field">
                <span className="info_text">{data.amount}</span>
            </div>
            <div className="field">
                <span className="info_text">{TRANSPORTS[data.transport]}</span>
            </div>
            <div className="field">
                <span className="info_text">{ }</span>
            </div>
            <div className="field">
                <span className="info_text">{ }</span>
            </div>
        </div>
    )
}
