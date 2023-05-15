import React, { useContext } from 'react'
import { SuggestedConfig } from './suggestedConfig'
import { SUGGESTEDCOFIGS } from '../SuggestedConfigData'
import { ShopContext } from '../../../context/shop-context'
import "./filterstyle.css"



export const Filterpanel = () => {

  const {resetBundleItem,setBundleThroughSuggestions,checkconsolelogs} = useContext(ShopContext);
  return (
    <div>
      <div className='Suggested Configs'>
        <p className='label'>
          <b>Suggested Configeration</b>
          </p>
        <div className='suggested-list'>
        <button className='suggested-button' onClick={ () => resetBundleItem()} >Create My Own</button>
          {SUGGESTEDCOFIGS.map((Suggested) => (
            <SuggestedConfig data = {Suggested} />
          ))}
          <button className='suggested-button' onClick={ () => checkconsolelogs()} >Console.logs</button>
        </div>
      </div>
    </div>
  )
}
