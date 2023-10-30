import ItemListTable from './ItemListTable';
import AlertMessage from './partials/AlertMessage';

const ItemListContainer = () => {

    return (
        <div className="card">
            <div className="card-body">
                    <AlertMessage/>
                    <ItemListTable/>
            </div>
        </div>
    );
};

export default ItemListContainer;
