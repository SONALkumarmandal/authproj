import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
function Entry() {
  return (
    <div className='w-full h-screen relative'>
        <div className='absolute z-20 p-12 text-slate-200 font-mono text-5xl'>
                Logo
        </div>
        <div className='absolute z-20 text-center w-full h-screen content-center font-bold'>
            <Button className="w-1/6 h-14 backdrop-brightness-150 text-xl hover:backdrop-brightness-200 rounded-2xl"><Link to={'/SignIn'}>Get Started</Link></Button>
        </div>
        <div >
        <img className="h-screen w-full object-cover absolute" src="https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-stars-shine_107791-7397.jpg?t=st=1730052422~exp=1730056022~hmac=9effb2b6316a99997ccab83445c47689c362d303f73be1db5ca9296b0ee40704&w=1380" alt="" />
        </div>
    </div>
  )
}

export default Entry