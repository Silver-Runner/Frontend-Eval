import React, { useState } from "react";
import GridCards from "../components/GridCards"; 
import { BackButton } from "../components/Buttons";
import { Lables } from "../constants";

const MemoryGame: React.FC = () => {
  const [allMatched, setAllMatched] = useState<boolean>(false);

  return (
    <div className=" flex justify-center items-center ">
      {!allMatched && <GridCards setAllMatched={setAllMatched} />}
      {allMatched && (
        <button
          className="p-2 text-white border-2 border-blue-600 bg-blue-400 cursor-pointer rounded hover:bg-blue-500"
          onClick={() => setAllMatched(false)}
        >
          {Lables.PLAY_AGAIN}
        </button>
      )}
      
    </div>
  );
};

export default MemoryGame;
