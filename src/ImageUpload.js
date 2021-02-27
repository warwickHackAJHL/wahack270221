// file to contain the stuff to uplaod the image
import React, { useState } from 'react';
import { HStack,Text, Flex, Input, Box, Button } from '@chakra-ui/react';

import { AttachmentIcon, DeleteIcon } from '@chakra-ui/icons';
function Imageupload({ image, setImage }) {
  const [imageName, setImageName] = useState('');
  const handleChange = event => {
    setImage(URL.createObjectURL(event.target.files[0]));
    setImageName(event.target.files[0].name);
  };
  return (
    <Flex
      padding="10px"
      flexDir="row"
      wrap="wrap"
      justifyContent="center"
      alignItems="center"
      w="100%"
      maxW="800px"
    >
      <input
        type="file"
        id="imgUpload"
        name="img"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleChange}
      />
      {image ? (
        <HStack>
          <Text mx="40px">{imageName}</Text>
          <Button
            onClick={() => setImage(undefined)}
            leftIcon={<DeleteIcon />}
            colorScheme="red"
          >
            Remove Image
          </Button>
        </HStack>
      ) : (
        <Button
          onClick={() => {
            document.getElementById('imgUpload').click();
          }}
          leftIcon={<AttachmentIcon />}
          colorScheme="teal"
        >
          Upload Image
        </Button>
      )}
    </Flex>
  );
}

export default Imageupload;
