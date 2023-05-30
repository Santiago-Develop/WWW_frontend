import PropTypes from 'prop-types'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { Form, Popconfirm } from 'antd'
import { openNotificationWithIcon } from '../../../../helpers/openNotificationWithIcon'
import { OfficeModal } from '../OfficeModal'
import { getOffice } from '../../../../helpers/getOffice'
import { useState } from 'react'

/* Component used to display office information */
export const OfficeCard = ({ id, name, address, phone, getOffices }) => {
  const [formAddOffice] = Form.useForm()
  const [updateOffice, setUpdateOffice] = useState(false)

  /* Function to delete am office */
  const API_URL = import.meta.env.VITE_API_URL

  const onDeleteOffice = async (id) => {
    const requestOptions = {
      method: 'DELETE'
    }

    try {
      const response = await fetch(API_URL + 'api/office/' + id + '/', requestOptions)
      const { name } = await response.json()

      if (response.status === 200) {
        const _type = 'success'
        const message = 'Eliminación exitoso!'
        const description = `La sucursal ${name} ha sido eliminada`
        openNotificationWithIcon(_type, message, description)
        getOffices()
      }
    } catch (error) {
      const type = 'warning'
      const message = '¡Ocurrió algo inusual!'
      const description = error.message

      openNotificationWithIcon(type, message, description)
    }
  }

  const showModalUpdateOffice = async (id) => {
    localStorage.setItem('currentOffice', id)
    const data = await getOffice(id)
    setUpdateOffice(data)
  }

  return (
    <>
      <div className='userCard'>
        <div className='field'>
          <span className='info_text'>{name}</span>
        </div>
        <div className='field'>
          <span className='info_text'>{address}</span>
        </div>
        <div className='field'>
          <span className='info_text'>{phone}</span>
        </div>
        <div className='d-flex justify-content-center align-center' style={{ width: '110px' }}>
          <EditOutlined
            className='m-1'
            style={{ color: '#01329a', cursor: 'pointer' }}
            onClick={() => showModalUpdateOffice(id)}
          />
          <Popconfirm
            title='Eliminar sucursal'
            description='¿Quieres eliminar esta sucursal?'
            onConfirm={async () => await onDeleteOffice(id)}
            okText='Sí'
            cancelText='No'
          >
            <DeleteOutlined
              type='link'
              className='m-1'
              style={{ color: 'red', cursor: 'pointer' }}
              id={id}
            />
          </Popconfirm>
        </div>
      </div>

      <OfficeModal
        title='Editar sucursal'
        edit={true}
        form={formAddOffice}
        addOffice={updateOffice}
        setAddOffice={setUpdateOffice}
        getOffices={getOffices}
      />
    </>
  )
}

OfficeCard.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
}

export default OfficeCard
