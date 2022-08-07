import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from "./pages/main/Main";
import Users from "./pages/users/Users";

export default () => {

    return (
        <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/users' element={<Users/>} />
        </Routes>
    );
}