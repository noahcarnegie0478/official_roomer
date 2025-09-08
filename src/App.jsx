import { useState } from "react";
import "./App.css";
import TwoDimensionMainWindow from "./page/TwoDimensionMainWindow";
import ManagementComponent from "./page/ManagementComponent";

function App() {
  const [twoDimension, setTwoDimenstion] = useState(true);

  //temporary send a state down to child, please remove after learn redux
  const [allowToDraw, setAllowToDraw] = useState(false);
  return (
    <>
      <div className="app-window ">
        <ManagementComponent setAllowToDraw={setAllowToDraw} />
        {twoDimension ? (
          <TwoDimensionMainWindow
            allowToDraw={allowToDraw}
            setAllowToDraw={setAllowToDraw}
          />
        ) : (
          <div className="3d">3d window</div>
        )}
      </div>
    </>
  );
}

export default App;
