import { useState } from "react";
import "./App.css";
import TwoDimensionMainWindow from "./page/TwoDimensionMainWindow";

function App() {
  const [twoDimension, setTwoDimenstion] = useState(true);
  return (
    <>
      <div className="app-window ">
        <button
          className="absolute top-2 left-1/2 z-1000 p-2 border shadow rounded-lg"
          onClick={() => setTwoDimenstion(!twoDimension)}
        >
          {" "}
          Dimentions !
        </button>
        {twoDimension ? (
          <TwoDimensionMainWindow />
        ) : (
          <div className="3d">3d window</div>
        )}
      </div>
    </>
  );
}

export default App;
