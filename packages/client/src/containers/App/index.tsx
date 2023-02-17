import React from 'react'
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'
import Influencers from '../Influencers'

const App = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" gutterBottom>
          Material UI Create React App example in TypeScript
        </Typography>
      </Toolbar>
    </AppBar>
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Influencers />
    </Container>
  </Box>
)

export default App
