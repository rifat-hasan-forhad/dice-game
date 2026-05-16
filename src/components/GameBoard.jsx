import { useState, useEffect } from "react";
import Roller from "./Roller";
import Score from "./Score";
import Selection from "./Selection";

const GameBoard = () => {
  const [selectedNumber, setSelectedNumber] = useState(0);
  const handleSelectNumber = (selectNumber) => {
    setSelectedNumber(Number(selectNumber));
  };

  const [diceNumber, setDiceNumber] = useState(0);
  const handleDiceNumber = (number) => {
    setDiceNumber(Number(number));
  };

  const [newScore, setNewScore] = useState(0);
  useEffect(() => {
    if (selectedNumber !== 0 && diceNumber !== 0) {
      if (selectedNumber === diceNumber) {
        setNewScore((prev) => prev + 5);
      } else {
        setNewScore((prev) => prev - 2);
      }

      setSelectedNumber(0);
      setDiceNumber(0);
    }
  }, [selectedNumber, diceNumber]);

  const handleReset = (value) => {
    setNewScore(value);
  };

  return (
    <>
      <div className="flex items-center justify-between p-10 md:justify-around lg:justify-around">
        <Score newScore={newScore} />

        <Selection
          onSelectHandle={handleSelectNumber}
          onSelectNumber={selectedNumber}
        />
      </div>

      <div>
        <Roller
          onDiceHandle={handleDiceNumber}
          onHandleReset={handleReset}
          onSelectNumber={selectedNumber}
        />
      </div>
    </>
  );
};

export default GameBoard;
