import React, { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import { Lables } from "../constants";

interface HistoryItem {
  operation: string;
  prevValue: number;
  newValue: number;
}

const UndoableCounter: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);
  const [historys, setHistorys] = useState<HistoryItem[]>([]);
  const [undoHistory, setUndoHistory] = useState<HistoryItem[]>([]);

  const handleOperation = (operation: string, value: number): void => {
    setCounter((prevCounter) => {
      const newCounter = prevCounter + value;

      setHistorys((prevHistory) => {
        if (prevHistory.length < 50) {
          return [
            {
              operation,
              prevValue: prevCounter,
              newValue: newCounter,
            },
            ...historys,
          ];
        } else {
          prevHistory.pop();
          return [
            {
              operation,
              prevValue: prevCounter,
              newValue: newCounter,
            },
            ...undoHistory,
          ];
        }
      });

      return newCounter;
    });
  };

  const handleUndo = (): void => {
    if (historys.length > 0) {
      const lastHistory = historys[0];

      setCounter(lastHistory.prevValue);

      setUndoHistory((prevUndoHistory) => [
        {
          ...lastHistory,
        },
        ...prevUndoHistory,
      ]);
      setHistorys(() => historys.slice(1));
    }
  };

  const handleRedo = (): void => {
    if (undoHistory.length > 0) {
      const lastUndo = undoHistory[0];

      setCounter(lastUndo.newValue);

      setHistorys((prevHistory) => [
        {
          operation: lastUndo.operation,
          prevValue: lastUndo.prevValue,
          newValue: lastUndo.newValue,
        },
        ...prevHistory,
      ]);

      setUndoHistory(() => undoHistory.slice(1));
    }
  };

  return (
    <div className="flex flex-col h-85 gap-5 m-10 justify-start items-center">
      <div className="flex gap-2">
        {historys.length ? (
          <Button variant="contained" onClick={handleUndo} className="mr-5">
            {Lables.UNDO_BUTTON}
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={handleUndo}
            className="mr-5"
            disabled
          >
            {Lables.UNDO_BUTTON}
          </Button>
        )}
        {!undoHistory.length ? (
          <Button variant="contained" disabled onClick={handleRedo}>
            {Lables.REDO_BUTTON}
          </Button>
        ) : (
          <Button variant="contained" onClick={handleRedo}>
            {Lables.REDO_BUTTON}
          </Button>
        )}
      </div>
      <div className="flex flex-col lg:flex-row gap-5">
        <ButtonGroup size="large" aria-label="Large button group" className="">
          <Button onClick={() => handleOperation("-100", -100)}>-100</Button>
          <Button onClick={() => handleOperation("-10", -10)}>-10</Button>
          <Button onClick={() => handleOperation("-1", - 1)} className="w-17">-1</Button>
        </ButtonGroup>
        <p className="text-blue-600 w-30 items-center text-center border border-blue-300 rounded-sm p-5">
          {counter}
        </p>
        <ButtonGroup size="large" aria-label="Large button group" className="">
          <Button onClick={() => handleOperation("+1", 1)}>+1</Button>
          <Button onClick={() => handleOperation("+10", 10)}>+10</Button>
          <Button onClick={() => handleOperation("+100", 100)}>+100</Button>
        </ButtonGroup>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-blue-600">HISTORY</h1>
        <div className="flex flex-col min-w-40 justify-center items-center border border-blue-400 p-5 rounded-sm overflow">
          {historys.map((history, index) => (
            <p key={index} className="text-blue-600">
              {`${history.operation}  `}
              {`${history.prevValue} -> ${history.newValue}`}
            </p>
          ))}
        </div>
      </div>
   
    </div>
  );
};

export default UndoableCounter;
