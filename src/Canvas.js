// file to contain the canvas for DRAWING
import { Flex } from '@chakra-ui/react';
import React from 'react';
import CanvasDraw from 'react-canvas-draw';

const Canvas = ({ setCanvas }) => {
  // canvas with drawing is canvas with z-index 11
  const handleChange = canvas => {
    setCanvas(canvas.canvas.drawing);
  };
  return (
    <Flex
      width="810px"
      height="610px"
      border="solid 2px grey"
      margin="5px"
      justifyContent="center"
      alignItems="center"
    >
      <CanvasDraw
        canvasWidth="800px"
        canvasHeight="600px"
        onChange={handleChange}
        hideGrid={true}
        brushRadius={4}
      />
    </Flex>
  );
};

export default Canvas;
