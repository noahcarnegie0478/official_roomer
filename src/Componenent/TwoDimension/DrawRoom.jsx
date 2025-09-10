import React, { useState } from "react";
import { Layer, Rect, Text, Line, Circle } from "react-konva";

function DrawRoom({ stage, setAllowToDraw }) {
  const [isDrawing, setIsDrawing] = useState(false);
  const [points, setPoints] = useState([]);
  const [previewPoint, setPreviewPoints] = useState(null);
  const [circle, setCircle] = useState([]);
  const [startPoint, setStartPoint] = useState(null);
  const [isClose, setIsClose] = useState(false);

  const handleMouseDown = () => {
    if (isClose) {
      return;
    }
    setIsDrawing(false);
    const { x, y } = stage.current.getStage().getPointerPosition();
    setCircle(prev => [
      ...prev,
      {
        x: x,
        y: y,
        color: "#fff",
        material: "default",
      },
    ]);
    setStartPoint({
      x: x,
      y: y,
    });

    setPoints(prev => [...prev, x, y]);
  };
  const handleMouseMove = () => {
    if (isClose || circle.length < 0 || !startPoint) return;
    const { x, y } = stage.current.getStage().getPointerPosition();
    const dx = Math.abs(x - startPoint.x);
    const dy = Math.abs(y - startPoint.y);
    const sx = dx > dy ? x : startPoint.x;
    const sy = dx > dy ? startPoint.y : y;
    if (circle.length >= 3) {
      if (isCloseEnough(circle[0], { x: sx, y: sy })) {
        setCircle(prev => [...prev, circle[0]]);
        setPoints([...points, circle[0].x, circle[0].y]);
        setIsDrawing(false);
        setIsClose(true);
        setAllowToDraw(false);
        return;
      }
    }

    setPreviewPoints([...points, sx, sy]);
  };
  const handleMouseUp = () => {
    setIsDrawing(true);
  };
  function isCloseEnough(p1, p2, threshold = 40) {
    const dx = Math.abs(p1.x - p2.x);
    const dy = Math.abs(p1.y - p2.y);
    return dx <= threshold && dy <= threshold;
  }
  // useEffect(() => {
  //   if (isClose && circle) {
  //     setMainRoom(prev => ({
  //       ...prev,
  //       wall: circle,
  //     }));
  //   }
  // }, [isClose, circle]);

  return (
    <Layer>
      <Text
        text="You can draw your plan here!"
        fontSize={15}
        fontFamily="Calibri"
        x={10}
        y={10}
      />
      {circle.length != 0
        ? circle.map((cir, index) => (
            <Circle
              key={"circle" + index}
              x={cir.x}
              y={cir.y}
              radius={5}
              fill="#82b4ff"
              stroke="#75ff95"
              strokeWidth={2}
              opacity={0.8}
              shadowColor="black"
            />
          ))
        : ""}
      <Rect
        x={0}
        y={0}
        width={window.innerWidth}
        height={window.innerHeight}
        fill="transparent"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        listening={!isClose}
      />
      <Line
        points={isDrawing ? previewPoint : points}
        stroke="black"
        strokeWidth={6}
        // lineCap="round"
        lineJoin="round"
        closed={isClose}
        listening={false}
      />
    </Layer>
  );
}

export default DrawRoom;
