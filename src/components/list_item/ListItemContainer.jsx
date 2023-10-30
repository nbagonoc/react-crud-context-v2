import ListItemTable from './ListItemTable';
import AlertMessage from '../partials/AlertMessage';

const ListItemContainer = () => {

    return (
        <div className="card">
            <div className="card-body">
                    <AlertMessage/>
                    <ListItemTable/>
            </div>
        </div>
    );
};

export default ListItemContainer;
