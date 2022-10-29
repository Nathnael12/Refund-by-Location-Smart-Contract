import web3 from './interactors/web3';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import React, { useEffect, useState } from 'react';
import contract from './interactors/payer';
import List from './pages/List';

function App() {

  useEffect(() => {
    const init = async () => {
    };

    init();

  }, []);

  return (
     <BrowserRouter>
      <Routes>

        <Route path={"/"} exact element={<List />} />
        <Route path={"/empList"} exact element={<List />} />
        <Route path={"/empDetail/:id"} exact element={<List />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
