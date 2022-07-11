import React from 'react'
import CoinItem from './CoinItem';
import './Coins.css';
import { Link } from 'react-router-dom';
import Coin from '../routes/Coin'

const Coins = (props) => {
  return (
    <div className='container'>
      <div>
        <div className='header'>
          <p> # </p>
          <p className='coin-name'>CryptoCoin</p>
          <p>Price</p>
          <p>24 Hours Change</p>
          <p className='hm'>Volume</p>
          <p className='hm'>Market Cap</p>
        </div>

        {props.coins.map(coins => {
          return (
            <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id} >
              <CoinItem coins={coins} />
            </Link>
          )
        })}

      </div>
    </div>
  )
}

export default Coins;