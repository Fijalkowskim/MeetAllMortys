import React from 'react'
import { CharacterData } from '../../model/CharacterData'
import {motion} from 'framer-motion'

interface Props{
 data: CharacterData
}
function CharacterCard({data}:Props) {
  return (
    <motion.div className=' cursor-pointer flex flex-col items-center'>
        <img src={data.image} alt={data.name} 
        className='aspect-square h-60 object-cover object-center content-center rounded-full border-4 border-white'/>
        <h1 className={`bg-white text-black px-4 rounded-xl text-center py-1 my-4 ${data.name.length >= 16 ? 'text-2xl' : 'text-4xl'}`}>{data.name}</h1>
        </motion.div>
  )
}

export default CharacterCard