import React from 'react';
import { Box, Paper, Card } from '@mui/material';

const ThemeColorTester = () => {
  const st = {
    flex: 1,
    fontSize: 'small',
    color: 'primary.contrastText',
    paddingLeft: "8px",
  }
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
            ...st,
            bgcolor: 'primary.main',
          }}
        >
          primary.main
        </Paper>
        <Paper
          sx={{
            ...st,
            bgcolor: 'primary.light',
          }}
        >
          primary.light
        </Paper>
        <Paper
          sx={{
            ...st,
            bgcolor: 'primary.dark',
          }}
        >
          primary.dark
        </Paper>
        <Paper
          sx={{
            ...st,
            bgcolor: 'secondary.main',
          }}
        >
          secondary.main
        </Paper>
        <Paper
          sx={{
            ...st,
            bgcolor: 'secondary.light',
          }}
        >
          secondary.light
        </Paper>
        <Paper
          sx={{
            ...st,
            bgcolor: 'secondary.dark',
          }}
        >
          secondary.dark
        </Paper>
      </Box>
    </>
  );
};

export default ThemeColorTester;
