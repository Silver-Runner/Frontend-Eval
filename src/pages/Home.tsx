import HomeCard from "../components/HomeCard";
import { cards } from "../assets/assets";
import Filter from "../components/Filter";
import { useSelector } from "react-redux";
import { RootState } from "../app/store"; 
const Home = () => {
  const difficulty = useSelector((state: RootState) => state.filter.filter);
  const FilterCards =
    difficulty === "all"
      ? cards
      : cards.filter((card) => {
          return card.difficulty === difficulty;
        });
  
  return (
    <div className="flex  flex-col justify-start  items-center mb-2 mt-10">
      <Filter />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  ">
        {FilterCards.map((card, index) => (
          <HomeCard
            key={index}
            title={card.title}
            description={card.description}
            navigate={card.navigate}
            difficulty={card.difficulty}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
