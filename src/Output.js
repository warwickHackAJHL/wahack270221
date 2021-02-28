// file to contain the output text
import React from 'react';
import { createWorker } from 'tesseract.js';
import { useState, useEffect } from 'react';
import { Textarea } from '@chakra-ui/react';

const initWorker = async setWorker => {
  let tempWorker = createWorker({
    logger: m => console.log(m),
    errorHandler: err => console.error(err),
  });
  await tempWorker.load();
  await tempWorker.loadLanguage();
  await tempWorker.initialize('eng');
  setWorker(tempWorker);
};

function Output({ imageInput, canvasInput, count }) {
  const [worker, setWorker] = useState();
  const [output, setOutput] = useState('');
  useEffect(() => {
    initWorker(setWorker);
  }, []);

  useEffect(() => {
    if (worker) {
      worker.recognize(imageInput ?? canvasInput).then(result => {
        const text = result?.data?.text;
        if (text) {
          setOutput(text);
        }
      });
    }
  }, [worker, imageInput, canvasInput, count]);


  const inputChange = e => {
    const inputValue = e.target.value;
    setOutput(inputValue);
  };

  return (
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
  );
}
export default Output;
