import React from 'react'
import logo from '../assets/kevinRushLogo.png'
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"

function Navbar() {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <h1 className=' text-white text-3xl font-bold mx-2 w-10'>PORTFOLIO</h1>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <FaLinkedin />
            <FaGithub />
            <FaSquareXTwitter />
            <FaInstagram />
        </div>
    </nav>
  )
}

export default Navbar