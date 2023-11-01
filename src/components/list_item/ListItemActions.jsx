import axios from 'axios'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'

import { API } from '../../API'
import { useGlobalContext } from '../../hooks/useGlobalContext'

const ListItemActions = ({ _id }) => {
    const { dispatch } = useGlobalContext()

    const handleDelete = async (e, _id) => {
        try {
            e.preventDefault()
            const response = await axios.delete(`${API}/${_id}`)
            const message = response.data.success.message
            dispatch({
                type: 'DELETE_ITEM',
                payload: {
                    _id,
                    alert: {
                        message,
                        success: true,
                    },
                },
            })
        } catch (err) {
            const message = err.response.data.errors.message
            dispatch({
                type: 'DELETE_ITEM',
                payload: {
                    alert: {
                        message,
                        success: false,
                    },
                },
            })
        }
    }

    return (
        <td>
            <Link to={`/view/${_id}`} className="btn btn-secondary btn-sm me-1">
                View
            </Link>
            <Link to={`/edit/${_id}`} className="btn btn-secondary btn-sm me-1">
                Edit
            </Link>
            <button
                onClick={(e) => handleDelete(e, _id)}
                className="btn btn-danger btn-sm"
            >
                Delete
            </button>
        </td>
    )
}

ListItemActions.propTypes = {
    _id: PropTypes.string.isRequired,
}

export default ListItemActions
