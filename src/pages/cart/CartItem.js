import React, { useContext } from 'react'
import "./cart.css"
import { shopcontext } from '../../context/ShopContext'


const CartItem = (props) => {
  const {id,productName,price,productImage} = props.data

  const {addToCart,cartItem,removefromCart, updatecartCount} = useContext(shopcontext)

  return (
    <div className='cartItem'>
        <img src={productImage} />
        <div className='description'>
            <p><b>{productName}</b></p>
            <p> ${price}</p>
            <div className='countHandler'>
                <button onClick={()=> removefromCart(id)}> - </button>
                <input value={cartItem[id]} onChange={(e)=> updatecartCount(Number(e.target.value),id )}/>
                <button onClick={()=> addToCart(id)}> + </button>
            </div>
        </div>
    </div>
  )
}

export default CartItem