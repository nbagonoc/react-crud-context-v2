import { Link } from 'react-router-dom';

const ItemListDetails = ({ item }) => {
    return (
        <tr>
            <td>{item.name}</td>
            <td>{item.weight}</td>
            <td>{item.size}</td>
            <td>
                <Link to="/" className="btn btn-secondary btn-sm me-1">
                    View
                </Link>
                <Link to="/" className="btn btn-secondary btn-sm me-1">
                    Edit
                </Link>
                <button className="btn btn-danger btn-sm">Delete</button>
            </td>
        </tr>
    );
};

export default ItemListDetails;
