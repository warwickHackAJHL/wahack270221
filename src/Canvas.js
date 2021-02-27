// file to contain the canvas for DRAWING
import { Flex } from '@chakra-ui/react';
import React from 'react';
import CanvasDraw from 'react-canvas-draw';

const Canvas = ({ setCanvas, count, setCount }) => {
  // canvas with drawing is canvas with z-index 11
  const handleChange = canvas => {
    setCanvas(canvas.canvas.drawing);
    setCount(count + 1);
  };
  return (
    <CanvasDraw
      canvasWidth="800px"
      canvasHeight="600px"
      onChange={handleChange}
      hideGrid={true}
      brushRadius={4}
    />
    // </Flex>
  );
};

export default Canvas;
