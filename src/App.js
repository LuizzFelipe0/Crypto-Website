import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Coins from './components/Coins/Coins';
import Navbar from './components/NavBar/Navbar';
import { Routes, Route, Link } from 'react-router-dom';
import Coin from './components/routes/Coin';
import Trending  from './components/Trending/Trending';
import './index.css';

function App() {

  const [coins, setCoins] = useState([])
  
  const [trending, setTrending] = useState({})

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false`
 
  const urlTrending = `https://api.coingecko.com/api/v3/search/trending`;

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
      console.log(response.data[0])
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  useEffect(() => {
    axios.get(urlTrending).then((response) => {
      setTrending(response.data)
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
        <Route path='/trending' element={<Trending trending={trending} />} />

      </Routes>

    </>
  );
}

export default App;
