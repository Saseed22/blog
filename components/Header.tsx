import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
      <header className='flex justify-between p-5 max-w-6xl mx-auto'>
          <div className='flex gap-x-5 items-center'>
              <Link href="/">
                  <img className='w-44 object-contain cursor-pointer'
                      src="https://links.papareact.com/yvf" alt="/" />
              </Link>
              <div className='hidden md:inline-flex gap-x-3 items-center'>
                <h1>About</h1>
                <h1>Contact</h1>
                <h1 className='border-1 rounded-full bg-green-600 text-white px-4 py-1'>Follow</h1>
              </div>
          </div>
          <div className='flex gap-x-5 items-center text-green-600 mr-2 '>
              <h3>Sign In</h3>
              <h3 className='border-2 rounded-full border-green-600 px-4 py-1'>Get Started</h3>
          </div>
    </header>
  )
}

export default Header