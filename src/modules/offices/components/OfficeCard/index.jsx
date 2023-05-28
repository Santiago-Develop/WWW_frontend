import PropTypes from 'prop-types'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { Popconfirm } from 'antd'

/* Component used to display office information */
export const OfficeCard = (
    {
        id,
        name,
        address,
        phone
    }) => {
        
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
                        // onClick={() => showModalUpdateBarber(id)}
                    />
                    <Popconfirm
                        title='Despedir barbero'
                        description='¿Quieres despedir a este barbero?'
                        // onConfirm={async () => await onDeleteBarber(id)}
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
        </>
    )
}

OfficeCard.propTypes = {
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
}

export default OfficeCard
