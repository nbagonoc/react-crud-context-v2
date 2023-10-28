import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Api } from './Api';

import ItemListDetails from './ItemListDetails';

const ItemListTable = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getItems = async () => {
            try {
                const response = await axios.get(Api);
                setItems(response.data);
            } catch (err) {
                console.error(err);
            }
        };
        getItems();
    }, []);

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
                {items.map((item) => (
                    <ItemListDetails
                        key={item.id ? item.id : item._id}
                        item={item}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default ItemListTable;
