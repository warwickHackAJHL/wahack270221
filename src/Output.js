// file to contain the output text
import React from 'react';
import { createWorker } from 'tesseract.js';
import { useState, useEffect } from 'react';
import { Textarea } from '@chakra-ui/react';

const initWorker = async setWorker => {
  let tempWorker = createWorker({
    langPath: '../public/tessdata',
    gzip: false,
    logger: m => console.log(m),
    errorHandler: err => console.error(err)
  });
  await tempWorker.load();
  await tempWorker.loadLanguage('eng+chi_tra+LCDDot_FT_500+ita');
  await tempWorker.initialize('eng+chi_tra+LCDDot_FT_500+ita');
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
