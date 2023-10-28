import './App.css'
import Home from './pages/Home'
// import View from './pages/View'
import Create from './pages/Create'
// import Edit from './pages/edit'
import Navigation from './components/Navigation'
import {GlobalProvider} from './context/GlobalState';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
    return (
        <GlobalProvider>
            <BrowserRouter>
                <Navigation/>
                <div className="container mt-3">
                    <Routes>
                        <Route path='/' element={<Home/>} />
                        {/* <Route path='/view/:id' element={<View/>} /> */}
                        <Route path='/create' element={<Create/>} />
                        {/* <Route path='/edit/:id' element={<Edit/>} /> */}
                    </Routes>
                </div>
            </BrowserRouter>
        </GlobalProvider>
    )
}

export default App