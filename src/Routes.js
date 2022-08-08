import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from "./pages/main/Main";
import Users from "./pages/users/Users";
import Lista from "./pages/Lista/Lista";

export default () => {

    return (
        <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/users' element={<Users/>} />
            <Route path='/lista' element={<Lista/>} />
        </Routes>
    );
}