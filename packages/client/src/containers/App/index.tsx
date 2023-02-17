import React from 'react';
import { ChakraProvider, Box, Grid, theme } from '@chakra-ui/react';
import Influencers from '../Influencers';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <Influencers />
      </Grid>
    </Box>
  </ChakraProvider>
);
