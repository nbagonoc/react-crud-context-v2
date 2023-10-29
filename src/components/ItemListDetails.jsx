import { PropTypes } from 'prop-types';

import ItemListActions from './ItemListActions';

const ItemListDetails = ({ item }) => {
    return (
        <tr>
            <td>{item.name}</td>
            <td>{item.weight}</td>
            <td>{item.size}</td>
            <ItemListActions _id={item._id} />
        </tr>
    );
};

ItemListDetails.propTypes = {
    item: PropTypes.object.isRequired,
};

export default ItemListDetails;
