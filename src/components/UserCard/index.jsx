/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import "./style.scss";
import { ROLES } from "../../utils/enums";
import { Select, Space } from "antd";
import { getUsers } from "../../helpers/getUsers";
import { useEffect, useState } from "react";
// import { setCustomers } from "../../helpers/setCustomers";
import { getCustomers } from "../../helpers/getCustomers";
/* Component used to display customer information */

export const UserCard = ({
  id,
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
  const [customers, setCustomers] = useState(false);
  const [generalCustomers, setGeneralCustomers] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL;


  const handleChange = async (customers = []) => {

    const body = {
      customers
    }

    const requestOptions = {
      method: "POST",
      body: JSON.stringify(body)
    };

    try {
      const res = await fetch(API_URL + "api/user_messengers/" + id + "/", requestOptions);
      await res.json();
    } catch (error) {
      console.log("error: ", error);
    }



  };

  const customerOptions = async () => {
    const data = await getUsers(ROLES.CUSTOMER, null, null, null, false);
    setGeneralCustomers(data);
  };

  useEffect(() => {
    customerOptions();
    getCustomers(id, setCustomers);
  }, []);


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
        {userRole === ROLES.ADMIN && !!customers ? (
          <div className="field">
            <Select
              mode="multiple"
              style={{ width: "90%" }}
              placeholder="Selecciona los clientes"
              onChange={handleChange}
              optionLabelProp="label"
              defaultValue={customers.map(c => c.user_id) || []}
            >
              {!!generalCustomers && generalCustomers.length > 0
                ? generalCustomers.map((generalCustomer) => {
                  return (
                    <>
                      <Option value={generalCustomer?.user_id} label={generalCustomer?.username} chec>
                        <Space>
                          <span role="img" aria-label={generalCustomer?.username}>
                            {generalCustomer?.username}
                          </span>
                        </Space>
                      </Option>
                    </>
                  );
                })
                : ''}
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
  username: PropTypes.string.isRequired,
  urlImg: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  birthDate: PropTypes.string
};

export default UserCard;
