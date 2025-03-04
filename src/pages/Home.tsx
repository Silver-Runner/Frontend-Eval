import HomeCard from '../components/HomeCard'
import { cards } from '../assets/assets'
const Home = () => {
  return (
    <div className='flex  flex-col justify-center  items-center '>
     
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-2 '>
        {cards.map((card, index) => (
          <HomeCard key={index} title={card.title} description={card.description} navigate={card.navigate}/>
        ))

        }
      </div>
    </div>
  )
}

export default Home
