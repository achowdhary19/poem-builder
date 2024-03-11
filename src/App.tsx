import React, { useState } from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Tab from "./components/Tab";
import Container from "./components/container";
import ScratchCard from "react-scratchcard-v4";
import { CUSTOM_BRUSH_PRESET } from "react-scratchcard-v4";

import "./App.css";

function App() {
  const onClick = () => {
    console.log("click");
  };

  let heading = "po000op";
  let birds = "../src/assets/2birds.png";
  let cows = "../src/assets/ppokokmyPanel 3.png";
  let bunnies = "../src/assets/bunniesinsnow.png";
  let background = "../src/assets/bunniesinsnow.png";
  let overlay = "../src/assets/overlay.png";

  return (
    <>
      <div>
        <Tab></Tab>
        <Container
          heading={heading}
          img1={birds}
          img2={bunnies}
          img3={cows}
          overlay={overlay}
          background={background}
        ></Container>
      </div>
    </>
  );
}
export default App;
