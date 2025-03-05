import React from "react";

interface CardProps {
  number: number;
  id: number;
  onCardClick: (id: number, number: number) => void;
  isFlipped: boolean;
  isMatched: boolean;
  isDisabled: boolean;
}

const MemoryCard: React.FC<CardProps> = ({
  number,
  id,
  onCardClick,
  isFlipped,
  isMatched,
  isDisabled,
}) => {
  return (
    <div
      className="flex justify-center items-center max-sm:h-9 w-10  lg:h-12 w-13 md:h-11 w-12 max-xl:h-30 w-31 cursor-pointer perspective-1000"
      onClick={() =>
        !isFlipped && !isMatched && !isDisabled && onCardClick(id, number)
      }
    >
      <div
        className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-700 ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        <div
          className={`absolute w-full h-full ${
            isMatched ? "bg-white" : "bg-blue-500"
          } flex items-center justify-center text-3xl font-bold backface-hidden`}
        >
          {isMatched && <span></span>}
        </div>

        <div
          className={`absolute w-full h-full bg-red-500 flex items-center justify-center text-white text-3xl font-bold backface-hidden rotate-y-180 ${
            isFlipped ? "" : "rotate-y-180"
          }`}
        >
          <h2>{number}</h2>
        </div>
      </div>
    </div>
  );
};

export default MemoryCard;
