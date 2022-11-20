import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

// Componets
import Home from './Components/pages/Home';
import Login from './Components/pages/Login';
import Rigister from './Components/pages/Rigister';
import Dashboard from './Components/Dashboard';
import Sidebar from './Components/Dashboard/Sidebar'
import Header from './Components/Dashboard/Header';
import Content from './Components/Dashboard/Content';
import ProductVia from './Components/pages/ProductVia';
import Payments from './Components/pages/Payments';



const App = () => {
  return (
    <Router>
      <Fragment>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/Rigister" element={<Rigister />} />
            <Route exact path="/Dashboard" element={<Dashboard />} />
            <Route exact path="/Sidebar" element={<Sidebar />} />
            <Route exact path="/Header" element={<Header />} />
            <Route exact path="/Content" element={<Content />} />
            <Route exact path="/ProductVia" element={<ProductVia />} />
            <Route exact path="/Payments" element={<Payments />} />
        </Routes>
      </Fragment>
    </Router>
  )
}

export default App;