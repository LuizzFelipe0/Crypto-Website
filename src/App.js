import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Coins from './components/Coins/Coins';
import Navbar from './components/NavBar/Navbar';
import { Routes, Route, Link } from 'react-router-dom';
import Coin from './components/routes/Coin';
import './index.css';

function App() {

  const [coins, setCoins] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=120&page=1&sparkline=false'

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
      console.log(response.data[0])
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Coins coins={coins} />} />
        <Route path='coin' element={<Coin />}>
            <Route path=':coinId' element={<Coin />} />
        </Route>
      </Routes>

    </>
  );
}

export default App;
