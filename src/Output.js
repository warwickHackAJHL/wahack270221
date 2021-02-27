// file to contain the output text
import React from 'react';
import Tesseract from 'tesseract.js';
import {useState} from 'react';
import { Flex,Text } from '@chakra-ui/react';

function Output({imageInput,canvasInput}) {
  // switch it up depending on canvas/image
  const [output, setOutput] = useState('fake output');
  Tesseract.recognize(
    'https://tesseract.projectnaptha.com/img/eng_bw.png',
    'eng',
    // { logger: m => console.log(m) }
  ).then((data) => {
    console.log(data)
  });
  return(
    <Flex>
      <Text>
        {output}
      </Text>
    </Flex>
  )
}

export default Output;
