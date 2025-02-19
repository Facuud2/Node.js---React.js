import React from 'react'

const Header = () => {

  const userName = 'Facundo';

  return (
    <div className='flex justify-around mt-3'>
      <p className='text-3xl font-bold'>
        Turbo<span className='text-red-600'>Store</span>
      </p>
      <ul className='flex justify-between'>
        <li className='px-4'><a href='#'>Home</a></li>
        <li className='px-4'><a href='#'>About</a></li>
        <li className='px-4 flex items-center justify-center cursor-pointer'>
          <img 
          src='https://cdn-icons-png.flaticon.com/512/149/149071.png'
            className='w-8 h-8 mr-2'/>
            <p>Bienvenido! {userName}</p>
          </li>
        {/* <li><a href='#'>Panel de Control</a></li> */}
      </ul>
    </div>
  )
}

export default Header