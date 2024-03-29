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
      </div>

    </Link>
  )
}

export default Navbar
