import { Flex } from '@chakra-ui/react';
import Canvas from './Canvas.js';
import ImageUpload from './ImageUpload.js';
import Output from './Output.js';

function App() {
  return (
    <Flex direction="column" justifyContent="flex-start">
      <Canvas />
      <ImageUpload />
      <Output />
    </Flex>
  );
}

export default App;
