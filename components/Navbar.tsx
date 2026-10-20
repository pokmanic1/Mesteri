'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/LogoCuNume.svg'
const Navbar = () => {

    const [burger, setBurger] = useState(false)
    const handleBurger = () => {
        console.log(burger)
        setBurger((prevState) => !prevState)
    }


    return (
        <>
            <nav className=" min-w-[375px] w-full flex justify-between items-center sticky top-0 z-50 bg-white-first border-b border-gray-300 h-[60px] px-10">

                <Link href='/' className="logo relative h-[90px] w-[180px] block">
                    <Image
                        src={logo}
                        alt="logo"
                        fill
                        className="object-contain object-left"
                        priority
                    />
                </Link>

                <div className="pages text-center text-black hidden md:flex items-center justify-center   md:gap-[25px] lg:gap-[30px] font-sans">
                    <Link href='/mesteri'>Mesteri</Link>
                    <Link href='/servicii'>Servicii</Link>
                    <Link href='/despre'>Despre noi</Link>
                </div>

                <button onClick={handleBurger} className='col-center gap-[3px] md:hidden'>
                    <span className='border-2 border-black w-[25px]'></span>
                    <span className='border-2 border-black w-[25px]'></span>
                    <span className='border-2 border-black w-[25px]'></span>
                </button>
                <div className={`absolute  top-14 right-0 z-50 flex flex-col w-56 font-sans text-sm md:hidden text-black bg-white-first p-5 rounded-2xl shadow-xl border border-gray-400 gap-4 ${burger ? 'flex' : 'hidden'}`}>
                    <Link className=' border-b border-gray-400' href='/mesteri'>Mesteri</Link>
                    <Link className=' border-b border-gray-400' href='/servicii' >Servicii</Link>
                    <Link className=' border-b border-gray-400' href='/despre' >Despre noi</Link>
                </div>
            </nav>


        </>

    )
}

export default Navbar