import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home";
import Test from "./pages/Test";
import Chemical from "./pages/Chemicals";
import ChemicalById from "./pages/ChemicalById";
import CreateChemical from "./pages/CreateChemical";
import UpdateChemical from "./pages/UpdateChemical";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/test" element={<Test />} />
        <Route exact path="/chemical" element={<Chemical />} />
        <Route exact path="/chemical/create" element={<CreateChemical />} />
        <Route exact path="/chemical/update/:id" element={<UpdateChemical />} />
        <Route exact path="/chemical/:id" element={<ChemicalById />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
