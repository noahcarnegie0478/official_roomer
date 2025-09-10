import React, { useEffect, useRef, useState } from "react";
import { Stage, Layer, Text, Rect, Circle } from "react-konva";
import GridLayer from "../Componenent/TwoDimension/GridLayer";
import DrawRoom from "../Componenent/TwoDimension/DrawRoom";

function TwoDimensionMainWindow({ allowToDraw, setAllowToDraw }) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const stageRef = useRef();
  const handleWheel = e => {
    e.evt.preventDefault();
    const stage = stageRef.current;
    const oldScale = stage.scaleX();
    const pointer = stage.getPointerPosition();
    const mousePointTo = {
      x: (pointer.x - stage.x()) / oldScale,
      y: (pointer.y - stage.y()) / oldScale,
    };
    const direction = e.evt.deltaY > 0 ? 1 : -1;
    const newScale = direction > 0 ? scale * 0.9 : scale * 1.1;
    const newPos = {
      x: pointer.x - mousePointTo.x * newScale,
      y: pointer.y - mousePointTo.y * newScale,
    };
    setScale(newScale);
    setPosition(newPos);
  };

  return (
    <div className="two-dimention">
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        scaleX={scale}
        scaleY={scale}
        x={position.x}
        y={position.y}
        onWheel={handleWheel}
        ref={stageRef}
        draggable={!allowToDraw}
      >
        <GridLayer
          stageRef={stageRef}
          scale={scale}
          setScale={setScale}
          position={position}
        />
        {allowToDraw ? (
          <DrawRoom stage={stageRef} setAllowToDraw={setAllowToDraw} />
        ) : (
          ""
        )}
      </Stage>
    </div>
  );
}

export default TwoDimensionMainWindow;
