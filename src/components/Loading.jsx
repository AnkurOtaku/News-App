import React from 'react'
import loading from './loading.gif';

function Loading() {
  return (
      <div className='flex justify-center'>
        <img src={loading} alt='loading' height='70px' width='60px'/>
      </div>
    )
}

export default Loading