import React from 'react'
import { Audio } from 'react-loader-spinner'

function Loading() {
    return (
        <div className='flex justify-center items-center h-full'> <Audio
            height="80"
            width="80"
            radius="9"
            color="pink"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
        />
        </div>

    )
}

export default Loading

