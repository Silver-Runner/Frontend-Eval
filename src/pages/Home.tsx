import React from 'react'
import HomeCard from '../components/HomeCard'
import { cards } from '../assets/assets'
const Home = () => {
  return (
    <div className='flex  flex-col justify-start  items-center min-h-screen'>
      <div className='flex justify-center items-center bg-gray-400 h-30 w-full '><h1 className='text-5xl font-bold text-center'>Frontend Eval Solutions</h1></div>
      <div className='grid grid-cols-3 gap-5 m-10 mt-25'>
        {cards.map((card, index) => (
          <HomeCard key={index} title={card.title} description={card.description} navigate={card.navigate}/>
        ))

        }
      </div>
    </div>
  )
}

export default Home
