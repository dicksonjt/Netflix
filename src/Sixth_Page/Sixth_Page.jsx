import React from 'react'

const Sixth_Page = () => {
  const col_1 = ["FAQ", "Media Center", "Ways To Watch", "Cookie Preferences", "Speed Test"];
  const col_2 = ["Help Center", "Investor Relations", "Terms of Use", "Corporation Information", "Legal Notices"];
  const col_3 = ["Account", "Jobs", "Privacy", "Contact Us", "Only on Netflix"];

  return (
    <div className='px-4 md:px-16 lg:px-40 py-10 border-t border-gray-800'>
      <a href="#" className='block text-gray-400 mb-6'>
        Questions? Contact us.
      </a>

      <div className='grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-400'>
        <div>
          {col_1.map((link) => (
            <a key={link} href="#" className='block mb-3 underline hover:text-white'>
              {link}
            </a>
          ))}
        </div>

        <div>
          {col_2.map((link) => (
            <a key={link} href="#" className='block mb-3 underline hover:text-white'>
              {link}
            </a>
          ))}
        </div>

        <div>
          {col_3.map((link) => (
            <a key={link} href="#" className='block mb-3 underline hover:text-white'>
              {link}
            </a>
          ))}
        </div>
      </div>

      <select className='mt-6 bg-black text-gray-300 border border-gray-600 rounded px-2 py-2 '>
        <option>English</option>
        <option>Français</option>
      </select>

      <p className='mt-6 text-sm text-gray-400'>Netflix Nigeria</p>
    </div>
  )
}

export default Sixth_Page