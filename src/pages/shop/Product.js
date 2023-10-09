import React, { useContext } from 'react'
import { shopcontext } from '../../context/ShopContext'

const Product = (props) => {
    const {id,productName,price,productImage} = props.data

    const {addToCart,cartItem} = useContext(shopcontext)

    const cartAmount = cartItem[id]
  return (
    <div className='product'>
        <img src={productImage} />
        <div className='description'><p><b>{productName}</b></p>
        <p>${price}</p>
        <button className='addToCartBttn' onClick={()=> addToCart(id)}>Add to Cart{cartAmount > 0 && <>({cartAmount})</>}</button>
        </div>
    </div>
  )
}

export default Product