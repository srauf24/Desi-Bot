import React from 'react';

const SpeechButton = ({ onResult }) => {
  const handleSpeech = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Speech recognition is not supported in this browser.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      onResult(transcript);
    };
  };

  return (
    <button onClick={handleSpeech} style={{ padding: '10px 20px', marginTop: '10px' }}>
      🎙 Speak Your Scenario
    </button>
  );
};

export default SpeechButton;
