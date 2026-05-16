import { useState } from "react";
import Rules from "./Rules";

const Roller = ({ onDiceHandle, onHandleReset, onSelectNumber }) => {
  const srcList = [
    {
      id: 1,
      src: "./src/assets/images/dice_1.png",
    },
    {
      id: 2,
      src: "./src/assets/images/dice_2.png",
    },
    {
      id: 3,
      src: "./src/assets/images/dice_3.png",
    },
    {
      id: 4,
      src: "./src/assets/images/dice_4.png",
    },
    {
      id: 5,
      src: "./src/assets/images/dice_5.png",
    },
    {
      id: 6,
      src: "./src/assets/images/dice_6.png",
    },
  ];

  const [srcValue, setSrcValue] = useState(srcList[0]);

  const [rules, setRules] = useState(false);
  const handleRulesBtn = () => {
    setRules(!rules);
  };

  const handleImage = () => {
    const randomImage = srcList[Math.floor(Math.random() * srcList.length)];

    onSelectNumber !== 0 && setSrcValue(randomImage);

    onDiceHandle(randomImage.id);
  };

  return (
    <div className="flex flex-col items-center mt-6 p-2 lg:mt-2">
      <img
        src={srcValue.src}
        alt="dice-1"
        className="w-1/3 cursor-pointer md:w-1/10 lg:w-1/10 select-none "
        onClick={handleImage}
      />

      <p className="font-semibold text-xl mb-3 ">Click on Dice to roll</p>

      <button
        className="font-semibold border-[1.5px] border-black px-6 py-1 text-sm rounded-md cursor-pointer transition-colors duration-100 mb-3 hover:bg-black hover:text-white "
        onClick={() => {
          onHandleReset(0);
        }}
      >
        Reset Score
      </button>

      <button
        className="font-semibold bg-black text-white px-6 py-1.5 text-sm rounded-md cursor-pointer "
        onClick={handleRulesBtn}
      >
        {rules ? "Hide Rules" : "Show Rules"}
      </button>

      <div>{rules && <Rules />}</div>
    </div>
  );
};

export default Roller;
