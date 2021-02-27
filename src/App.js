import React, { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import Canvas from './Canvas.js';
import ImageUpload from './ImageUpload.js';
import Output from './Output.js';

function App() {
  const [image, setImage] = useState();
  const [canvas, setCanvas] = useState();
  return (
    <Flex direction="column" justifyContent="flex-start" w="100%" minH="100vh" alignItems="center">
      <Canvas setCanvas = {setCanvas}/>
      <ImageUpload image = {image} setImage={setImage} />
      <Output imageInput={image} canvasInput={canvas} />
    </Flex>
  );
}

export default App;
