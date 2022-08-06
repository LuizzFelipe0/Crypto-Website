import React from 'react';
import './Navbar.css'
import { FaCoins } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Link to='/'>
      <div className='navbar'>
        <FaCoins className='icon' />
        <h1>Luiz's <span className='span'>CryptoCoins</span></h1>
        <Link to='trending'><p className='trending'>Trending Coins</p></Link>
      </div>

    </Link>
  )
}

export default Navbar
