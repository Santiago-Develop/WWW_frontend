/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import "./style.scss";
import { ROLES } from "../../utils/enums";
import { Select, Space } from "antd";
import { getUsers } from "../../helpers/getUsers";
import { useEffect, useState } from "react";

/* Component used to display customer information */

export const UserCard = ({
  username,
  urlImg,
  email,
  phone,
  documentType,
  documentNumber,
  country,
  department,
  city,
  userRole,
}) => {
  const { Option } = Select;
  const [messengers, setMessengers] = useState(false);

  const handleChange = (value = []) => {
    console.log(`selected ${value}`);
  };

  const customerOptions = async () => {
    const data = await getUsers(ROLES.CUSTOMER, null, null, null, false);
    setMessengers(data);
    console.log("🚀 ~ file: index.jsx:33 ~ customerOptions ~ messengers:", messengers);
  };

  useEffect(() => {
    customerOptions();
  }, []);

  console.log("🚀 ~ file: index.jsx:33 ~ customerOptions ~ messengers:", messengers);
  return (
    <>
      <div className="userCard">
        <div className="d-flex align-items-center field">
          <img src={"data:image/png;base64," + urlImg} alt="avatar" className="userImg" />
          <span className="info_text _name">{username}</span>
        </div>
        <div className="field">
          <div className="d-flex align-items-center justify-content-center">
            <span className="info_text text-decoration-underline">{email}</span>
          </div>
        </div>
        <div className="field">
          <span className="info_text">(+57) {phone}</span>
        </div>

        <div className="field">
          <span className="info_text">
            {documentType} {documentNumber}
          </span>
        </div>
        <div className="field">
          <span className="info_text">
            {country}, {department}, {city}
          </span>
        </div>
        {userRole === ROLES.ADMIN ? (
          <div className="field">
            <Select
              mode="multiple"
              style={{ width: "90%" }}
              placeholder="Selecciona los clientes"
              onChange={handleChange}
              optionLabelProp="label"
            >
              {!!messengers && messengers.length >= 0
                ? messengers.map((messenger) => {
                    return (
                      <>
                        <Option value={messenger?.user_id} label={messenger?.username}>
                          <Space>
                            <span role="img" aria-label={messenger?.username}>
                              {messenger?.username}
                            </span>
                          </Space>
                        </Option>
                      </>
                    );
                  })
                : ""}
            </Select>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  urlImg: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  birthDate: PropTypes.string.isRequired,
};

export default UserCard;
