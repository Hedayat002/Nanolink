import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='h-16 bg-purple-700 flex justify-between px-3 items-center text-white'>
        <div className='logo font-bold text-2xl'> 
          <Link href="/" className='relative'>
            <span className='text-yellow-300'>Nano</span>
            <span className='text-white'>Link</span>
            <span className='absolute -top-1 -right-2 text-xs text-yellow-300'>✦</span>
          </Link>
        </div>
        
        {/* Mobile menu - hidden by default, shown on larger screens */}
        <ul className='hidden md:flex justify-center gap-4 items-center'>
            <Link href="/" ><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/shorten"><li>Shorten</li></Link>
            <Link href="/contact"><li>Contact us</li></Link>

            <li className='flex gap-3'>
                <Link href="/shorten"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold hover:bg-purple-600'>Try Now</button></Link>
               <Link href="https://github.com/Hedayat002">
  <button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold hover:bg-purple-600'>
    Github
  </button>
</Link>
            </li>
        </ul>

        {/* Mobile menu button */}
        <button className='md:hidden'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>
    </nav>
  )
}

export default Navbar
