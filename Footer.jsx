import React from 'react'

const FooterCard = ({texts}) => {
    return(
        <div className='w-[20%] h-[40%] flex flex-col gap-3'>
            {texts.map((text, index) => (
                <p key={index} className='text-zinc-400'>
                    {text}
                </p>
            ))}
        </div>
    )
}

function Footer() {
  return (
    <div className='w-full h-[85vh] bg-[#000000] pl-[40px] pr-[40px]'>
        <div className='w-full h-[20vh] flex flex-col items-center justify-center gap-4'>
            <p className='text-white'>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className='z-10 flex gap-4'>
                <input type="email" id='email' placeholder='Email address' className='border-[1px] border-white-900 bg-[transparent] text-white text-lg w-[479px] h-[53px] pl-[10px]'/>
                <input type="submit" name='submit' value="GET STARTED >" className='w-[199px] h-[54px] bg-[#E50914] text-white text-xl font-semibold'/>
            </div>
        </div>
        <p className='text-zinc-400 pt-[20px] pb-[20px]'>Questions? Call 000-800-919-1694</p>
        <div className='w-[80%] h-[40vh] flex gap-20 pt-[40px]'>
            <FooterCard texts={["FAQ", "Investor Relations", "Privacy", "Speed Test"]}/>
            <FooterCard texts={["Help Centers", "Jobs", "Cookie Preferences", "Legal Notices"]}/>
            <FooterCard texts={["Account", "Ways to Watch", "Corporate Information", "Only on Netflix"]}/>
            <FooterCard texts={["Media Center", "Terms of Use", "Contact Us"]}/>
        </div>
        <p className='text-zinc-400'>Netflix India</p>
    </div>
  )
}

export default Footer