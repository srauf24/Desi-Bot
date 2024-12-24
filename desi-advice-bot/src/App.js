import React, { useState } from 'react';
import Header from './components/Header';
import InputBox from './components/InputBox';
import ResponseBox from './components/ResponseBox';
import SpeechButton from './components/SpeechButton';

const App = () => {
  const [response, setResponse] = useState('');

  const adviceResponses = {
    job: "Beta, keep your job stable. Don't think of quitting unless you have another offer!",
    marriage: "Arre, why are you still single? Time is ticking!",
    travel: "Traveling is good, beta, but first, settle down and save money.",
    default: "Beta, I have no words for this. But remember: Log kya kahenge?"
  };

  const getAdvice = (input) => {
    const lowerInput = input.toLowerCase();
    let advice = 'default';

    if (lowerInput.includes('job')) advice = 'job';
    else if (lowerInput.includes('marriage')) advice = 'marriage';
    else if (lowerInput.includes('travel')) advice = 'travel';

    setResponse(adviceResponses[advice]);
    speakAdvice(adviceResponses[advice]);
  };

  const speakAdvice = (advice) => {
    const utterance = new SpeechSynthesisUtterance(advice);
    utterance.voice = speechSynthesis
      .getVoices()
      .find((voice) => voice.lang === 'en-IN'); // Indian English accent
    speechSynthesis.speak(utterance);
  };

  return (
    <div>
      <Header />
      <InputBox onSubmit={getAdvice} />
      <SpeechButton onResult={getAdvice} />
      {response && <ResponseBox response={response} />}
    </div>
  );
};

export default App;
