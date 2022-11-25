import React from "react";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BillGates from './components/BillGates';
import AdaLovelace from "./components/AdaLovelace";
import DennisRitchie from './components/DennisRitchie';
import KenThompson from './components/KenThompson';
import LinusTorvalds from './components/LinusTorvalds';
import Nav from './components/Nav';


function App() {

  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav/>}/>
        <Route path="/BillGates" element={<BillGates />} />
        <Route path="/AdaLovelace" element={<AdaLovelace />} />
        <Route path="/DennisRitchie" element={<DennisRitchie />} />
        <Route path="/KenThompson" element={<KenThompson />} />
        <Route path="/LinusTorvalds" element={<LinusTorvalds />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App
