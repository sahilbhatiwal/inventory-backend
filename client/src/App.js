import "./App.css";
import React from "react";

import { BrowserRouter,Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";  

import Home from "./pages/home";
import Test from "./pages/Test";
import Chemical from "./pages/Chemical";
import ChemicalById from "./pages/ChemicalById";
function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/test" element={<Test/>} />
        <Route path="/chemical" element={<Chemical/>}  />
        <Route path="/chemical/:id/:chetan" element={<ChemicalById/>}  />
      </Routes >
    
    </BrowserRouter>
    
  );
}

export default App;
