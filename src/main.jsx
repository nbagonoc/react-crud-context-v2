import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {GlobalProvider} from './context/GlobalContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <GlobalProvider>
        <App />
    </GlobalProvider>
)
