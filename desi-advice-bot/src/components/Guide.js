import React from 'react';
import { Box, Typography } from '@mui/material';
const categories = [
  "School and Education",
  "Travel",
  "Nutrition/Weight Loss",
  "Mental health",
  "Technology",
  "Finance and Money",
  "Social Life",
  "Marriage and Relationships",
  "Career",
  "Professions",
  "Food"
];
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
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <Typography variant="h6" sx={{ mb: 1, color: '#3f51b5' }}>
        How to Use the Memon Bot
      </Typography>
      <Typography variant="body1" sx={{ color: '#333' }}>
        Share anything you'd like advice on! You can talk about:
      </Typography>
        <Box sx={{ mt: 1 }}>
        {categories.map((category, index) => (
          <Typography key={index} variant="body2" sx={{ color: '#555' }}>
            {category}
          </Typography>
        ))}
      </Box>
      <Typography variant="body2" sx={{ color: '#555', mt: 1 }}>
        Try asking: "What should I do about my exams?" or "Where should I travel?"
      </Typography>
    </Box>
  );
};

export default Guide;
