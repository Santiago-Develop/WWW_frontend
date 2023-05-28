import PropTypes from 'prop-types'
import './style.scss'

/* Component used to display customer information */

export const UserCard = (
  {
    username,
    urlImg,
    email,
    phone,
    documentType,
    documentNumber,
    country,
    department,
    city }) => {
  return (
    <>
      <div className='userCard'>
        <div className='d-flex align-items-center field'>
          <img src={'data:image/png;base64,' + urlImg} alt='avatar' className='userImg' />
          <span className='info_text _name'>{username}</span>
        </div>
        <div className='field'>
          <div className='d-flex align-items-center justify-content-center'>
            <span className='info_text text-decoration-underline'>{email}</span>
          </div>
        </div>
        <div className='field'>
          <span className='info_text'>(+57) {phone}</span>
        </div>

        <div className='field'>
          <span className='info_text'>{documentType} {documentNumber}</span>
        </div>
        <div className='field'>
          <span className='info_text'>{country}</span>
        </div>
        <div className='field'>
          <span className='info_text'>{department}</span>
        </div>
        <div className='field'>
          <span className='info_text'>{city}</span>
        </div>
      </div>
    </>
  )
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  urlImg: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  birthDate: PropTypes.string.isRequired
}

export default UserCard
