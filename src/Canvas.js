// file to contain the canvas for DRAWING
import { Button, Box, Flex } from '@chakra-ui/react';
import React, { useRef } from 'react';
import CanvasDraw from 'react-canvas-draw';

const Canvas = ({ setCanvas, count, setCount }) => {
  // canvas with drawing is canvas with z-index 11
  const canvasRef = useRef(null);
  const handleChange = canvas => {
    setCanvas(canvas.canvas.drawing);
    setCount(count + 1);
  };
  return (
    <Box w="100%" h="100%">
      <CanvasDraw
        canvasWidth="800px"
        canvasHeight="600px"
        onChange={handleChange}
        hideGrid={true}
        brushRadius={4}
        ref={canvasRef}
      />
      <Button
        position="relative"
        bottom="-15px"
        left="5px"
        colorScheme="red"
        onClick={() => {
          if (canvasRef?.current) {
            canvasRef.current.clear();
          }
        }}
      >
        Clear
      </Button>
      <Button
        position="relative"
        bottom="-15px"
        left="40px"
        colorScheme="yellow"
        onClick={() => {
          if (canvasRef?.current) {
            canvasRef.current.undo();
          }
        }}
      >
        Undo
      </Button>
    </Box>
    // </Flex>
  );
};

export default Canvas;
