import React from 'react'
import { PRODUCTS } from '../../products';
import Product from './Product';
import "./shop.css";

const Shop = () => {
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1>products</h1>
        </div>
        <div className='products'> 
        {PRODUCTS.map((e)=>(
           <Product data={e}/>
    ))}
    </div>
    </div>
  )
}

export default Shop