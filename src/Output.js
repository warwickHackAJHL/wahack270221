// file to contain the output text
import React from 'react';
import { createWorker } from 'tesseract.js';
import { useState, useEffect } from 'react';
import { Flex, Text,Textarea } from '@chakra-ui/react';
// const { createWorker } = require('tesseract.js');

const initWorker = async setWorker => {
  let tempWorker = createWorker({
    langPath: '../tessdata/',
    gzip: false,
    logger: m => console.log(m),
  });
  await tempWorker.load();
  await tempWorker.loadLanguage('eng+chi_sum+LCDDot_FT_500');
  await tempWorker.initialize('eng');
  setWorker(tempWorker);
};

function Output({ imageInput, canvasInput, count }) {
  const [worker, setWorker] = useState();
  const [output, setOutput] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    initWorker(setWorker);
  }, []);

  useEffect(() => {
    if (worker) {
      worker.recognize(imageInput ?? canvasInput).then(result => {
        const text = result?.data?.text;
        if (text) {
          setOutput(text);
          setLoading(false);
        }
      });
    }
  }, [worker, imageInput, canvasInput, count]);

  if (loading) {
    // return <div>Scanning...</div>;
  }

  const inputChange = (e) => {
    const inputValue = e.target.value;
    setOutput(inputValue);
  }

  return(
    <>
      <Textarea 
        maxW="600px"
        width="100%" 
        height="300px" 
        mb="20px" 
        value={output}
        onChange={inputChange}
      />
    </>
  )
}
export default Output;
