import React from 'react'
import { SUGGESTEDCOFIGS } from '../SuggestedConfigData'
import { RatingComponents } from './ratingComponents'
import "./ratingStyle.css"

export const RatingPage = () => {
  return (
    <div className='rating-components'>
        {SUGGESTEDCOFIGS.map((Suggested) => (
            <RatingComponents data = {Suggested} />
        ))}
    </div>
  )
}
