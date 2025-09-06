"use client"
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'

const NavPartCom = () => {
    const [isset,setisset] = useState(false)
    function handleisset(){
        if(isset){
            setisset(false)

        }else{
            setisset(true)
        }
    }
  return (
    <div className="">
      <button onClick={() => handleisset()} className="text-3xl inline lg:hidden cursor-pointer">
        {isset ? <p>✕</p> : <p>☰</p>}
      </button>
      
      {isset && (
        <ul className="absolute top-20 left-0 w-full bg-emerald-900 flex flex-col items-center gap-10 py-8 lg:hidden z-40">
          <li className="text-xl cursor-pointer font-bold   underline" onClick={() => setisset(false)}><Link href="/">Home</Link></li>
          <li className="text-xl cursor-pointer font-bold underline" onClick={() => setisset(false)}><Link href="/Views/about">About</Link></li>
          <li className="text-xl cursor-pointer font-bold underline" onClick={() => setisset(false)}><Link href="/Views/skills">Skills</Link></li>
          <li className="text-xl cursor-pointer font-bold underline" onClick={() => setisset(false)}><Link href="/Views/services">Services</Link></li>
          <li className="text-xl cursor-pointer font-bold underline" onClick={() => setisset(false)}><Link href="/Views/contact">Contact</Link></li>
          <li className="text-xl cursor-pointer font-bold underline" onClick={() => setisset(false)}><Link href="/Views/projects">Projects</Link></li>
        </ul>
      )}
    </div>
  )
}

export default NavPartCom