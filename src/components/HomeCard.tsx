import React from 'react'
import { useNavigate } from 'react-router-dom'

interface HomeCardProps {
  title: string,
  description: string,
  navigate:string
}
const HomeCard: React.FC<HomeCardProps> = ({title,description,navigate}) => {
  const navigateTo = useNavigate();
  return (
    <div>
      <div className='flex flex-col items-start justify-center w-70 h-40  shadow-lg border-l-10  border-l-gray-700  p-10 hover:cursor-pointer hover:shadow-2xl rounded-md' onClick={() => navigateTo(navigate)}>
        <h2 className='text-xl font-bold text-gray-700'>{title}</h2>
        <p className='text-sm text-gray-600'>{description}</p>
      </div> 
    </div>
  )
}

export default HomeCard
