import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './SidebarCustomCSS.css'

function Sidebar({
    display
}) {
    
    return (
        <div className={`absolute top-0 left-0 h-screen shadow-xl ${display} flex justify-center items-center w-60 bg-white bg-opacity-90 `} id='sidebar-container'>
            <div className='relative flex '>
                <ul className='flex gap-8 flex-col'>
                    <li><Link to='/' className='text-xl text-gray-600 hover:text-[1.3rem] hover:text-black'>Home</Link></li>
                    <li><Link to='/' className='text-xl text-gray-600 hover:text-[1.3rem] hover:text-black'>Login</Link></li>
                    <li><Link to='/' className='text-xl text-gray-600 hover:text-[1.3rem] hover:text-black'>SignUp</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
