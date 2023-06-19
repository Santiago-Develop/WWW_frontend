import React, { useState } from "react";
import { ICONS, ROLES, STATES, TRANSPORTS } from "../../../../utils/enums";
import { Button, Popconfirm } from "antd";
import {
  SmileOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { ServiceInfoModal } from "../ServiceInfoModal";
import { handleSetState } from "../../../../helpers/handleSetState";
import "./style.scss";

export const ServiceCard = ({ data, moduleType, confirm = null, cancel = null }) => {
  const [modalInfo, setModalInfo] = useState(false);
  const role = localStorage.getItem("role");

  const renderIcon = (iconName) => {
    const IconComponent = React.createElement(eval(iconName));
    return IconComponent;
  };

  return (
    <div className="serviceCard">
      <div className="field">
        <span
          className="info_text"
          style={{ cursor: "pointer", color: "#c9412c" }}
          onClick={() => handleSetState(true, setModalInfo)}
        >
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
      {moduleType == "services" ? (
        <div
          className={`state ${
            STATES[data.updates[data.updates.length - 1].state] === "Requerido"
              ? "required"
              : STATES[data.updates[data.updates.length - 1].state] === "Asignado"
              ? "assigned"
              : STATES[data.updates[data.updates.length - 1].state] === "Recogido"
              ? "picked_up"
              : "delivered"
          }`}
          style={{ fontWeight: "500", width: "120px" }}
        >
          {renderIcon(ICONS[data.updates[data.updates.length - 1].state])}
          <div style={{ padding: "0 5px" }}>
            {STATES[data.updates[data.updates.length - 1].state]}
          </div>
        </div>
      ) : (
        ""
      )}

      {role === ROLES.MESSENGER && moduleType == "available_services" ? (
        <div className="field">
          <Popconfirm
            title={`Tomar pedido ${data.code}`}
            description="¿Estás seguro que quieres aceptar el pedido?"
            onConfirm={() => confirm(data.updates[data.updates.length - 1])}
            onCancel={cancel}
            okText="Sí"
            cancelText="Quizás luego"
          >
            <Button type="primary">Tomar pedido</Button>
          </Popconfirm>
        </div>
      ) : (
        ""
      )}

      <ServiceInfoModal data={data} modalInfo={modalInfo} setModalInfo={setModalInfo} />
    </div>
  );
};
