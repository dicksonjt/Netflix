import React, {useState} from 'react'

const Fourth_page = () => {
    const questions = 
    [
        { question: "What is Netflix?", answer:"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices." },
        { question: "How much does Netflix cost?", answer:"Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦2,500 to ₦8,500/month."},
        { question: "Where can I watch?", answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."},
        { question: "How do I cancel?", answer: "Netflix is flexible. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."},
        { question: "What can I watch on Netflix?", answer:"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."},
        { question: "Is Netflix good for kids?" , answer: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space."},


    ]
    const [openIndex , setOpenIndex] = useState(null)
  return (
    <>
        <div className='px-4 md:px-16 lg:px-40'>
            <h2 className='text-2xl font-bold mb-6' >Frequently Asked Questions</h2>
            {questions.map((q, index) => (  
                <div
                  key={q.question}
                  className='bg-[#2d2d2d] p-6 mb-2'
                >
                  <button
                    onClick={() => setOpenIndex(index === openIndex ? null : index)}
                    aria-expanded={openIndex === index}
                    className='w-full flex items-center justify-between gap-4 text-left cursor-pointer text-lg md:text-2xl'
                  >
                    <span>{q.question}</span>
                    <span className='shrink-0 text-4xl font-light leading-none'>
                      {openIndex === index ? 'x' : '+'}
                    </span>
                  </button>
                  {openIndex===index && <p className='text-xl md:text-2xl mt-6 border-t border-black pt-6'> {q.answer}</p>}
                </div>

            ))}
        </div>
    </>
  )
}

export default Fourth_page