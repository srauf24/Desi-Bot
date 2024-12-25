import React, { useState } from 'react';
import { Container, Typography, Box, Card, Button, ThemeProvider, createTheme } from '@mui/material';
import { Mic } from '@mui/icons-material';
import Guide from './components/Guide'; // Import the new Guide component
import InputBox from './components/InputBox';
import SpeechButton from './components/SpeechButton';
import { adviceResponses, keywordMap } from './adviceData'; // Import the data

// Theme configuration
const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
})
const App = () => {
  const [response, setResponse] = useState('');

const getAdvice = (input) => {
  if (!input || input.trim() === '') {
    setResponse('Beta, please ask something meaningful.');
    return;
  }

  const lowerInput = input.toLowerCase();
  let adviceKey = 'default';

  for (const [key, terms] of Object.entries(keywordMap)) {
    if (terms.some((term) => lowerInput.includes(term))) {
      adviceKey = key;
      break;
    }
  }

  const adviceOptions = adviceResponses[adviceKey] || ['Beta, I don’t have advice for that.'];
  const advice = Array.isArray(adviceOptions)
    ? adviceOptions[Math.floor(Math.random() * adviceOptions.length)]
    : adviceOptions;

  if (typeof advice !== 'string') {
    console.error('Unexpected advice type:', typeof advice);
    setResponse('Beta, something went wrong.');
    return;
  }

  setResponse(advice);
  speakAdvice(advice);
};

const speakAdvice = (advice) => {
  if (typeof advice !== 'string') {
    console.error('Expected a string for advice but got:', typeof advice);
    return;
  }

  const voices = speechSynthesis.getVoices();
  if (voices.length === 0) {
    console.error('No voices available for speech synthesis.');
    return;
  }

  const utterance = new SpeechSynthesisUtterance(advice);
  utterance.voice = voices.find((voice) => voice.lang === 'en-IN') || voices[0];
  speechSynthesis.speak(utterance);
};

  return (
      <ThemeProvider theme={theme}>
        <Box
            sx={{
              backgroundImage: 'url("https://source.unsplash.com/1600x900/?culture,tradition")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '100vh',
              color: 'white',
              textAlign: 'center',
              py: 5,
            }}
        >
          <Container maxWidth="sm">
{/* Goofy Header */}
            <Box
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',

                  borderRadius: 2,
                  mb: 4,
                  py: 2,
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                }}
            >
              <Typography
                  variant="h3"
                  sx={{
                    fontFamily: "'Pacifico', cursive",
                    color: '#3f51b5',
                    mb: 1,
                  }}
              >
                Friendly Memon Advice 🤓
              </Typography>
              <Typography
                  variant="subtitle1"
                  sx={{
                    color: '#f50057',
                  }}
              >
                "Because Sharma Ji's son can't beat this wisdom!"
              </Typography>
            </Box>
            <Typography variant="h4" gutterBottom>
              Desi Advice Assistant
            </Typography>
            <InputBox onSubmit={getAdvice}/>
            <SpeechButton onResult={getAdvice}/>
            {response && (
                <Card
                    sx={{
                      backgroundColor: 'rgba(0, 0, 0, 0.7)',
                      color: 'white',
                      padding: 2,
                      marginTop: 3,
                    }}
                >
                  <Typography variant="h6">Response:</Typography>
                  <Typography variant="body1">{response}</Typography>
                </Card>
            )}
            <Box mt={3}>
              <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<Mic/>}
                  onClick={() => speakAdvice(response)}
              >
                Repeat Advice
              </Button>
              {/* Guide Section */}
        <Box mt={15}>
          <Guide />
        </Box>            </Box>
          </Container>
        </Box>
      </ThemeProvider>
  );
}


export default App;
