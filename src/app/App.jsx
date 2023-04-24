import React, {useEffect} from "react";
import './App.scss';
import Home from "../components/Pages/Home";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPage from "../components/Pages/MainPage";
import {ThemeContext, themes} from "../api/Theme";
import musicDB from "../db/music";
import {useDispatch, useSelector} from "react-redux";
import {setPlaylist} from "../actions/actions";
import Login from "../components/Pages/Login";
import SignUp from "../components/Pages/SignUp";
import Profile from "../components/Pages/Profile";
import Logout from "../components/fragment/Logout";
import Suggestions from "../components/Pages/Suggestions";
import Search from "../components/Pages/Search";

const App = () => {

    return (
        <ThemeContext.Provider value={themes.light}>
            <>
                <Router>
                    <Routes>
                        <Route path='/' element={<MainPage/>}></Route>
                        <Route path='/login' element={<Login/>}></Route>
                        <Route path='/signup' element={<SignUp/>}></Route>
                        <Route path='/home' element={<Home/>}/>
                        <Route path='/home/profile' element={<Profile/>}/>
                        <Route path='/home/logout' element={<Logout/>}/>
                        <Route path='/home/suggestions' element={<Suggestions/>}/>
                        <Route path='/search' element={<Search/>}/>
                    </Routes>   
                </Router>
            </>
        </ThemeContext.Provider>
    );
}

export default App;