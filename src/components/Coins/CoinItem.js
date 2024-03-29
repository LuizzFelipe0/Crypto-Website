import React from 'react';
import './Coins.css';

const CoinItem = (props) => {
  return (
    <div className='coin-row'>
      <p>{props.coins.market_cap_rank}</p>
      <div className='Img-symbol'>
        <img src={props.coins.image} alt='Image'/>
        <p>{props.coins.symbol.toUpperCase()}</p>
      </div>
      <p>{props.coins.current_price.toLocaleString()}</p>
      <p>{props.coins.price_change_percentage_24h.toFixed(2)} %</p>
      <p className='hm'>$ { props.coins.total_volume.toLocaleString()}</p>
      <p className='hm'>$ { props.coins.market_cap.toLocaleString()}</p>

    </div>
  )
}

export default CoinItem
