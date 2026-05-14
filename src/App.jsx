import { useState } from "react";
import "./App.css";

import FrontPage from "./components/FrontPage";
import GameBoard from "./components/GameBoard";

function App() {
  const [value, setValue] = useState(false);

  const handleOnClick = (clickValue) => {
    setValue(clickValue);
  };

  return (
    <>{!value ? <GameBoard /> : <FrontPage onClickHandle={handleOnClick} />}</>
  );
}

export default App;
