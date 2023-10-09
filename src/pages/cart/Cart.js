import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import CartItem from './CartItem'
import { shopcontext } from '../../context/ShopContext'
import "./cart.css"
import { useNavigate } from 'react-router-dom'

const Cart = (props) => {
  const {cartItem, totalCartAmount} = useContext(shopcontext)

  const getTotalAmount = totalCartAmount()

  const navigate = useNavigate()
  return (
    <div className='cart'>
      <div>
        <h1> Your cart Items</h1>
      </div>
      <div className='cartItems'>
      {PRODUCTS.map((e)=> {
        if(cartItem[e.id] !== 0){
       return <CartItem data={e} />
        }})}
      </div>
      {getTotalAmount > 0 ? (
          <div className='checkout'>
          <p>Subtotal : ${getTotalAmount}</p>
          <button onClick={()=> navigate("/")}>countinue shopping</button>
          <button>checkout</button>
        </div>
      ) : (
        <h1>Your Cart is empty </h1>
      )}
     
    </div>
  )
}

export default Cart