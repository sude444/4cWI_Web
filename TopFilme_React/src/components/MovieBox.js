import React from 'react';

export default function Movie({title, date, rating, imageUri}) {
  return (
    <div className='border grid grid-cols-2 h-40'>
      <div className=' p-4'>
        <h2 className='font-bold text-xl'>{title}</h2>
        <h4>{date}</h4>
        <h4>{rating}</h4>
      </div>
      <div className='bg-green-400 w-full '>
        <img src={imageUri} alt='' className='object-cover w-full h-full'/>
      </div>
    </div>
  )
}
