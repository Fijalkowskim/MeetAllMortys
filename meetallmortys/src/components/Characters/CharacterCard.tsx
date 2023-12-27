import React from 'react'
import { CharacterData } from '../../model/CharacterData'
import {motion} from 'framer-motion'

interface Props{
 data: CharacterData
}
function CharacterCard({data}:Props) {
  return (
    <motion.div className='aspect-square h-60 cursor-pointer'>
        <img src={data.image} alt={data.name} 
        className='object-cover object-center content-center rounded-full'/>
        </motion.div>
  )
}

export default CharacterCard