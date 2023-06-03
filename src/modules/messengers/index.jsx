import { useEffect, useState } from "react";
import { Spin, Empty, Input } from "antd";
import { ROLES } from "../../utils/enums";
import { onSearch } from "../../helpers/onSearch";
import { getUsers } from "../../helpers/getUsers";
// import { UserModal } from '../../components/UserModal/index'
// import { handleSetState } from "../../helpers/handleSetState";
import UserCard from "../../components/UserCard";
import "../../style.scss";
import "./style.scss";
import { getCustomerMessengers } from "../../helpers/getCustomerMessengers";

/* Component used to display each of the messenger */

const MessengersView = () => {
  /* General states */
  const [data, setData] = useState(false);
  const [loading, setLoading] = useState(false);
  const type = "messengers";
  const userRole = localStorage.getItem("role");
  const userId = localStorage.getItem("id");
  // const [formNewBarber] = Form.useForm();
  // const [registeredUser, setRegisteredUser] = useState(false);
  // const [modelRegister, setModelRegister] = useState(false);
  // const [newUser, setNewUser] = useState({
  //   name: "",
  //   documentNumber: "",
  //   phone: "",
  //   birthDate: "",
  //   urlImg: "",
  //   email: "",
  //   password: "",
  //   password_confirm: "",
  //   role: "BARBER",
  // });

  /* Functions to be executed when the page is rendered */
  useEffect(() => {
    userRole === ROLES.ADMIN
      ? getUsers(ROLES.MESSENGER, type, setData, setLoading)
      : getCustomerMessengers(userId, setData, setLoading, type);
  }, []);

  return (
    <>
      <div className="contenedor_main">
        <div className="container">
          <div
            className="d-flex justify-content-between align-items-center mb-3"
            style={{ margin: "10px 20px" }}
          >
            <h1 className="_title" style={{ marginBottom: "0 important" }}>
              Mensajeros
            </h1>
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
                <span className="info_text text-white">Nombre</span>
              </div>
            </div>
            <div className="field">
              <div className="d-flex align-items-center justify-content-center">
                <span className="info_text text-white">Correo</span>
              </div>
            </div>
            <div className="field">
              <div className="d-flex align-items-center justify-content-center">
                <span className="info_text text-white">Teléfono</span>
              </div>
            </div>
            <div className="field">
              <div className="d-flex align-items-center justify-content-center">
                <span className="info_text text-white">Tipo y Número de documento</span>
              </div>
            </div>
            <div className="field">
              <div className="d-flex align-items-center justify-content-center">
                <span className="info_text text-white">Ubicación</span>
              </div>
            </div>
            {userRole === ROLES.ADMIN ? (
              <div className="field">
                <div className="d-flex align-items-center justify-content-center">
                  <span className="info_text text-white">Clientes asignados</span>
                </div>
              </div>
            ) : (
              ""
            )}
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
            {data
              ? data.map(
                  ({
                    user_id,
                    username,
                    urlImg,
                    phone,
                    email,
                    documentType,
                    documentNumber,
                    country,
                    department,
                    city,
                  }) => {
                    return (
                      <UserCard
                        key={user_id}
                        id={user_id}
                        username={username}
                        urlImg={urlImg}
                        email={email}
                        phone={phone}
                        documentNumber={documentNumber}
                        documentType={documentType}
                        country={country}
                        department={department}
                        city={city}
                        userRole={userRole}
                      />
                    );
                  },
                )
              : ""}
          </div>
        </div>
      </div>

      {/* Modal to create messengers */}
      {/* <UserModal
        edit={true}
        title='Contratar barbero'
        notifMessage='¡Contratación exitosa!'
        form={formNewBarber}
        newUser={newUser}
        modelRegister={modelRegister}
        registeredUser={registeredUser}
        setUser={setNewUser}
        setModelRegister={setModelRegister}
        setRegisteredUser={setRegisteredUser}
        setData={setData}
        setLoading={setLoading}
      /> */}
    </>
  );
};

export default MessengersView;
