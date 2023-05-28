import PropTypes from 'prop-types'

/* Component used to display office information */

export const OfficeCard = (
    {
        country,
        department,
        city
    }) => {
    return (
        <>
            <div className='userCard'>
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

OfficeCard.propTypes = {
    name: PropTypes.string.isRequired,
    urlImg: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    birthDate: PropTypes.string.isRequired
}

export default OfficeCard
