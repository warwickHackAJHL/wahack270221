import React, { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import Canvas from './Canvas.js';
import ImageUpload from './ImageUpload.js';
import Output from './Output.js';

function App() {
  const [image, setImage] = useState();
  const [canvas, setCanvas] = useState();
  return (
    <Flex direction="column" justifyContent="flex-start">
      <Canvas setCanvas = {setCanvas}/>
      <ImageUpload setImage={setImage} />
      <Output imageInput={image} canvasInput={canvas} />
    </Flex>
  );
}

export default App;
