
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AddPost from './pages/AddPost';


function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>} ></Route>
                <Route path='/add' element={<AddPost/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
