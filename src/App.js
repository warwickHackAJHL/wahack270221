import React, { useState } from 'react';
import { Flex, Image } from '@chakra-ui/react';
import Canvas from './Canvas.js';
import ImageUpload from './ImageUpload.js';
import Output from './Output.js';

function App() {
  const [count, setCount] = useState(0);
  const [image, setImage] = useState();
  const [canvas, setCanvas] = useState();
  return (
    <Flex
      direction="column"
      justifyContent="flex-start"
      w="100%"
      minH="100vh"
      alignItems="center"
    >
      <Flex
        width="810px"
        height="610px"
        border="solid 2px grey"
        margin="5px"
        justifyContent="center"
        alignItems="center"
      >
        {image ? (
          <Flex>
            <img src={image} alt="Uploaded image" />
          </Flex>
        ) : (
          <Canvas setCanvas={setCanvas} count={count} setCount={setCount} />
        )}
      </Flex>
      <ImageUpload image={image} setImage={setImage} />
      <Output imageInput={image} canvasInput={canvas} count={count} />
    </Flex>
  );
}

export default App;

// "homepage":"https://warwickhackajhl.github.io/wahack270221/",
