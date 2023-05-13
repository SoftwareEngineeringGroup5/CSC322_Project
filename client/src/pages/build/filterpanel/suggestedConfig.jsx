<<<<<<< HEAD
import React from 'react'
import { SUGGESTEDCOFIGS } from '../SuggestedConfigData'


export const SuggestedConfig = (props) => {
  const {id, configName} = props.data

  return (
    <p>
      {configName}
    </p>
=======
import React, { useContext } from 'react'
import { ShopContext } from '../../../context/shop-context'


export const SuggestedConfig = (props) => {
  const {id, configName,selectedProducts,rating, bundledproductsuggest} = props.data
  const {setBundleThroughSuggestions} = useContext(ShopContext)

  return (
    <button className='suggested-button' onClick={() => setBundleThroughSuggestions(selectedProducts, rating, bundledproductsuggest)} >{configName}</button>
      
>>>>>>> 55539d5ccb60ba04b600facf4476f2d223630366
  )
}
