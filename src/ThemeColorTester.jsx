import React from 'react';
import { Box } from '@mui/material';

const ThemeColorTester = () => {
  return (
    <>
      <Box
        sx={(theme) => ({
          display: 'flex',
          flexDirection: 'column',
        })}
      >
        <Box
          sx={{
            flex: 1,
            fontSize: 'small',
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
          }}
        >
          primary.main
        </Box>
        <Box
          sx={{
            flex: 1,
            fontSize: 'small',
            bgcolor: 'primary.light',
            color: 'primary.contrastText',
          }}
        >
          primary.light
        </Box>
        <Box
          sx={{
            flex: 1,
            fontSize: 'small',
            bgcolor: 'primary.dark',
            color: 'primary.contrastText',
          }}
        >
          primary.dark
        </Box>
        <Box
          sx={{
            flex: 1,
            fontSize: 'small',
            bgcolor: 'secondary.main',
            color: 'secondary.contrastText',
          }}
        >
          secondary.main
        </Box>
        <Box
          sx={{
            flex: 1,
            fontSize: 'small',
            bgcolor: 'secondary.light',
            color: 'secondary.contrastText',
          }}
        >
          secondary.light
        </Box>
        <Box
          sx={{
            flex: 1,
            fontSize: 'small',
            bgcolor: 'secondary.dark',
            color: 'secondary.contrastText',
          }}
        >
          secondary.dark
        </Box>
      </Box>
    </>
  );
};

export default ThemeColorTester;
