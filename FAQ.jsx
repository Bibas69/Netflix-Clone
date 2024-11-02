import React, { useState } from 'react'

const QuestionCard = ({question, onClick}) => {
    return(
        <div className='w-full flex justify-between items-center' onClick={onClick}>
            <h2 className='text-white text-2xl font-lighter'>{question}</h2>
            <h2 className='text-white text-6xl font-light'>+</h2>
        </div>
    )
}

const AnswerCard = ({answer}) => {
  return(
    <div className='w-full h-full flex items-center pt-[20px] pb-[20px]'>
      <h2 className='text-white text-2xl font-lighter'>{answer}</h2>
    </div>
  )
}

function FAQ() {

  const qna = [
    {question: "What is Netflix?", answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more on thousands of internet-connected devices."},
    {question: "How much does Netflix cost?", answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts."},
    {question: "Where can I watch?", answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."},
    {question: "How do I cancel?", answer: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees start or stop your account anytime."},
    {question: "What can I watch on Netflix?", answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."},
    {question: "Is Netflix good for kids?", answer: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space."}
  ]

  const [openIndex, setOpenIndex] = useState(Array(qna.length).fill(false));

  const toggleAnswer = (index) => {
    const updatedOpenIndex = [...openIndex];
    updatedOpenIndex[index] = !updatedOpenIndex[index];
    setOpenIndex(updatedOpenIndex);
  }

  return (
    <div className='w-full h-full bg-[#000000] p-[40px] flex flex-col gap-3'>
        <h2 className='text-white text-2xl font-semibold'>Frequently Asked Questions</h2>
        {
          qna.map((question, index) => (
            <div key={index} className='w-full'>
              <div className='w-full h-[100px] bg-[#414141] flex p-[20px]' onClick={() => toggleAnswer(index)}>
                <QuestionCard question={question.question}/>
              </div>
              {openIndex[index] ? (
                <div className='w-full bg-[#414141] p-[20px] border-t-[1px] border-black-900'>
                  <AnswerCard answer={question.answer}/>
                </div>
              ) : null}
            </div>
          ))
        }
    </div>
  )
}

export default FAQ