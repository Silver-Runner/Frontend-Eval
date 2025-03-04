import React, { useState, useEffect } from "react";
import MemoryCard from "./MemoryCard"; 

interface GridCardProps {
  setAllMatched: (allMatched: boolean) => void;
}

interface Card {
  id: number;
  number: number;
  isFlipped: boolean;
  isMatched: boolean;
}

const GridCards: React.FC<GridCardProps> = ({ setAllMatched }) => {
  const [flippedCards, setFlippedCards] = useState<{ id: number; number: number }[]>([]);
  const [isDisabled, setIsDisabled] = useState(false);

  const generateCards = (): number[] => {
    const numbers: number[] = [];
    for (let i = 1; i <= 18; i++) {
      numbers.push(i, i);
    }
    return numbers.sort(() => Math.random() - 0.5);
  };

  const [cards, setCards] = useState<Card[]>(
    generateCards().map((number, index) => ({
      id: index,
      number,
      isFlipped: false,
      isMatched: false,
    }))
  );

  const handleCardClick = (id: number, number: number) => {
    if (isDisabled) return;

    const updatedCards = [...cards];
    updatedCards[id].isFlipped = true;
    setCards(updatedCards);

    setFlippedCards((prev) => [...prev, { id, number }]);
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      setIsDisabled(true);

      const [firstCard, secondCard] = flippedCards;

      if (firstCard.number === secondCard.number) {
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.id === firstCard.id || card.id === secondCard.id
                ? { ...card, isMatched: true, isFlipped: true }
                : card
            )
          );
          setFlippedCards([]);
          setIsDisabled(false);
        }, 3000);
      } else {
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.id === firstCard.id || card.id === secondCard.id
                ? { ...card, isFlipped: false }
                : card
            )
          );
          setFlippedCards([]);
          setIsDisabled(false);
        }, 3000);
      }
    }
  }, [flippedCards, cards]);

  useEffect(() => {
    const allMatched = cards.every((card) => card.isMatched);
    if (allMatched) {
      setAllMatched(true);
    }
  }, [cards, setAllMatched]);

  return (
    <div className="flex flex-col gap-5 items-center mt-2">
      <h1 className="text-2xl font-bold">Memory Game</h1>
      <div className="grid grid-cols-6 gap-1 w-3/4 h-1/2 p-4">
        {cards.map((card) => (
          <div key={card.id} className="flex justify-center items-center">
            <MemoryCard
              id={card.id}
              number={card.number}
              isFlipped={card.isFlipped || card.isMatched}
              onCardClick={handleCardClick}
              isDisabled={isDisabled}
              isMatched={card.isMatched}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridCards;
