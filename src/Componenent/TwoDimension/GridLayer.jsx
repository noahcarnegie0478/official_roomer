import React, { useRef, useState, useEffect } from "react";
import { Layer, Line } from "react-konva";

function GridLayer({ stageRef, scale, position }) {
  const gridLayerRef = useRef();
  const [lines, setLines] = useState([]);
  const width = window.innerWidth;
  const height = window.innerHeight;
  const stepSize = 40;

  const unScale = val => val / scale;
  const drawGrid = () => {
    const stage = stageRef.current;
    if (!gridLayerRef.current) return;

    const gridLayer = gridLayerRef.current;

    const offset = {
      x: unScale(stage.x()),
      y: unScale(stage.y()),
    };
    const gridOffset = {
      x: Math.ceil(offset.x / stepSize) * stepSize,
      y: Math.ceil(offset.y / stepSize) * stepSize,
    };
    const stageRect = {
      x1: 0,
      y1: 0,
      x2: unScale(width),
      y2: unScale(height),
    };
    const gridRect = {
      x1: -gridOffset.x,
      y1: -gridOffset.y,
      x2: unScale(width) - gridOffset.x + stepSize,
      y2: unScale(height) - gridOffset.y + stepSize,
    };
    const fullRect = {
      x1: Math.min(stageRect.x1, gridRect.x1),
      y1: Math.min(stageRect.y1, gridRect.y1),

      x2: Math.max(stageRect.x2, gridRect.x2),
      y2: Math.max(stageRect.y2, gridRect.y2),
    };
    const xStep = Math.round((fullRect.x2 - fullRect.x1) / stepSize);
    const yStep = Math.round((fullRect.y2 - fullRect.y1) / stepSize);
    const newLines = [];
    for (let i = 0; i < yStep; i++) {
      newLines.push({
        x: fullRect.x1,
        y: fullRect.y1 + i * stepSize,
        points: [0, 0, fullRect.x2 - fullRect.x1, 0],
        stroke: "rgba(0,0,0,0.2)",
        strokeWidth: 1,
      });
    }
    for (let i = 0; i <= xStep; i++) {
      newLines.push({
        x: fullRect.x1 + i * stepSize,
        y: fullRect.y1,
        points: [0, 0, 0, fullRect.y2 - fullRect.y1],
        stroke: "rgba(0,0,0,0.1)",
        strokeWidth: 1,
      });
    }
    setLines(newLines);
    gridLayer.draw();
  };
  useEffect(() => {
    drawGrid();
  }, [scale, position]);

  return (
    <>
      <Layer ref={gridLayerRef} listening={false}>
        {lines.map((line, i) => (
          <Line
            key={"line" + i}
            x={line.x}
            y={line.y}
            points={line.points}
            stroke="gray"
            strokeWidth={1}
          />
        ))}
      </Layer>
    </>
  );
}

export default GridLayer;
