import { PropTypes } from 'prop-types';

import ListItemActions from './ListItemActions';

const ListItemDetails = ({ item }) => {
    return (
        <tr data-testid='ListItemDetails'>
            <td>{item.name}</td>
            <td>{item.weight}</td>
            <td>{item.size}</td>
            <ListItemActions _id={item._id} />
        </tr>
    );
};

ListItemDetails.propTypes = {
    item: PropTypes.object.isRequired,
};

export default ListItemDetails;
