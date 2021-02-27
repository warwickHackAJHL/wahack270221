// file to contain the canvas for DRAWING
import { Flex } from '@chakra-ui/react'
import React from 'react'
import CanvasDraw from "react-canvas-draw"

const Canvas = ({setCanvas}) => {
  // canvas with drawing is canvas with z-index 11
  const handleChange = (canvas) =>{
    setCanvas(canvas.canvas.drawing)
  }
  return (
    <Flex width="800px" height="600px" border="solid 1px black">
      <CanvasDraw canvasWidth="800px" canvasHeight="600px" onChange={handleChange}/>
    </Flex>
  )
}

export default Canvas