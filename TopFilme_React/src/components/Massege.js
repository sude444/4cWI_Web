import React from 'react'
import { Audio } from 'react-loader-spinner'

function Loading() {
 return (
   <div className="pt-32 h-screen">

    <div>{message}</div>
    {isLoading && <Loading />}
    <MovieGrid movies={movies} />

 </div>
)
}

export default Loading