const FrontPage = ({ onClickHandle }) => {
  const click = false;

  const handleClick = () => {
    onClickHandle(!click);
  };

  return (
    <div className="h-screen p-10 flex flex-col items-center justify-center sm:flex-row sm:space-x-2 sm:my-auto lg:p-28 ">
      <img
        src="./src/assets/images/dices.png"
        alt="logo"
        className="w-sm sm:w-1/2 lg:w-6/10"
      />

      <div className="mt-5 flex flex-col sm:w-1/2 md:text-right lg:4/10">
        <h1 className="text-6xl p-1 font-bold sm:whitespace-nowrap md:text-7xl ">
          DICE GAME
        </h1>
        <button
          className="bg-black text-white text-sm py-1.5 px-7 mr-1 mt-4 rounded-md w-4.5/10 ml-auto cursor-pointer transition-all duration-200 hover:px-8 hover:py-2 shadow-md"
          onClick={handleClick}
        >
          Play Now
        </button>
      </div>
    </div>
  );
};

export default FrontPage;
