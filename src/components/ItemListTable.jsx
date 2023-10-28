import { Link, useParams, useNavigate } from 'react-router-dom'

const ItemListTable = () => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Weight</th>
                    <th>Size</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr key="">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <Link to="/" className="btn btn-secondary btn-sm me-1">
                            View
                        </Link>
                        <Link to="/" className="btn btn-secondary btn-sm me-1">
                            Edit
                        </Link>
                        <button className="btn btn-danger btn-sm">
                            Delete
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default ItemListTable
