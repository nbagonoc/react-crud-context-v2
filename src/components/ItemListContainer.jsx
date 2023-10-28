// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { Link, useParams, useNavigate } from 'react-router-dom';
import ItemListTable from './ItemListTable';

const ItemListContainer = () => {

    return (
        <div className="card">
            <div className="card-body">
                    <ItemListTable/>
            </div>
        </div>
    );
};

export default ItemListContainer;
