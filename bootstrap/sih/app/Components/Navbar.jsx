import React from 'react'

const Navbar = () => {
  return (
   <>
    <div className='flex bg-black text-white font-medium justify-between items-center p-2.5'>
        <div className='flex items-center fill-none '>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/G20_India_2023_logo.svg/640px-G20_India_2023_logo.svg.png" alt=""  width={60} height={50} />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzmHubWLgUfGK7gb3EWdGXV3sM1ieiQUxNBg&usqp=CAU'alt" alt=""  width={300} height={50}/>
        </div>
        <div className='flex gap-3'>
            <h2>about</h2>
            <h2>contact</h2>
            
        </div>
    </div>
   </>
  )
}

export default Navbar
