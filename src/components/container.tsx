import React, { Fragment, useRef, useEffect } from "react";
import ScratchCard from "react-scratchcard-v4";
import { CUSTOM_BRUSH_PRESET } from "react-scratchcard-v4";
import Scratch from "./Scratch";
import js from "../index.js";

interface Props {
  heading: string;
  img1?: string;
  img2?: string;
  img3?: string;
  background?: string;
  overlay?: string;

  scratchOff?: () => void;
}

const container = ({
  heading,
  img1,
  img2,
  img3,
  background,
  overlay,
}: Props) => {
  const ref = useRef<ScratchCard>(null);

  const onClickReset = () => {
    ref.current && ref.current.reset();
    console.log("reset");
  };

  const handleClick = () => {
    alert("Hello!");
  };

  // useEffect(() => {
  //   const script = document.createElement("script");

  //   script.src = js;
  //   script.async = true;

  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  return (
    <Fragment>
      {/*  1 row (default ) with 1 big centered container  */}
      <div className="fixed d-flex justify-content-center">
        {/* 1 column of containers */}
        <div className="d-flex flex-column justify-content-center main black">
          {/* first item, row of items spaced between  */}
          <div className="d-flex starsdiv justify-content-between">
            <img className="star" src="../src/assets/star1.png" alt="" />
            <a
              className="d-flex"
              href="https://sliding.toys/mystic-square/8-puzzle/daily/"
              // onClick="positionedPopup(this.href,'dance','200','200','400','700','yes');return false"
              target="_blank"
            >
              eHELLO
            </a>
            {/* <a
              href="pop1"
              onClick="positionedPopup(this.href,'dance','200','200','400','700','yes');return false"
            >
              {" "}
              <img src="../src/assets/star1.png" alt="pop1" />
            </a> */}
            <img className="star" src="../src/assets/star3.png" alt="" />
            <img className="star" src="../src/assets/star2.png" alt="" />
            <img className="star" src="../src/assets/star1.png" alt="" />
            <img className="star" src="../src/assets/star5.png" alt="" />
          </div>
          <div className="spacer"></div>
          {/* second item, row of items, aligned bottom relative to the cross axis */}
          <div className="d-flex align-items-end ">
            <img className="bird halo" src={img1} />
            <div className="box"></div>
          </div>
          <div className="spacer"></div>
          {/* third item, row of items */}
          <div className="d-flex img-fluid">
            <Scratch background={background} overlay={overlay}></Scratch>
          </div>
          <div className="spacer"></div>
          {/* fourth item */}
          <div className="d-flex poem-holder">
            <img src={img3} className="img-fluid halo"></img>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default container;
