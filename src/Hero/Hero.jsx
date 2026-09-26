  import React from 'react'
  import Create_Account_Box from '../Create_Account_Box'  


const Hero = () => {
  return (
    <>
      <div className="flex items-center justify-between px-4 md:px-16 lg:px-40 py-4 font-sans bg-black">
        <span className="text-red-600  font-bold text-2xl md:text-3xl tracking-tight">
          NETFLIX 
        </span>
        <a href="#" className="text-white bg-red-600 hover:bg-red-700 px-4 py-1.5 rounded font-medium text-sm">
          Sign In
        </a>
      </div>

      <div className="flex flex-col items-center py-24 md:py-32 bg-black text-white px-4 md:px-16 lg:px-40">
        <div className="flex flex-col items-center text-center">
          <h1 className="font-bold text-3xl md:text-5xl mb-4">
            Unlimited movies, TV
            <span className="block">shows, and more</span>
          </h1>
          <p className="mb-4 text-base md:text-lg">Starts at ₦2,500. Cancel anytime.</p>
        </div>

        <h3 className="text-center text-sm md:text-base mb-4">
          Ready to watch? Enter your email to create or restart your <br className="hidden md:block" />
          membership.
        </h3>
        <Create_Account_Box />

      </div>
    </>
  )
}

export default Hero