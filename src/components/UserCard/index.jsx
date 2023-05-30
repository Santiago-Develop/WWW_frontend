/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import "./style.scss";
import { ROLES } from "../../utils/enums";
import { Select, Space } from "antd";

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

  const handleChange = (value = []) => {
    console.log(`selected ${value}`);
  };

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
              style={{ width: "100%" }}
              placeholder="select one country"
              defaultValue={["china"]}
              onChange={handleChange}
              optionLabelProp="label"
            >
              <Option value="china" label="China">
                <Space>
                  <span role="img" aria-label="China">
                    🇨🇳
                  </span>
                  China (中国)
                </Space>
              </Option>
              <Option value="usa" label="USA">
                <Space>
                  <span role="img" aria-label="USA">
                    🇺🇸
                  </span>
                  USA (美国)
                </Space>
              </Option>
              <Option value="japan" label="Japan">
                <Space>
                  <span role="img" aria-label="Japan">
                    🇯🇵
                  </span>
                  Japan (日本)
                </Space>
              </Option>
              <Option value="korea" label="Korea">
                <Space>
                  <span role="img" aria-label="Korea">
                    🇰🇷
                  </span>
                  Korea (韩国)
                </Space>
              </Option>
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
