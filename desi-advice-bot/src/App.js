import React, { useState } from 'react';
import Header from './components/Header';
import InputBox from './components/InputBox';
import ResponseBox from './components/ResponseBox';
import SpeechButton from './components/SpeechButton';

const App = () => {
  const [response, setResponse] = useState('');

const adviceResponses = {
  // School and Education
  school: [
    "Beta, if you don’t get 100%, why even bother going to school?",
    "Beta, stop drawing in your notebooks! Focus on your future, or Sharma ji’s son will own you.",
    "Beta, you’re wasting money on school fees just to fail? Are you running a charity?"
  ],
  college: [
    "Beta, why are you hanging out with friends? Are they going to pay your fees?",
    "Beta, college is not for fun. Degree first, then think about breathing.",
    "Beta, if you don’t get top marks, just don’t come home. What will people say?"
  ],
  exam: [
    "Beta, if you fail this exam, we’ll cancel Netflix and sell your phone.",
    "Beta, pray to Allah, but also study. Even Allah won’t help you if you don’t open the book.",
    "Beta, don’t even THINK about sleeping before you memorize the entire syllabus!"
  ],

  // Finance and Money
  money: [
    "Beta, how much are you earning? Because Sharma ji’s son bought a car.",
    "Beta, you don’t have savings? Even your nani used to save money in her saree!",
    "Beta, stop spending on coffee. Buy land instead!"
  ],
  savings: [
    "Beta, if you can’t save, just don’t eat. Simple.",
    "Beta, save like your life depends on it, because it does.",
    "Beta, no savings? Then don’t expect us to save you!"
  ],
  investment: [
    "Beta, put all your money into property. Stocks are for gamblers!",
    "Beta, invest now, or you’ll end up with nothing but regret and instant noodles.",
    "Beta, gold is the only real investment. Everything else is fake."
  ],
  loan: [
    "Beta, if you take a loan, be ready to sell your kidneys to pay it off.",
    "Beta, loans are the reason for family destruction. Stay poor instead!",
    "Beta, loan lene ke baad ghulami karni padti hai. Think carefully!"
  ],

  // Parenting and Family
  parenting: [
    "Beta, if you don’t discipline your kids, they’ll become TikTok influencers.",
    "Beta, we didn’t raise you to raise undisciplined children!",
    "Beta, your kids are your reflection. If they’re misbehaving, it’s obviously your fault."
  ],
  kids: [
    "Beta, if your kids don’t respect you, you’ve already failed.",
    "Beta, don’t let your kids watch cartoons. They’ll end up lazy!",
    "Beta, teach your kids Urdu! What kind of Desi house speaks only English?"
  ],
  family: [
    "Beta, family comes first. Even if they annoy you, tolerate it!",
    "Beta, ignore your family, and you’ll regret it when you’re lonely and old.",
    "Beta, what’s the point of success if your family doesn’t clap for you?"
  ],

  // Social Life
  friends: [
    "Beta, friends will never feed you roti. Stop wasting time with them.",
    "Beta, your friends are secretly jealous of you. Don’t trust them too much.",
    "Beta, friends are a distraction. Sharma ji’s son doesn’t have friends!"
  ],
  party: [
    "Beta, partying won’t make you rich. Stay home and read a book!",
    "Beta, why are you at a party? Are you planning to open a disco?",
    "Beta, party karte ho, lekin shaadi ki baat aati hai toh darte ho!"
  ],
  social_media: [
    "Beta, Instagram won’t pay your bills. Log out and do something useful!",
    "Beta, social media is ruining your brain. Sharma ji’s son isn’t wasting time like this.",
    "Beta, the only TikTok you should be doing is ticking off things from your to-do list!"
  ],
  travel: [
    "Beta, why travel when you can save? Happiness is overrated anyway.",
    "Beta, spend that travel money on a marriage proposal instead!",
    "Beta, ghoomne ke liye paisa hai, lekin investment ke liye nahi?"
  ],

  // Health and Lifestyle
  health: [
    "Beta, if you don’t take care of your health, who will take care of you in old age?",
    "Beta, gym join karo! Sharma ji’s son already has six-pack abs!",
    "Beta, healthy rehna hai toh junk food ka muh dekhna bhi mat!"
  ],
  exercise: [
    "Beta, walk every morning, or you’ll end up like your uncle with joint pain!",
    "Beta, yoga kar lo, warna ghutne jawab de denge.",
    "Beta, exercise now, or pay doctor bills later. Your choice."
  ],
  junk_food: [
    "Beta, junk food will make you fat and broke. Stick to dal roti!",
    "Beta, eating pizza daily? What are you, Italian?",
    "Beta, junk food kills you slowly, but it also kills your bank balance quickly!"
  ],
  diet: [
    "Beta, dieting doesn’t mean starving! Eat like a human, not a bird.",
    "Beta, balanced diet ka matlab hai pizza ko balance karna nahi!",
    "Beta, if you don’t eat healthy, don’t expect to live long."
  ],
  weight: [
    "Beta, lose weight before your relatives start gossiping about it.",
    "Beta, don’t wait for New Year to start exercising. Start NOW!",
    "Beta, your shaadi photos will look terrible if you don’t lose weight."
  ],

  // Marriage and Relationships
  marriage: [
    "Beta, it’s time to get married. You’re not getting any younger!",
    "Beta, if you wait too long, all the good matches will be gone!",
    "Beta, single rehne ka kya faida? Shaadi kar lo aur life set karo!"
  ],
  married: [
    "Beta, now that you’re married, learn to compromise. No excuses!",
    "Beta, shaadi ke baad ghar sambhalna tumhari zimmedari hai.",
    "Beta, treat your spouse well, or you’ll end up like that couple next door."
  ],
  rishta: [
    "Beta, don’t reject every rishta. You’re not perfect either!",
    "Beta, acha rishta mile toh sochna kya? Haan kar do!",
    "Beta, rishta reject karte ho, lekin shaadi karne ka time kab hoga?"
  ],
  single: [
    "Beta, ab bas karo. Log kya kahenge if you stay single forever?",
    "Beta, single life is not glamorous. It’s just lonely.",
    "Beta, get married before all your hair turns white!"
  ],

  // Career
  career: [
    "Beta, focus on your career, or you’ll be left behind in life.",
    "Beta, career ke bina toh zindagi ka matlab hi nahi hai.",
    "Beta, Sharma ji’s son already has a career. What are YOU doing?"
  ],
  business: [
    "Beta, open your own business! Stop working for someone else.",
    "Beta, Memons don’t do jobs. We RUN the jobs!",
    "Beta, if you’re not running a business, you’re wasting your potential."
  ],
  promotion: [
    "Beta, promotion means nothing if you’re not investing wisely.",
    "Beta, getting a promotion doesn’t mean you stop working hard!",
    "Beta, promotion ke saath responsibility bhi aati hai. Don’t forget that!"
  ],
  study: [
    "Beta, study harder. Life isn’t about chilling with friends!",
    "Beta, focus on studies, or Sharma ji’s son will get ahead of you again.",
    "Beta, without education, you’re nothing. So don’t waste time!"
  ],
  education: [
    "Beta, education is the key to success. Don’t throw the key away!",
    "Beta, after education, think about starting your own business.",
    "Beta, if you’re educated, act like it. No excuses!"
  ],

  default: [
    "Beta, life is short, but people’s gossip lasts forever. Think about that.",
    "Beta, whatever you do, just don’t embarrass the family name!",
    "Beta, log kya kahenge should be your priority in every decision."
  ]
};


  const keywordMap = {
  // School and Education
  school: ['school', 'syllabus', 'homework', 'class', 'teacher', 'marks', 'grades'],
  college: ['college', 'university', 'campus', 'degree', 'friends at college', 'professor'],
  exam: ['exam', 'exams', 'test', 'quiz', 'paper', 'finals', 'revision', 'study', 'syllabus'],

  // Finance and Money
  money: ['money', 'income', 'wealth', 'earnings', 'salary', 'bank account'],
  savings: ['savings', 'save', 'bank', 'financial security', 'piggy bank'],
  investment: ['investment', 'invest', 'real estate', 'property', 'stocks', 'mutual funds'],
  loan: ['loan', 'borrow', 'debt', 'emi', 'interest rate', 'credit'],

  // Parenting and Family
  parenting: ['parenting', 'tarbiyat', 'raising kids', 'child care', 'teaching kids'],
  kids: ['kids', 'children', 'bachay', 'baby', 'child', 'sons', 'daughters'],
  family: ['family', 'relatives', 'ghar', 'parents', 'brothers', 'sisters', 'cousins'],

  // Social Life
  friends: ['friends', 'doston', 'buddy', 'best friend', 'friendship', 'group hangouts'],
  party: ['party', 'celebration', 'birthday party', 'night out', 'wedding party'],
  social_media: ['social media', 'instagram', 'tiktok', 'snapchat', 'facebook', 'twitter', 'youtube'],
  travel: ['travel', 'vacation', 'trip', 'tourism', 'destination', 'journey', 'sightseeing'],

  // Health and Lifestyle
  health: ['health', 'sehat', 'healthy', 'well-being', 'fitness'],
  exercise: ['exercise', 'gym', 'walking', 'yoga', 'running', 'workout', 'training'],
  junk_food: ['junk food', 'burger', 'pizza', 'fries', 'fast food', 'takeout', 'unhealthy'],
  diet: ['diet', 'dieting', 'balanced diet', 'nutrition', 'eating habits'],
  weight: ['weight', 'overweight', 'fat', 'slim', 'fit', 'obese'],

  // Marriage and Relationships
  marriage: ['marriage', 'marry', 'married', 'shaadi', 'wedding', 'rishta'],
  married: ['married', 'shaadi', 'wedding done', 'life partner', 'husband', 'wife'],
  rishta: ['rishta', 'proposal', 'match', 'family introduction'],
  single: ['single', 'not married', 'alone', 'independent', 'shaadi nahi hui'],
  dating: ['dating', 'relationship', 'boyfriend', 'girlfriend', 'love life'],

  // Career
  career: ['career', 'profession', 'occupation', 'future plans', 'aspirations'],
  business: ['business', 'trade', 'startup', 'company', 'entrepreneurship', 'shop', 'dhandha'],
  promotion: ['promotion', 'career growth', 'raise', 'higher position', 'climbing ladder'],

  // Default
  default: ['life', 'advice', 'help', 'question', 'what to do', 'opinion', 'suggestion']
};



  const getAdvice = (input) => {
  const lowerInput = input.toLowerCase();
  let adviceKey = 'default';

  for (const [key, terms] of Object.entries(keywordMap)) {
    if (terms.some((term) => lowerInput.includes(term))) {
      adviceKey = key;
      break;
    }
  }

  const adviceOptions = adviceResponses[adviceKey];
  const advice = Array.isArray(adviceOptions)
    ? adviceOptions[Math.floor(Math.random() * adviceOptions.length)]
    : adviceOptions;

  setResponse(advice);
  speakAdvice(advice);
};


  const speakAdvice = (advice) => {
    const utterance = new SpeechSynthesisUtterance(advice);
    const voices = speechSynthesis.getVoices();
    utterance.voice = voices.find((voice) => voice.lang === 'en-IN') || voices[0]; // Fallback to first voice if 'en-IN' not found
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
