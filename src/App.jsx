import './App.css'
import Home from './pages/Home'
import View from './pages/View'
import Create from './pages/Create'
import Edit from './pages/edit'
import Navigation from './components/partials/Navigation'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
    return (
        <BrowserRouter>
            <Navigation/>
            <div className="container mt-3">
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/view/:_id' element={<View/>} />
                    <Route path='/create' element={<Create/>} />
                    <Route path='/edit/:_id' element={<Edit/>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App