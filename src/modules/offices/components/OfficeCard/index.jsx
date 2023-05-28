import PropTypes from 'prop-types'

/* Component used to display office information */

export const OfficeCard = (
    {
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
