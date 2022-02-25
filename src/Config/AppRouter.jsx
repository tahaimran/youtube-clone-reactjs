import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import LandingPage from '../Components/LandingPage';
import SearchPage from '../Components/SearchPage'
import Header from '../Components/Header';
function AppRouter() {
    return (
        <>
            <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path='/' element={<LandingPage/>} />
                </Routes>
                <Routes>
                    <Route path='/search/:searchTerm' element={<SearchPage/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter