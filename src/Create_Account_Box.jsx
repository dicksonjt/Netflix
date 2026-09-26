import React from 'react'

const Create_Account_Box = () => {
  return (
        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 pt-2 w-full max-w-xl">
          <input
            type="email"
            placeholder="Email Address"
            className="flex-1 placeholder:text-gray-300 text-white bg-black/60 border border-gray-400 px-4 py-3 rounded sm:rounded-r-none focus:outline-none"
          />
          <button className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded sm:rounded-l-none text-lg whitespace-nowrap transition-colors">
            Get Started
            <span>&gt;</span>
          </button>
        </div>
  )
}

export default Create_Account_Box
