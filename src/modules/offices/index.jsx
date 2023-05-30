import { useEffect, useState } from 'react'
import { Spin, Empty, Form, Input, Button } from 'antd'
import { onSearch } from '../../helpers/onSearch'
import { UserModal } from '../../components/UserModal'
import { handleSetState } from '../../helpers/handleSetState'
import { backUpLocalStorage } from '../../helpers/backUpLocalStorage'
import { setLocalStorage } from '../../helpers/setLocalStorage'
import { OfficeModal } from './components/OfficeModal'
import OfficeCard from './components/OfficeCard/index.jsx'
import '../../style.scss'
import './style.scss'

/* Component used to display each of the barber */

const OfficesView = () => {

  /* General states */
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const type = 'offices'

  const [formNewBarber] = Form.useForm()
  const [formAddOffice] = Form.useForm()
  const [registeredUser, setRegisteredUser] = useState(false)
  const [addOffice, setAddOffice] = useState(false)
  const [modelRegister, setModelRegister] = useState(false)
  const [newUser, setNewUser] = useState({
    name: '',
    documentNumber: '',
    phone: '',
    birthDate: '',
    urlImg: '',
    email: '',
    password: '',
    password_confirm: '',
    role: 'BARBER'
  })

  const getOffices = async () => {
    const API_URL = import.meta.env.VITE_API_URL;

    const requestOptions = {
      method: "GET",
    };

    const id = localStorage.getItem("id");

    try {
      const res = await fetch(API_URL + "api/user_offices/" + id + "/", requestOptions);
      let data = await res.json();
      setLoading(true);
      setData(data);
      const { _id, _name, _role, _urlImg, _token } = backUpLocalStorage();
      setLocalStorage(_id, _name, _role, _urlImg, _token);
      localStorage.setItem(type, JSON.stringify(data));
    } catch (error) {
      console.log("error: ", error);
    }
  };

  /* Functions to be executed when the page is rendered */
  useEffect(() => {
    getOffices()
  }, [])

  return (
    <>
      <div className='contenedor_main'>
        <div className='container'>
          <div
            className='d-flex justify-content-between align-items-center mb-3'
            style={{ margin: '10px 20px' }}
          >
            <h1 className='_title' style={{ marginBottom: '0 important' }}>
              Sucursales
            </h1>
            <Button type='primary' onClick={() => handleSetState(true, setModelRegister)}>
              Solicitar pedido
            </Button>
            <Button type='primary' onClick={() => handleSetState(true, setAddOffice)}>
              Agregar sucursal
            </Button>
            <Input
              placeholder='Buscar...'
              onChange={(event) => onSearch(event, setData, type)}
              style={{
                width: 400
              }}
            />
          </div>

          <div className='titles'>
            <div className='field'>
              <div className='d-flex align-items-center justify-content-center'>
                <span className='info_text text-white'>Nombre</span>
              </div>
            </div>
            <div className='field'>
              <div className='d-flex align-items-center justify-content-center'>
                <span className='info_text text-white'>Dirección</span>
              </div>
            </div>
            <div className='field'>
              <div className='d-flex align-items-center justify-content-center'>
                <span className='info_text text-white'>Teléfono</span>
              </div>
            </div>
            <div className='field'>
              <div className='d-flex align-items-center justify-content-center'>
                <span className='info_text text-white'>Acciones</span>
              </div>
            </div>
          </div>

          <div style={{ maxHeight: '77vh', overflowY: 'auto' }}>
            {!data && !loading ? (
              <Spin size='large' className='m-4'>
                <div className='content' />
              </Spin>
            ) : !!data && data.length < 1 ? (
              <Empty className='m-3' />
            ) : (
              data.map((
                {
                  id,
                  name,
                  address,
                  phone
                }) => {
                return (
                  <OfficeCard
                    key={id}
                    id={id}
                    name={name}
                    address={address}
                    phone={phone}
                    getOffices={getOffices}
                  />
                )
              })
            )}
          </div>
        </div>
      </div>

      {/* Modal to create messengers */}
      <UserModal
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
      />


      {/* Modal to add offices */}

      <OfficeModal
        title='Agregar sucursal'
        edit={false}
        form={formAddOffice}
        addOffice={addOffice}
        setAddOffice={setAddOffice}
        getOffices={getOffices}
      />
    </>
  )
}

export default OfficesView
