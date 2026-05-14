import Roller from "./Roller";
import Score from "./Score";
import Selection from "./Selection";

const GameBoard = () => {
  return (
    <>
      <div className="flex items-center justify-between p-10 md:justify-around lg:justify-around">
        <Score />

        <Selection />
      </div>

      <div>
        <Roller />
      </div>
    </>
  );
};

export default GameBoard;
