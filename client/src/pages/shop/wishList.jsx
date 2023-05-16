import React, {useContext} from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shop-context'
import { Product } from './product'


export const WishList = () => {

    const {wishlist} = useContext(ShopContext)

    return (
    <div className="wish-list-page">
        <h1>Here you can see all your wishes come true!</h1>
        <div className="products">
            {PRODUCTS.map((product) => {
                if (wishlist[product.id] !== 0) {
                return <Product data ={product}/>;
                }
            })}
            </div>
    </div>
  )
}
