import axios from 'axios';
import { useEffect } from 'react';

import { Api } from '../Api';
import { useGlobalContext } from '../hooks/useGlobalContext';
import ItemListDetails from './ItemListDetails';

const ItemListTable = () => {
    const {items, dispatch} = useGlobalContext()

    useEffect(() => {
        const getItems = async () => {
            try {
                const response = await axios.get(Api);
                const items = response.data;
                dispatch({type: 'SET_ITEMS', payload: {items}})
            } catch (err) {
                console.log(err); //just log error. No need to show to user
            }
        };
        getItems();
    }, [dispatch]);

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
            {items && items.length >= 1 ? (
                items.map((item) => (
                    <ItemListDetails
                        key={item._id}
                        item={item}
                    />
                ))
            ) : (
                <tr>
                    <td colSpan="4" className="text-center">
                        No items found... 
                    </td>
                </tr>
                )
            }
            </tbody>
        </table>
    );
};

export default ItemListTable;
