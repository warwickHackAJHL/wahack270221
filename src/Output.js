// file to contain the output text
import React from 'react';
import { createWorker } from 'tesseract.js';
import { useState } from 'react';
import { Flex,Text } from '@chakra-ui/react';



function Output({imageInput,canvasInput}) {
  const worker = createWorker({
    logger: m => console.log(m),
  });
  
  const scanInput = async () => {
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng'); 
    const { data: {text} } = await worker.recognize(imageInput ?? canvasInput, 'eng');
    setOutput(text);
    setLoading(false);
    await worker.terminate(); 
  }
  
  // switch it up depending on canvas/image
  const [output, setOutput] = useState();
  const [loading, setLoading] = useState(true);

  if (imageInput == undefined && canvasInput == undefined) {
    return <div></div>;
  }

  scanInput(); // 
  if (loading) {
    return <div>Scanning...</div>;
  }  
  
  
  // .then( data : {text} ) => { // Look at comment below for data properties
  //   console.log(data)
  //   setOutput(data.text);
  // });

  return(
    <Flex>
      <Text>
        {output}
      </Text>
    </Flex>
  )
}



// {
//   text: "Mild Splendour of the various-vested Nig ..."
//   hocr: "<div class='ocr_page' id= ..."
//   tsv: "1 1 0 0 0 0 0 0 1486 ..."
//   box: null
//   unlv: null
//   osd: null
//   confidence: 90
//   blocks: [{...}]
//   psm: "SINGLE_BLOCK"
//   oem: "DEFAULT"
//   version: "4.0.0-825-g887c"
//   paragraphs: [{...}]
//   lines: (8) [{...}, ...]
//   words: (58) [{...}, {...}, ...]
//   symbols: (295) [{...}, {...}, ...]
// }
// If you want to see the complete result object, visit the URL https://omed.hplar.ch/webocr/basic.html and open the developer console.
// detect.data holds information about detected script and orientation and the corresopnding confidence score
// {
//   tesseract_script_id: 1
//   script: "Latin"
//   script_confidence: 39.58333969116211
//   orientation_degrees: 0
//   orientation_confidence: 29.793731689453125
// }

  // const worker = Tesseract.createWorker({
  //   logger: m => console.log(m)
  // });

  // Tesseract.setLogging(true); // needed to check OCR progress

  // await worker.load();
  // await worker.loadLanguage('eng');
  // await worker.initialize('eng');



export default Output;
