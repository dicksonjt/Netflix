// Second_page.jsx
import React, { useRef, useState, useEffect } from 'react'
import theJourney from '../assets/Movie Tiles/The_Journey.png'

const ChevronLeft = ({ size = 32, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ChevronRight = ({ size = 32, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const Second_page = () => {
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const tiles = [
    { num: 1, title: 'Beauty in Black', image: theJourney },
    { num: 2, title: 'Ordinary People', image: theJourney },
    { num: 3, title: 'Why Did I Get Married Again?', image: theJourney },
    { num: 4, title: 'Alpha', image: theJourney },
    { num: 5, title: 'Colours of Fire', image: theJourney },
    { num: 6, title: 'Placeholder 6', image: theJourney },
    { num: 7, title: 'Placeholder 7', image: theJourney },
    { num: 8, title: 'Placeholder 8', image: theJourney },
    { num: 9, title: 'Placeholder 9', image: theJourney },
    { num: 10, title: 'Placeholder 10', image: theJourney },
  ]

  const checkScroll = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 5)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 5)
  }

  useEffect(() => {
    checkScroll()
    const el = scrollRef.current
    el.addEventListener('scroll', checkScroll)
    return () => el.removeEventListener('scroll', checkScroll)
  }, [])

  const scroll = (direction) => {
    const el = scrollRef.current
    const amount = el.clientWidth * 0.8
    el.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  return (
    <div className='relative flex flex-col w-full px-4 md:px-16 lg:px-40 py-8'>
      <h2 className='text-2xl font-bold mb-4'>Trending Now</h2>

      <div className='relative group'>
        {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            className='absolute left-0 top-0 bottom-0 z-20 w-12 bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors'
          >
            <ChevronLeft className='text-white' size={32} />
          </button>
        )}

        <ul ref={scrollRef} className='flex gap-2 overflow-x-scroll overflow-y-hidden scroll-smooth scrollbar-hide'>
          {tiles.map((tile) => (
            <li key={tile.num} className='relative flex-shrink-0 flex items-end'>
              <div className='w-32 h-48 md:w-40 md:h-56 rounded-md hover:scale-105 transition-transform cursor-pointer relative overflow-hidden'>
                <img
                  src={tile.image}
                  alt={tile.title}
                  className='w-full h-full object-cover'
                />
              </div>
              <span
                className='text-[80px] md:text-[110px] font-black leading-none text-black absolute -left-4 md:-left-6 bottom-0 z-20'
                style={{ WebkitTextStroke: '2px #4d4d4d' }}
              >
                {tile.num}
              </span>
            </li>
          ))}
        </ul>

        {canScrollRight && (
          <button
            onClick={() => scroll('right')}
            className='absolute right-0 top-0 bottom-0 z-20 w-12 bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors'
          >
            <ChevronRight className='text-white' size={32} />
          </button>
        )}
      </div>
    </div>
  )
}

export default Second_page