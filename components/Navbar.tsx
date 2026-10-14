'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const logo='/';
const Navbar = () => {

    const [burger, setBurger] = useState(false)
    const handleBurger = () => {
        console.log(burger)
        setBurger((prevState) => !prevState)
    }


    return (
        <>
            <nav className=" min-w-[375px] w-full flex justify-between items-center sticky top-0 z-50 bg-[#F8FAFC] border-b border-gray-300 h-[60px] px-10">

                <Link href='/' className="logo relative w-12 h-12">
                    <Image
                        src={logo}
                        alt="logo"
                        fill
                        className="object-cover"
                    />
                </Link>

                <div className="pages text-center text-black hidden md:flex items-center justify-center   md:gap-[25px] lg:gap-[30px] font-serif-playfair">
                    <Link href='/maestri'>Maestri</Link>
                    <Link href='/programari'>Servicii</Link>
                    <Link href='/recenzii'>Despre noi</Link>
                </div>

                <button onClick={handleBurger} className='flex flex-col justify-center items-center gap-[3px] md:hidden'>
                    <span className='border-2 border-black w-[25px]'></span>
                    <span className='border-2 border-black w-[25px]'></span>
                    <span className='border-2 border-black w-[25px]'></span>
                </button>
                <div className={`absolute  top-14 right-0 z-50 flex flex-col w-56 font-serif-playfair text-sm md:hidden text-black bg-[#F8FAFC] p-5 rounded-2xl shadow-xl border border-gray-400 gap-4 ${burger ? 'flex' : 'hidden'}`}>
                    <Link className=' border-b border-gray-400' href='/maestri'>Maestri</Link>
                    <Link className=' border-b border-gray-400' href='/programari' >Servicii</Link>
                    <Link className=' border-b border-gray-400' href='/recenzii' >Despre noi</Link>
                </div>
            </nav>


        </>

    )
}

export default Navbar