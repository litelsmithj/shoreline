import React, { useEffect, useState } from 'react';
import Link from 'next/link';
// import {client} from '../lib/client'
import { AiOutlineShopping } from 'react-icons/ai'
// import logo from '../public/assets/shoreline_logo2.png'
import { urlFor, client } from '../lib/client'

import Cart from './Cart';
import { useStateContext} from '../context/StateContext';

const Navbar = ({logo}) => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  
  return (
    <div className="navbar-container">
      
      <Link href="/">
        <div className="logo">
          <img src="/assets/shoreline_logo3.png" className="logo-image" alt="shoreline"/>
          <h1 className='logo-text'>The Shoreline</h1>
        </div>
      </Link>

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "logo"]';
  const logo = await client.fetch(query);
  console.log('hello')
  return {
    props: {logo}
  }
}

export default Navbar