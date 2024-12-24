import React, { useState } from 'react';
import Header from './components/Header';
import InputBox from './components/InputBox';
import ResponseBox from './components/ResponseBox';
import SpeechButton from './components/SpeechButton';

const App = () => {
  const [response, setResponse] = useState('');

  const adviceResponses = {
  job: "Beta, job thik hai, but why not start your own business? Memons are born for trade!",
  marriage: "Beta, kaun sambhalega family business? Find a good Memon rishta quickly!",
  travel: "Travel later, beta. First, 'paisa invest karo' in real estate or the family business.",
  doctor: "Doctor banna accha hai, beta, but make sure to have your own clinic. Family pride zaroori hai!",
  engineer: "Engineering is fine, but what about running the family business instead?",
  lawyer: "Law is noble, beta, but business law samajhna zyada zaroori hai.",
  arts: "Beta, art is passion, but profit kahan hai? ‘Paisa paisa hota hai!’",
  family: "Beta, always stay close to family. 'Sab Allah ka fazl hai.'",
  default: "Beta, log kya kahenge is the real question. Always think of the family name!"
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
