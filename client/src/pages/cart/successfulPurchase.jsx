import React, {useContext} from 'react'
import { SUGGESTEDCOFIGS } from '../build/SuggestedConfigData'
import { ShopContext } from '../../context/shop-context'
import { PRODUCTS } from '../../products'
import { BuildProduct } from '../build/list/buildProductList'



export const SuccessfulPurchase = () => {
    const  {allIDinBundle} = useContext(ShopContext)
    let displayid = allIDinBundle
    

  return (
    
    <div>
        <div className="Main-text">
            <h1>Thank you for your purchase.</h1>
        </div>
        <button className="checkout">
            Add your Config for others
        </button>
    </div>
  )
}
