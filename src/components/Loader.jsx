import React from 'react'
import {Bars} from 'react-loader-spinner'

function Loader() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full py-10">
      <Bars
        color="#2b5278"
        height={50}
        width={200}
        className="m-5"
      />
    </div>
  )
}

export default Loader