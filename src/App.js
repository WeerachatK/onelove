import NavBar from './components/navbar/navbar';
import SaleOrder from './components/saleOrder/saleOrder';
import SaleAmounts from './components/saleAmounts/saleAmounts';
import CheckAmount from './components/checkAmount/checkAmount';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<SaleOrder />} />
        <Route path="/saleAmounts" element={<SaleAmounts />} />
        <Route path="/checkAmount" element={<CheckAmount />} />
      </Routes>
    </>
  );
}

export default App;

