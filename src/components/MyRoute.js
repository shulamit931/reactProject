import React from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import List from "./List";
import Login from "./Login";
import Page from "./Page";
import Home from './Home'

export default function MyRoute() {

    return (
        <div>
            <nav>
                <Link to="/">HOME</Link><br />
                <Link to="/page">PAGE</Link><br />
            </nav>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/page' element={<Page />} />

            </Routes>
        </div>
    )


}