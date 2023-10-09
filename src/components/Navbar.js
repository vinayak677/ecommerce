import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import { shopcontext } from '../context/ShopContext';

export const Navbar = () => {
  const { cartItem } = useContext(shopcontext);

  // Calculate the total number of selected cart items
  const selectedItemCount = Object.values(cartItem).reduce((total, quantity) => total + (quantity > 0 ? 1 : 0), 0);

  return (
    <div className='navbar'>
      <div className='links'>
        <Link to="/">shop</Link>
        <Link to="/cart">
          <div className="cart-icon">
            <ShoppingCart size={25} />
            {selectedItemCount > 0 && <span style={{color:"yellow"}} className="cart-count">{selectedItemCount}</span>}
          </div>
        </Link>
      </div>
    </div>
  );
};
