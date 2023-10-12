import React from 'react'

function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                <span className='text-red-500'>Sajoe</span>
                <span className='text-blue-900'>Estate</span>
            </h1>
            <form className='bg-slate-100 p-3 rounded-lg'>
                <input type="text" placeholder='Search...' className='bg-transparent'/>
            </form>
        </div>
        
    </header>
  )
}

export default Header