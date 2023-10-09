import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../products';

export const shopcontext = createContext(null);

const getDefaultCart =()=>{
   let cart = {};
    for(let i=1; i< PRODUCTS.length + 1 ;i++){
     cart[i] = 0
    }
    return cart
}


const ShopContextProvider = (props) => {
    const[cartItem,setCartItem] = useState(getDefaultCart());

    const totalCartAmount =()=>{
        let amount=0;
        for(const items in cartItem){
            if(cartItem[items] > 0){
                let otherinfo = PRODUCTS.find((product) => product.id === Number(items));
                amount += cartItem[items] * otherinfo.price
            }
        }
        return amount
    }

    const addToCart=(itemId)=>{
        setCartItem((prev)=>({...prev , [itemId]: prev[itemId] +1 }))
    }

    const removefromCart=(itemId)=>{
        setCartItem((prev)=>({...prev , [itemId]: prev[itemId] - 1 }))
    }

    const updatecartCount=(newAmount, itemId)=>{
        setCartItem((prev) => ({...prev ,[itemId] : newAmount}))
    }
    const contextValue= {cartItem , addToCart , removefromCart , updatecartCount ,totalCartAmount}

    console.log(cartItem)
  return (
    <shopcontext.Provider value={contextValue}>{props.children}</shopcontext.Provider>
  )
}

export default ShopContextProvider