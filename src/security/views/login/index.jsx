import { useEffect, useState } from "react";
import { handleInputChange } from "../../../helpers/handleInputChange";
import { openNotificationWithIcon } from "../../../helpers/openNotificationWithIcon";
import { handleSetState } from "../../../helpers/handleSetState";
import { resetForm } from "../../../helpers/resetForm";
import { normFile, setUrlImgBase64 } from "../../../helpers/handleUpload";
import {
  Modal,
  Form,
  Input,
  Button,
  Col,
  Row,
  Upload,
  // DatePicker,
  Spin,
  message,
  Select,
} from "antd";
import {
  UploadOutlined,
  LoadingOutlined,
  LockOutlined,
  UserOutlined,
} from "@ant-design/icons";
import axios from "axios";
import PropTypes from "prop-types";
import "./style.scss";
import { getRole } from "../../../helpers/getRole";
import { optionsSelectRole } from "../../../helpers/optionsSelectRole";
import { getSelectInfo } from "../../../helpers/getSelectInfo";
import { ROLES } from "../../../utils/enums";
import { headers } from "../../../utils/headers";
/* Component used to validate user input */

const LoginView = ({ setToken }) => {
  /* General states for receiving user data */
  const API_URL = import.meta.env.VITE_API_URL;
  const [formCustomer] = Form.useForm();
  const [user, setUser] = useState(false);
  const [registeredUser, setRegisteredUser] = useState(false);
  const [modelRegister, setModelRegister] = useState(false);
  const [newUser, setNewUser] = useState({
    username: "",
    documentNumber: "",
    phone: "",
    urlImg: "",
    email: "",
    role: ROLES.CUSTOMER,
    documentType: "",
    country: 1,
    department: 30,
    city: 30,
    password: "",
    password_confirm: "",
    is_superuser: false,
  });
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  const [countriesOptions, setCountriesOptions] = useState([]);
  const [departmentsOptions, setDepartmentsOptions] = useState([]);
  const [citiesOptions, setCitiesOptions] = useState([]);

  useEffect(() => {
    getSelectInfo("api/country", setCountriesOptions);
    getSelectInfo("api/department", setDepartmentsOptions);
    getSelectInfo("api/city", setCitiesOptions);
  }, []);

  /* Function to send the data entered by the user to know if they can enter or not */
  const handleLoginSubmit = async () => {
    try {
      setUser(!user);

      const body = {
        email: loginUser.email,
        password: loginUser.password,
      };

      const options = {
        method: "POST",
        headers,
        withCredentials: true,
        body: JSON.stringify(body),
      };

      let response = await fetch(`${API_URL}login`, options);

      let data = await response.json();
      data = JSON.parse(data);
      console.log("🚀 ~ file: index.jsx:80 ~ handleLoginSubmit ~ data:", data);

      const id = data.id;
      const name = data.name;
      const role = data.role;
      const urlImg = data.urlImg;
      const token = "exists";
      /* Local storage variables */
      localStorage.setItem("id", id);
      localStorage.setItem("name", name);
      localStorage.setItem("role", role);
      localStorage.setItem("urlImg", urlImg);

      setTimeout(() => {
        localStorage.setItem("token", token);
        setToken(token);
        setUser(!user);
      }, 1000);
    } catch (error) {
      const type = "warning";
      const message = "¡Ocurrió algo inusual!";
      const description =
        "Las credenciales ingresadas con incorrectas, ¡Inténtalo de nuevo!";
      console.log(error);
      setUser(false);
      openNotificationWithIcon(type, message, description);
    }
  };

  const handleRegisterSubmit = async () => {
    if (newUser.role === ROLES.CUSTOMER) {
      newUser.documentType = "CC";
    } else {
      newUser.documentType = "NIT";
    }

    let type = "";
    let message = "";
    let description = "";

    if (newUser.password === newUser.password_confirm) {
      type = "success";
      message = "¡Registro exitoso!";
      description = `Bienvenido ${newUser.username}`;

      let user = Object.assign({}, newUser);
      delete user.password_confirm;

      try {
        await axios.post(`${API_URL}register`, user);
        setRegisteredUser(true);
        setTimeout(() => {
          handleSetState(false, setModelRegister);
          setRegisteredUser(false);
          openNotificationWithIcon(type, message, description);
          resetForm(formCustomer);
        }, 1000);
      } catch (error) {
        type = "warning";
        message = "¡Hubo un error!";
        description = error.message;
        openNotificationWithIcon(type, message, description);
      }
    } else {
      type = "warning";
      message = "¡Las contraseñas no son iguales!";
      description = "Inténtalo de nuevo";
      openNotificationWithIcon(type, message, description);
    }
  };

  return (
    <>
      <section className="background h-100">
        <div className="h-100">
          <div className="row g-0 align-items-center justify-content-center h-100 px-5">
            <div className="col-xxl-3 col-xl-5 col-lg-5 col-md-7 col-sm-9 col-lg-auto sw-lg-70">
              <div className="card shadow-lg">
                <div className="card-body p-3">
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="d-flex container-title p-3 m-2">
                      <span className="fs-4 card-title fw-bold">
                        Bienvenido
                      </span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center align-items-center m-3">
                    <Form
                      name="normal_login"
                      className="login-form"
                      initialValues={{ remember: true }}
                      onFinish={() => void handleLoginSubmit()}
                    >
                      <Form.Item
                        name="email"
                        rules={[
                          { required: true, message: "Ingresa tu correo!" },
                        ]}
                      >
                        <Input
                          prefix={
                            <UserOutlined className="site-form-item-icon" />
                          }
                          placeholder="Correo"
                          onChange={(event) =>
                            handleInputChange(
                              loginUser,
                              setLoginUser,
                              null,
                              null,
                              null,
                              event
                            )
                          }
                          value={loginUser.email}
                          name="email"
                        />
                      </Form.Item>
                      <Form.Item
                        name="password"
                        rules={[
                          { required: true, message: "Ingresa tu contraseña!" },
                        ]}
                      >
                        <Input
                          prefix={
                            <LockOutlined className="site-form-item-icon" />
                          }
                          type="password"
                          placeholder="Contraseña"
                          onChange={(event) =>
                            handleInputChange(
                              loginUser,
                              setLoginUser,
                              null,
                              null,
                              null,
                              event
                            )
                          }
                          value={loginUser.password}
                          name="password"
                        />
                      </Form.Item>
                      <Form.Item style={{ color: "white", marginBottom: "0" }}>
                        <Button
                          type="primary"
                          htmlType="submit"
                          className="login-form-button btn-primary"
                          disabled={user ? true : false}
                        >
                          Ingresar
                        </Button>
                        O{" "}
                        <a
                          className=""
                          onClick={() => handleSetState(true, setModelRegister)}
                          style={{ color: "#f6553f" }}
                        >
                          Registrarse
                        </a>
                      </Form.Item>
                      <div className={user ? "text-center mt-3" : "loading"}>
                        <Spin
                          indicator={
                            <LoadingOutlined style={{ fontSize: 24 }} spin />
                          }
                        />
                      </div>
                    </Form>
                  </div>
                </div>
                <div className="card-footer py-3 border-0">
                  <div className="text-center text-white">
                    Todos los derechos reservados &copy; 2023
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal
        centered
        open={modelRegister}
        title="Registrar usuario"
        onCancel={() => handleSetState(false, setModelRegister)}
        width="50vw"
        footer={[]}
      >
        <Form
          form={formCustomer}
          name="crearCliente"
          className="crearCliente"
          id="crearCliente"
          onFinish={() => void handleRegisterSubmit()}
          onFinishFailed={() => {
            const type = "warning";
            const message = "¡No se pudo completar el registro!";
            const description =
              "Algunos campos obligatorios no están diligenciados";
            openNotificationWithIcon(type, message, description);
          }}
        >
          <Row className="col-12 col-md-12 d-flex flex-column align-items-center">
            <div className="d-flex justify-content-center form_r">
              <Col span={12} className="m-3 col_r">
                <Form.Item
                  name="username"
                  label="Nombre de usuario"
                  rules={[
                    { required: true, message: "Este campo es obligatorio" },
                  ]}
                  className="d-flex flex-column"
                >
                  <Input
                    type="text"
                    pattern="^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+${2,60}"
                    title="Ingresa un nombre válido"
                    onChange={(event) =>
                      handleInputChange(
                        newUser,
                        setNewUser,
                        null,
                        null,
                        null,
                        event
                      )
                    }
                    name="username"
                  />
                </Form.Item>
                <Form.Item
                  name="email"
                  label="Correo electrónico"
                  rules={[
                    { required: true, message: "Este campo es obligatorio" },
                  ]}
                  className="d-flex flex-column"
                >
                  <Input
                    type="email"
                    pattern="^[^@]+@[^@]+\.[a-zA-Z]{2,}$"
                    title="Ingresa un correo válido"
                    onChange={(event) =>
                      handleInputChange(
                        newUser,
                        setNewUser,
                        null,
                        null,
                        null,
                        event
                      )
                    }
                    name="email"
                  />
                </Form.Item>
                <Form.Item
                  name="documentNumber"
                  label="Número de documento"
                  rules={[
                    { required: true, message: "Este campo es obligatorio" },
                  ]}
                  className="d-flex flex-column"
                >
                  <Input
                    type="text"
                    pattern="^[0-9]{6,10}$"
                    title="Ingresa un número de cédula válido"
                    onChange={(event) =>
                      handleInputChange(
                        newUser,
                        setNewUser,
                        null,
                        null,
                        null,
                        event
                      )
                    }
                    name="documentNumber"
                    placeholder="NIT (Cliente) CC (Mensajero)"
                  />
                </Form.Item>

                <Form.Item
                  name="password"
                  label="Contraseña"
                  rules={[
                    { required: true, message: "Este campo es obligatorio" },
                  ]}
                  className="d-flex flex-column"
                >
                  <Input.Password
                    type="password"
                    pattern="^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})(?=(?:.*[@$?¡\-_~`^{}¿\+*#]){1})\S{8,16}$"
                    title="La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una mayúscula y al menos un caracter especial."
                    onChange={(event) =>
                      handleInputChange(
                        newUser,
                        setNewUser,
                        null,
                        null,
                        null,
                        event
                      )
                    }
                    name="password"
                  />
                </Form.Item>
                <Form.Item
                  name="password_confirm"
                  label="Confirmar contraseña"
                  rules={[
                    { required: true, message: "Este campo es obligatorio" },
                  ]}
                  className="d-flex flex-column"
                >
                  <Input.Password
                    type="password"
                    pattern="^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})(?=(?:.*[@$?¡\-_~`^{}¿\+*#]){1})\S{8,16}$"
                    title="La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una mayúscula y al menos un caracter especial."
                    onChange={(event) =>
                      handleInputChange(
                        newUser,
                        setNewUser,
                        null,
                        null,
                        null,
                        event
                      )
                    }
                    name="password_confirm"
                  />
                </Form.Item>
                <Form.Item
                  accept="image/svg+xml, image/png, image/jpeg, image/jpg"
                  name="urlImg"
                  label="Imágen de perfil"
                  valuePropName="fileList"
                  getValueFromEvent={(event) => normFile(event)}
                  rules={[
                    { required: true, message: "Este campo es obligatorio" },
                  ]}
                  className="d-flex text-center"
                >
                  <Upload
                    style={{ maxWidth: "200px" }}
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    beforeUpload={async (file) => {
                      const notImage =
                        file.type === "image/jpg" ||
                        file.type === "image/jpeg" ||
                        file.type === "image/png" ||
                        file.type === "image/svg+xml";
                      if (!notImage) {
                        await message.error(
                          `${file.name} no es un archivo válido`
                        );
                      } else {
                        await message.success(
                          `${file.name} añadido exitosamente`
                        );
                        setUrlImgBase64(file, newUser, setNewUser);
                      }
                      return notImage || Upload.LIST_IGNORE;
                    }}
                    name="urlImg"
                    listType="picture"
                    maxCount={1}
                    id="urlImg"
                  >
                    <Button icon={<UploadOutlined />}>Subir imágen</Button>
                  </Upload>
                </Form.Item>
              </Col>
              <Col span={12} className="m-3 col_r">
                <Form.Item
                  name="phone"
                  label="Número de celular"
                  rules={[
                    { required: true, message: "Este campo es obligatorio" },
                  ]}
                  className="d-flex flex-column"
                >
                  <Input
                    type="text"
                    pattern="([0-9]{10})"
                    title="Ingresa un número de celular válido"
                    onChange={(event) =>
                      handleInputChange(
                        newUser,
                        setNewUser,
                        null,
                        null,
                        null,
                        event
                      )
                    }
                    name="phone"
                  />
                </Form.Item>

                <Form.Item
                  name="role"
                  label="Tipo de usuario"
                  // rules={[{ required: true, message: 'Este campo es obligatorio' }]}
                  className="d-flex flex-column"
                >
                  <Select
                    defaultValue={getRole(newUser.role)}
                    onChange={(value) => {
                      handleInputChange(newUser, setUser, null, null, null, {
                        target: {
                          name: "role",
                          value,
                        },
                      });
                    }}
                    options={optionsSelectRole}
                    name="role"
                  />
                </Form.Item>

                <Form.Item
                  name="country"
                  label="País"
                  // rules={[{ required: true, message: 'Este campo es obligatorio' }]}
                  className="d-flex flex-column"
                  disabled={true}
                >
                  <Select
                    defaultValue={"Colombia"}
                    options={countriesOptions}
                    name="country"
                  />
                </Form.Item>

                <Form.Item
                  name="roldepartmente"
                  label="Departamento"
                  // rules={[{ required: true, message: 'Este campo es obligatorio' }]}
                  className="d-flex flex-column"
                >
                  <Select
                    defaultValue={"Valle del Cauca"}
                    onChange={(value) =>
                      handleInputChange(newUser, setUser, null, null, null, {
                        target: {
                          name: "department",
                          value,
                        },
                      })
                    }
                    options={departmentsOptions}
                    name="department"
                  />
                </Form.Item>

                <Form.Item
                  name="city"
                  label="Ciudad"
                  // rules={[{ required: true, message: 'Este campo es obligatorio' }]}
                  className="d-flex flex-column"
                >
                  <Select
                    defaultValue={"Cali"}
                    onChange={(value) =>
                      handleInputChange(newUser, setUser, null, null, null, {
                        target: {
                          name: "city",
                          value,
                        },
                      })
                    }
                    options={citiesOptions}
                    name="city"
                  />
                </Form.Item>
              </Col>
            </div>
          </Row>

          <div className="d-flex justify-content-center">
            <Form.Item>
              <Button
                htmlType="button"
                className="m-2"
                onClick={() => resetForm(formCustomer)}
                disabled={registeredUser ? true : false}
              >
                Limpiar
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                disabled={registeredUser ? true : false}
                className="btnCrearCliente m-2"
                style={{ background: "#f6553f" }}
              >
                Crear
              </Button>
            </Form.Item>
          </div>

          <div className={registeredUser ? "text-center mt-3" : "loading"}>
            <Spin
              indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
            />
          </div>
        </Form>
      </Modal>
    </>
  );
};

LoginView.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default LoginView;
