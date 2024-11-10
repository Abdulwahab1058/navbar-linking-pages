import Link from 'next/link'
import React from 'react'
import About from '../about/page'

const Navbar = () => {
  return (
    <div className='
     bg-sky-700 h-12'>
        <div className='text-red-300 flex justify-between items-center'>
      <h1 className=' text xl m-2 cursor-pointer'>Navbar</h1>

<ul className='flex gap-4 mr-4 cursor-pointer'>
        <Link className='hover:text-pink-600' href="/home">Home</Link>
        <Link className='hover:text-pink-600' href="/about">About</Link>
        <Link className='hover:text-pink-600' href="/skills">Skills</Link>
        <Link className='hover:text-pink-600' href="/contacts-us">Contact</Link>



</ul>
</div>    
    </div>
  )
}

export default Navbar
