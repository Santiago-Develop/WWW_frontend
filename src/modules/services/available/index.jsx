import { Button, Empty, Input, Spin, message } from "antd";
import { useEffect, useState } from "react";
import { ServiceModal } from "../components/ServiceModal/ServiceModal";
import { ROLES } from "../../../utils/enums";
import { getUpdates } from "../../../helpers/getUpdates";
import { onSearch } from "../../../helpers/onSearch";
import { getServices } from "../../../helpers/getServices";
import { handleSetState } from "../../../helpers/handleSetState";
import { ServiceCard } from "../components/ServiceCard";
import { createUpdate } from "../../../helpers/createUpdate";
import "../../../style.scss";


export const AvailableServicesView = () => {
    const [addService, setAddService] = useState(false)
    const [data, setData] = useState(false)
    const [loading, setLoading] = useState(false)
    const type = "available_services"
    const role = localStorage.getItem('role')

    useEffect(() => {
        getServices(type, setData, setLoading, true, true, true)
        getUpdates()
    }, [])

    const confirm = async (data) => {
        createUpdate(data, true)
        message.success('¡Tomaste el pedido, muchas suerte viajero!');
        await getServices(type, setData, setLoading, true, true, true)

    };

    const cancel = () => {
        message.error('No tomaste el pedido');
    };


    return (
        <div className="contenedor_main">
            <div className="container">
                <div
                    className="d-flex justify-content-between align-items-center mb-3"
                    style={{ margin: "10px 20px" }}
                >
                    <h1 className="_title">Servicios disponibles</h1>

                    <Input
                        placeholder="Buscar..."
                        onChange={(event) => onSearch(event, setData, type)}
                        style={{
                            width: 400,
                        }}
                    />
                </div>

                <div className="titles">
                    <div className="field">
                        <div className="d-flex align-items-center justify-content-center">
                            <span className="info_text text-white">Código</span>
                        </div>
                    </div>

                    <div className="field">
                        <div className="d-flex align-items-center justify-content-center">
                            <span className="info_text text-white">Cantidad</span>
                        </div>
                    </div>
                    <div className="field">
                        <div className="d-flex align-items-center justify-content-center">
                            <span className="info_text text-white">Transporte</span>
                        </div>
                    </div>
                    <div className="field">
                        <div className="d-flex align-items-center justify-content-center">
                            <span className="info_text text-white">Trayecto</span>
                        </div>
                    </div>
                    {
                        role === ROLES.MESSENGER ?
                            (
                                <div className="field">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <span className="info_text text-white">Acciones</span>
                                    </div>
                                </div>
                            )
                            : ""
                    }
                </div>

                {!data && !loading ? (
                    <Spin size="large" className="m-4" sty>
                        <div className="content" style={{ height: "50px" }} />
                    </Spin>
                ) : !data || data.length < 1 ? (
                    <Empty className="m-3" />
                ) : (
                    ""
                )}

                <div style={{ maxHeight: "77vh", overflowY: "auto" }}>
                    {!!data
                        ? data.map((service) => {
                            return (
                                <ServiceCard
                                    key={service.id}
                                    data={service}
                                    moduleType={type}
                                    confirm={confirm}
                                    cancel={cancel}
                                />
                            );
                        })
                        : ""}
                </div>
            </div>

            <ServiceModal
                addService={addService}
                setAddService={setAddService}
                typeService={type}
                setDataService={setData}
                setLoadingService={setLoading}

            />
        </div>
    );
};
