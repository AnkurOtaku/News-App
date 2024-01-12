import React from 'react'
import loading from './butterfly.gif';

function Loading() {
  return (
      <div className='flex justify-center'>
        <img src={loading} alt='loading' height='70px' width='80px' />
      </div>
    )
}

export default Loading