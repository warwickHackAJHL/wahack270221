// file to contain the output text
import React from 'react';
import { createWorker } from 'tesseract.js';
import { useState, useEffect } from 'react';
import { Flex, Text } from '@chakra-ui/react';

const initWorker = async setWorker => {
  let tempWorker = createWorker({
    logger: m => console.log(m),
  });
  await tempWorker.load();
  await tempWorker.loadLanguage();
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
    return <div>Scanning...</div>;
  }
  return (
    <Flex>
      <Text>{output}</Text>
    </Flex>
  );
}
export default Output;
