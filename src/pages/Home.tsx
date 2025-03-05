import HomeCard from "../components/HomeCard";
import { cards } from "../assets/assets";
import Filter from "../components/Filter";
import { useEffect, useState } from "react";
const Home = () => {
  const [difficulty, setDifficulty] = useState<string>("all");
  const FilterCards =
    difficulty === "all"
      ? cards
      : cards.filter((card) => {
          return card.difficulty === difficulty;
        });
  useEffect(() => {
    console.log(difficulty);
    console.log(FilterCards);
  }, [difficulty]);
  return (
    <div className="flex  flex-col justify-start  items-center mb-2">
      <Filter setDifficulty={setDifficulty} difficulty={difficulty} />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  mt-5">
        {FilterCards.map((card, index) => (
          <HomeCard
            key={index}
            title={card.title}
            description={card.description}
            navigate={card.navigate}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
