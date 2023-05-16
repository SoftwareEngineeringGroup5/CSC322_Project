import React, { useContext } from 'react'
import { SuggestedConfig } from './suggestedConfig'
import { SUGGESTEDCOFIGS } from '../SuggestedConfigData'
import { ShopContext } from '../../../context/shop-context'
import { useNavigate } from 'react-router-dom'
import "./filterstyle.css"



export const Filterpanel = () => {

  const navigate = useNavigate();

  const {resetBundleItem} = useContext(ShopContext);
  return (
    <div>
      <div className='Suggested Configs'>
        <p className='label'>
          <b>Suggested Configeration</b>
          </p>
        <div className='suggested-list'>
        <button className='suggested-button' onClick={ () => resetBundleItem()} >Create My Own</button>
        <button className='suggested-button' onClick={ () => navigate("/ratingpage")} >⭐Rate Configs⭐</button> 
          {SUGGESTEDCOFIGS.map((Suggested) => (
            <SuggestedConfig data = {Suggested} />
          ))}
        </div>
      </div>
    </div>
  )
}
