// Third_page.jsx
import React, {useState} from 'react'

const TVIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <rect x="6" y="8" width="36" height="24" rx="3" fill="#1a0f2e" stroke="#e879f9" strokeWidth="1.5" />
    <circle cx="24" cy="20" r="7" fill="url(#tvGlow)" />
    <rect x="18" y="36" width="12" height="3" rx="1.5" fill="#e879f9" />
    <rect x="20" y="32" width="8" height="4" fill="#e879f9" opacity="0.6" />
    <defs>
      <radialGradient id="tvGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#f0abfc" />
        <stop offset="100%" stopColor="#e50914" />
      </radialGradient>
    </defs>
  </svg>
)

const DownloadIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="22" fill="url(#downloadGlow)" />
    <path d="M24 14v14M24 28l-6-6M24 28l6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <defs>
      <radialGradient id="downloadGlow" cx="50%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="50%" stopColor="#f0abfc" />
        <stop offset="100%" stopColor="#a21caf" />
      </radialGradient>
    </defs>
  </svg>
)

const EverywhereIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <path d="M8 40 L38 10 L42 14 L12 44 Z" fill="url(#megaphoneGlow)" />
    <circle cx="10" cy="42" r="2" fill="#e50914" />
    <circle cx="16" cy="36" r="1.5" fill="#e50914" />
    <circle cx="34" cy="18" r="1.5" fill="#f0abfc" />
    <defs>
      <linearGradient id="megaphoneGlow" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#e50914" />
        <stop offset="100%" stopColor="#f0abfc" />
      </linearGradient>
    </defs>
  </svg>
)

const KidsIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <rect x="6" y="10" width="22" height="22" rx="6" fill="#f9a8d4" />
    <circle cx="13" cy="19" r="1.5" fill="#1a0f2e" />
    <circle cx="21" cy="19" r="1.5" fill="#1a0f2e" />
    <path d="M13 25 Q17 28 21 25" stroke="#1a0f2e" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <rect x="20" y="18" width="22" height="22" rx="6" fill="#e50914" />
    <circle cx="27" cy="27" r="1.5" fill="white" />
    <circle cx="35" cy="27" r="1.5" fill="white" />
    <path d="M27 33 Q31 36 35 33" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
  </svg>
)

const Third_page = () => {
  const reasons = [
    { title: 'Enjoy on your TV', text: 'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.', Icon: TVIcon },
    { title: 'Download your shows to watch offline', text: 'Save your favorites easily and always have something to watch.', Icon: DownloadIcon },
    { title: 'Watch everywhere', text: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.', Icon: EverywhereIcon },
    { title: 'Create profiles for kids', text: 'Send kids on adventures with their favorite characters in a space made just for them — free with your membership.', Icon: KidsIcon },
  ]

  return (
    <div className='flex flex-col w-full px-4 md:px-16 lg:px-40 py-8'>
      <h2 className='text-2xl font-bold mb-6'>More Reasons to Join</h2>
      <div className='flex flex-wrap gap-4'>
        {reasons.map((r) => (
          <div
            key={r.title}
            className='relative bg-gradient-to-b from-[#1a0f2e] to-[#2d1b4e] p-6 pb-16 rounded-lg flex-1 min-w-[240px]'
          >
            <h3 className='font-bold text-lg mb-2'>{r.title}</h3>
            <p className='text-sm text-gray-300'>{r.text}</p>
            <div className='absolute bottom-4 right-4'>
              <r.Icon />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Third_page