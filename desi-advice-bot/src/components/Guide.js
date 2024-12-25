import React from 'react';
import { Box, Typography } from '@mui/material';

const Guide = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 2,
        p: 2,
        mb: 3,
        textAlign: 'left',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      <Typography variant="h6" sx={{ mb: 1, color: '#3f51b5' }}>
        How to Use the Advice Bot
      </Typography>
      <Typography variant="body1" sx={{ color: '#333' }}>
        Share anything you'd like advice on! You can talk about:
      </Typography>
      <Typography variant="body2" sx={{ color: '#555', mt: 1 }}>
        Try asking: "What should I do about my exams?" or "How can I handle my nosy neighbors?"
      </Typography>
    </Box>
  );
};

export default Guide;
