import PropTypes from 'prop-types'

const ViewDetails = ({item}) => {
  return (
    <div>
      <p>Name: {item.name}</p>
      <p>Weight: {item.weight}</p>
      <p>Size: {item.size}</p>
    </div>
  )
}

ViewDetails.propTypes = {
  item: PropTypes.object.isRequired,
}

export default ViewDetails