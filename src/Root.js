import React from 'react'
import App from "./App"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Apropos from './components/Apropos'
import Projets from './components/Projets'
import Maitrises from './components/Maitrises'


const Root = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<App/>} />
                <Route path='/about' element={<Apropos/>} />
                <Route path='/project' element={<Projets/>} />
                <Route path='/maitrises' element={<Maitrises/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Root