import React, { useState } from 'react';
import { Switch, Container, Typography, Button, Paper } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode? "dark" : "light",
    },
  });
  
  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: "100vh" }}>
        <Container maxWidth="sm">
          <Box my={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              Create React App v4-beta example with TypeScript
            </Typography>
            <ProTip />
            <Copyright />
          </Box>
          <Button variant="contained" color="primary">
            Hello World
          </Button>
          <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        </Container>
      </Paper>
    </ThemeProvider>      
  );
}
