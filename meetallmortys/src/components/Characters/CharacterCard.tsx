import React from 'react'
import { CharacterData } from '../../model/CharacterData'
interface Props{
 data: CharacterData
}
function CharacterCard({data}:Props) {
  return (
    <div className='aspect-square h-60'>
        <img src={data.image} alt={data.name} 
        className='object-cover'/>
        </div>
  )
}

export default CharacterCard