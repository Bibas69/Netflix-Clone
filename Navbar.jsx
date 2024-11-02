import React from 'react'
import background1 from '../assets/background1.jpg'
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <div className='relative w-full h-[99vh] bg-cover' style={{backgroundImage: `url(${background1})`}}>
      <div className='w-full h-[15vh] flex items-center justify-between pl-20 pr-20'>
        <img src={logo} width="199px" className='z-10'/>
        <div className='w-[20%] flex justify-center gap-4 z-10'>
          <select name="dropbar" id="dropbar" className='w-28 bg-[transparent] text-white border-[1px] border-white-900 rounded-md'>
            <option value="English" className='text-black bg-[white]'>English</option>
            <option value="Hindi" className='text-black bg-[white]'>Hindi</option>
          </select>
          <input type="submit" name='submit' id='submit' value="Sign In" className='bg-[#E50914] w-24 h-8 z-10 text-white rounded-md '/>
        </div>
      </div>
      <div className='w-full h-[85vh] flex flex-col items-center justify-center gap-5'>
        {['Unlimited movies,', 'TV shows and more'].map((item, index) => (
          <h1 className='text-white z-10 text-6xl font-bold' key={index}>{item}</h1>
        ))}
        <p className='text-xl text-white z-10 font-semibold'>Starts at Rs 149. Cancel any time.</p>
        <p className='text-lg text-white z-10 font-semibold'>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className='z-10 flex gap-4'>
          <input type="email" id='email' placeholder='Email address' className='border-[1px] border-white-900 bg-[transparent] text-white text-lg w-[379px] h-[53px] pl-[10px]'/>
          <input type="submit" name='submit' value="GET STARTED >" className='w-[199px] h-[54px] bg-[#E50914] text-white text-xl font-semibold'/>
        </div>
      </div>
      <div className="absolute inset-0 bg-black opacity-60"></div>
    </div>
  )
}

export default Navbar