import { useState, useEffect } from "react";
import { getUser } from "../../helpers/getUser";
import moment from "moment/moment";
import "./style.scss";
import { getRole } from "../../helpers/getRole";
import { Spin } from "antd";

export const UserProfile = () => {
  const [data, setData] = useState(false);
  const [loading, setLoading] = useState(true);

  const getUserData = async () => {
    const id = localStorage.getItem("id");
    const data = await getUser(id);
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="contenedor_main">
      <div className="container">
        <div
          className="d-flex justify-content-center align-items-center mb-3"
          style={{ margin: "10px 20px" }}
        >
          <h1 className="_title" style={{ marginBottom: "0 important" }}>
            Mi perfil
          </h1>
        </div>

        {
          !!loading
            ? (
              <Spin size="large" className="m-4" sty>
                <div className="content" style={{ height: "50px" }} />
              </Spin>
            )
            :
            (
              <div className="d-flex justify-content-center align-items-center">
                <div className="d-flex justify-content-center align-items-center flex-column cardProfile">
                  <img
                    src={data?.urlImg ? `data:image/png;base64,${data.urlImg}` : ""}
                    alt="My photo"
                    className="imgProfile"
                  />
                  <span className="name">{data.username}</span>
                  <span className="subfields">{data.email}</span>
                  <span className="subfields">{data.phone}</span>
                  <span className="subfields">{moment(data.birthDate).calendar()}</span>
                  <span className="subfields">{getRole(data.role)}</span>
                </div>
              </div>
            )
        }
      </div>
    </div>
  );
};
