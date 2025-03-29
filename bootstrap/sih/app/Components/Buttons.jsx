import React from 'react'


const Buttons = () => {
  return (
    <>
      <div className='flex justify-between items-center mt-1 '  >
      <div>
        <button class=" h-14 w-64 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-2" >
        Search By Photo
      </button>
      </div>
      <div>
        <button class=" h-14 w-64 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" >
        Search plants Name
      </button>
       </div>

      <div>
        <button class=" h-14 w-64 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-4" >
        About
      </button>
      </div>

    </div>
    </>
  )
}

export default Buttons
