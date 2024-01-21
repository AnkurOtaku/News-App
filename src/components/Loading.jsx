import React from 'react'
import PropagateLoader from "react-spinners/PropagateLoader";

function Loading() {
  return (
      <div className='flex justify-center h-11 w-full z-0 items-center'>
        <PropagateLoader
        color={'#A13737'}
        loading={true}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>
    )
}

export default Loading