import React, { useState, useEffect } from 'react';
import { ChakraProvider, Link, Box, Text, AspectRatio, Stack, Button, Spacer } from '@chakra-ui/react'; 

function Blogs() {
  return (
    <>
     <Box textAlign="center" paddingTop="40px" paddingBottom="40px">
        <Text fontSize="4xl" fontWeight="bold">Sales Forecasting Blogs</Text>
      </Box>
      <Box>
      <Button><Link href="https://hermitcrabs.io/blog/sales-forecasting-projection-prediction" target="_blank" rel="noopener noreferrer" maxW='500px'>View in Full Screen</Link></Button>
      </Box>
      <Box>
        <AspectRatio maxW='400px' ratio={1}>
        <iframe
        title='1'
        src='https://hermitcrabs.io/blog/sales-forecasting-projection-prediction'
        />
      </AspectRatio>
      </Box>

      <Box>
      <Button><Link href="https://hermitcrabs.io/blog/sales-forecasting-projection-prediction" target="_blank" rel="noopener noreferrer" maxW='500px'>View in Full Screen</Link></Button>
      </Box>
      <Box>
        <AspectRatio maxW='400px' ratio={1}>
        <iframe
        title='1'
        src='https://hermitcrabs.io/blog/sales-forecasting-projection-prediction'
        />
      </AspectRatio>
      </Box>

      <Box>
      <Button><Link href="https://hermitcrabs.io/blog/sales-forecasting-projection-prediction" target="_blank" rel="noopener noreferrer" maxW='500px'>View in Full Screen</Link></Button>
      </Box>
      <Box>
        <AspectRatio maxW='400px' ratio={1}>
        <iframe
        title='1'
        src='https://hermitcrabs.io/blog/sales-forecasting-projection-prediction'
        />
      </AspectRatio>
      </Box>
      

</>
  );
}

export default Blogs;
