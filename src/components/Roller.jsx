const Roller = () => {
  return (
    <div className="flex flex-col items-center mt-6 p-2">
      <img
        src="./src/assets/images/dice_1.png"
        alt="dice-1"
        className="w-1/3 cursor-pointer"
      />
      <p className="font-semibold text-xl mb-3 ">Click on Dice to roll</p>
      <button className="font-semibold border-[1.5px] border-black px-6 py-1 text-sm rounded-md cursor-pointer transition-colors duration-100 mb-3 hover:bg-black hover:text-white ">
        Reset Score
      </button>

      <button className="font-semibold bg-black text-white px-6 py-1.5 text-sm rounded-md cursor-pointer ">
        Show Rules
      </button>
    </div>
  );
};

export default Roller;
