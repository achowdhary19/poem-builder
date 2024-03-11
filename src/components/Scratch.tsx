import React, { useRef } from "react";
import ScratchCard from "react-scratchcard-v4";
import { CUSTOM_BRUSH_PRESET } from "react-scratchcard-v4";

interface Props {
  background: string;
  overlay: string;
}

const Scratch = ({ background, overlay }: Props) => {
  const ref = useRef<ScratchCard>(null);

  const onClickReset = () => {
    ref.current && ref.current.reset();
  };

  return (
    <div>
      <div className="rounded img-fluid">
        <ScratchCard
          width={550}
          height={73}
          image={overlay}
          finishPercent={98}
          customBrush={CUSTOM_BRUSH_PRESET}
          onComplete={() => console.log("complete")}
        >
          <div className="d-flex">
            <img className="leftRound" src={background} alt="" />
            <img className="rightRound" src={background} alt="" />
          </div>
        </ScratchCard>
      </div>
    </div>
  );
};

export default Scratch;
