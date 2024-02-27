import React from 'react';

export default function Movie({title, date, imageUri, plot}) {
  return (
    <div className='border grid grid-cols-2 h-90 bg-secondBlock rounded-3xl'>
      <div className=' p-4 text-on text-white'>
        <h2 className='font-bold text-xl'>{title}</h2>
        <h4 className='bg-block'>{date}</h4>
        <h4 className='bg-block'>{plot}</h4>
      </div>
      <div className='w-full rounded-3xl'>
        <img src={imageUri} alt='' className='object-cover w-full h-full rounded-r-3xl'/>
      </div>
    </div>
  )
}
