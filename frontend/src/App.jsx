import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import CreateBoook from './pages/CreateBook';
import DeleteBoook from './pages/DeleteBook';
import EditBoook from './pages/EditBook';
import ShowBoook from './pages/ShowBook';


const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/books/create' element={<CreateBoook></CreateBoook>}></Route>
            <Route path='/books/details/:id' element={<ShowBoook></ShowBoook>}></Route>
            <Route path='/books/edit/:id' element={<EditBoook></EditBoook>}></Route>
            <Route path='/books/delete/:id' element={<DeleteBoook></DeleteBoook>}></Route>
        </Routes>
    )
};

export default App;