import React from 'react';
import { Box , Paper , Card } from '@mui/material';

const ThemeColorTester = () => {
  return (
    <>
      <Box
        sx={(theme) => ({
          display: 'flex',
          flexDirection: 'column',
        })}
      >
        <Paper
          sx={{
            flex: 1,
            fontSize: 'small',
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
          }}
        >
          primary.main
        </Paper>
        <Paper
          sx={{
            flex: 1,
            fontSize: 'small',
            bgcolor: 'primary.light',
            color: 'primary.contrastText',
          }}
        >
          primary.light
        </Paper>
        <Paper
          sx={{
            flex: 1,
            fontSize: 'small',
            bgcolor: 'primary.dark',
            color: 'primary.contrastText',
          }}
        >
          primary.dark
        </Paper>
        <Paper
          sx={{
            flex: 1,
            fontSize: 'small',
            bgcolor: 'secondary.main',
            color: 'secondary.contrastText',
          }}
        >
          secondary.main
        </Paper>
        <Paper
          sx={{
            flex: 1,
            fontSize: 'small',
            bgcolor: 'secondary.light',
            color: 'secondary.contrastText',
          }}
        >
          secondary.light
        </Paper>
        <Paper
          sx={{
            flex: 1,
            fontSize: 'small',
            bgcolor: 'secondary.dark',
            color: 'secondary.contrastText',
          }}
        >
          secondary.dark
        </Paper>
      </Box>
    </>
  );
};

export default ThemeColorTester;
