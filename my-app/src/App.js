import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"


import Navbar from "./component/Navbar/Navbar";
import Item from "./component/items/Item";
import NotFound from './component/pages.js/NotFound';
import Home from './component/pages.js/Home';
import AddItem from './component/items/AddItem';
import EditItem from './component/items/EditItem';




function App() {
  return (

    <Router>
      <div className='app'>

        <Navbar></Navbar>
        {/* <h1> heoll</h1> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/items/add' element={<AddItem />} />
          <Route path='/items/edit/:ids' element={<EditItem />} />
          <Route path='/items/:ids' element={<Item />} />

        </Routes>

      </div>
    </Router>

  )
}



export default App;
