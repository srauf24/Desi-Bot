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
// Emotional Responses
  stressed: [
    "Beta, stress is for people who actually work hard. What have you done to be stressed?",
    "Beta, stress? Just drink chai and stop thinking so much.",
    "Beta, stress doesn’t solve anything. Finish your work instead!"
  ],
  overwhelmed: [
    "Beta, overwhelmed? Sharma ji’s son handles a job, family, and gym!",
    "Beta, you’re 24. Overwhelmed by what? Wait till you’re paying bills!",
    "Beta, this is life. Being overwhelmed is normal. Learn to manage it!"
  ],
  sad: [
    "Beta, sadness is for weak people. Get up and do something productive!",
    "Beta, sadness won’t pay your rent. Go study or work.",
    "Beta, why are you sad? You have a roof, food, and Wi-Fi. What else do you need?"
  ],
  happy: [
    "Beta, why are you so happy? Did you invent something? Win a Nobel Prize?",
    "Beta, don’t celebrate too much. Nazar lag jayegi!",
    "Beta, happiness is temporary. Focus on your goals instead of smiling."
  ],
  tired: [
    "Beta, tiredness is for people who build houses, not for those who sit at desks!",
    "Beta, tired? At your age, I used to walk 10 kilometers daily!",
    "Beta, sleep is for the lazy. Get up and work harder!"
  ],
  anxious: [
    "Beta, anxiety is just an excuse. Drink some chai and face the problem.",
    "Beta, don’t overthink. Just do what needs to be done. Problem solved!",
    "Beta, anxiety doesn’t exist in our generation. It’s for people with free time."
  ],
  lonely: [
    "Beta, lonely? You have family. What else do you need?",
    "Beta, loneliness is for people without purpose. Find a goal and work towards it.",
    "Beta, just get married. Problem solved!"
  ],
  lost: [
    "Beta, how can you be lost? Sharma ji’s son has a roadmap for his life already!",
    "Beta, lost? Just find yourself. It’s not that hard.",
    "Beta, you’re not lost. You’re just lazy and not thinking hard enough."
  ],
  unmotivated: [
    "Beta, unmotivated? You should see how we worked at your age!",
    "Beta, motivation is overrated. Just do what needs to be done!",
    "Beta, you don’t need motivation. You need discipline. Get moving!"
  ],
  hungry: [
    "Beta, if you’re hungry, eat food, not excuses.",
    "Beta, hunger won’t kill you. Finish your work first.",
    "Beta, make yourself useful and cook something. You’re not royalty!"
  ],
  thirsty: [
    "Beta, you’re thirsty? Drink water and stop complaining.",
    "Beta, chai is the only drink you need. Forget everything else.",
    "Beta, if you’re thirsty, stop scrolling Instagram and go to the kitchen!"
  ],
  bored: [
    "Beta, bored? Clean the house. You won’t feel bored anymore.",
    "Beta, if you’re bored, Sharma ji’s son is available to teach you life lessons.",
    "Beta, boredom is a sign of laziness. Find a goal!"
  ],
  sleepy: [
    "Beta, you’re sleepy? Wake up! The world isn’t waiting for you.",
    "Beta, tiredness is temporary, but failure is permanent. Get back to work!",
    "Beta, no one sleeps their way to success. Keep going!"
  ],

  default: [
    "Beta, life is short, but people’s gossip lasts forever. Think about that.",
    "Beta, whatever you do, just don’t embarrass the family name!",
    "Beta, log kya kahenge should be your priority in every decision."
  ]
};


  const keywordMap = {
  hungry: ['hungry', 'hunger', 'starving', 'food', 'need food', 'eat', 'eating', 'ate', 'will eat'],
  thirsty: ['thirsty', 'thirst', 'need water', 'drink', 'drinking', 'drank', 'will drink', 'water', 'juice', 'beverage'],
  bored: ['bored', 'boredom', 'nothing to do', 'boring', 'feel bored', 'felt bored', 'will be bored'],
  sleepy: ['sleepy', 'tired', 'need sleep', 'want to sleep', 'feeling sleepy', 'slept', 'will sleep', 'bedtime', 'nap'],
  // School and Education
  school: ['school', 'schools', 'syllabus', 'syllabi', 'homework', 'assignments', 'class', 'classes', 'teacher', 'teachers', 'marks', 'grades', 'education', 'learning', 'studying', 'studied', 'will study'],
  college: ['college', 'colleges', 'university', 'universities', 'campus', 'campuses', 'degree', 'degrees', 'friends at college', 'professor', 'professors', 'university friends', 'higher education'],
  exam: ['exam', 'exams', 'test', 'tests', 'quiz', 'quizzes', 'paper', 'papers', 'finals', 'final exam', 'final exams', 'revision', 'study', 'studied', 'studying', 'will study', 'syllabus'],

  // Finance and Money
  money: ['money', 'income', 'earnings', 'wealth', 'salary', 'salaries', 'bank account', 'accounts', 'funds', 'cash', 'money earned', 'make money', 'making money'],
  savings: ['saving', 'savings', 'save', 'saved', 'saving money', 'financial security', 'piggy bank', 'bank savings', 'accumulating money'],
  investment: ['investment', 'investments', 'invest', 'invested', 'will invest', 'real estate', 'property', 'properties', 'stocks', 'mutual funds', 'funds', 'investment planning', 'portfolio'],
  loan: ['loan', 'loans', 'borrow', 'borrowed', 'borrowing', 'debt', 'debts', 'emi', 'interest rate', 'credit', 'credit line', 'borrow money', 'loan payment', 'loan repayment'],

  // Parenting and Family
  parenting: ['parenting', 'parent', 'parents', 'raising kids', 'raising children', 'child care', 'taking care of kids', 'teaching kids', 'guiding children', 'disciplining children'],
  kids: ['kids', 'children', 'child', 'baby', 'babies', 'son', 'sons', 'daughter', 'daughters', 'bachay', 'offspring', 'your kids', 'my kids'],
  family: ['family', 'families', 'relatives', 'ghar', 'household', 'parents', 'mother', 'father', 'brothers', 'sisters', 'cousins', 'extended family', 'close family'],

  // Social Life
  friends: ['friends', "fun", 'friend', 'friendship', 'best friend', 'best friends', 'doston', 'buddies', 'group hangouts', 'friend group', 'peer group'],
  party: ['party', 'parties', 'celebration', 'celebrations', 'birthday party', 'night out', 'outing', 'wedding party', 'social gathering'],
  social_media: ['social media', 'instagram', 'facebook', 'tiktok', 'snapchat', 'twitter', 'youtube', 'reels', 'shorts', 'social networking', 'online platforms', 'media posts'],
  travel: ['travel', 'travels', 'vacation', 'vacations', 'trip', 'trips', 'tourism', 'tourist', 'touring', 'destination', 'journey', 'journeys', 'sightseeing', 'exploring', 'traveling', 'traveled', 'will travel'],

  // Health and Lifestyle
  health: ['health', 'healthy', 'well-being', 'wellness', 'fitness', 'fit', 'physical health', 'mental health', 'emotional health', 'sehat', 'living healthy'],
  exercise: ['exercise', 'exercising', 'gym', 'working out', 'workout', 'workouts', 'running', 'walking', 'yoga', 'stretching', 'training', 'fitness routine', 'exercised', 'will exercise'],
  junk_food: ['junk food', 'fast food', 'burger', 'burgers', 'pizza', 'pizzas', 'fries', 'takeout', 'unhealthy food', 'processed food', 'junk eating', 'eating out'],
  diet: ['diet', 'dieting', 'balanced diet', 'nutrition', 'eating habits', 'food habits', 'diet plan', 'diet plans', 'meal planning', 'healthy eating'],
  weight: ['weight', 'weights', 'overweight', 'fat', 'slim', 'fit', 'obese', 'gained weight', 'losing weight', 'weight loss', 'weight gain', 'will lose weight'],

  // Marriage and Relationships
  marriage: ['marriage', 'marriages', 'marry', 'marries', 'married', 'shaadi', 'wedding', 'weddings', 'rishta', 'life partner', 'spouse', 'nuptials'],
  married: ['married', 'shaadi', 'wedding', 'wedding done', 'husband', 'wife', 'spouse', 'marital life', 'marital status'],
  rishta: ['rishta', 'rishtay', 'proposal', 'match', 'matches', 'family introduction', 'marriage proposal', 'proposal meeting'],
  single: ['single', 'not married', 'alone', 'independent', 'shaadi nahi hui', 'unmarried', 'living alone', 'without partner'],
  dating: ['dating', 'relationship', 'relationships', 'boyfriend', 'girlfriend', 'love life', 'romantic life', 'romance'],

  // Career and Work
  career: ['career', 'careers', 'profession', 'professions', 'occupation', 'occupations', 'future plan', 'future plans', 'aspiration', 'aspirations', 'career path', 'career choice', 'working', 'worked', 'will work'],
  business: ['business', 'businesses', 'trade', 'trading', 'startup', 'startups', 'company', 'companies', 'entrepreneurship', 'entrepreneur', 'entrepreneurs', 'shop', 'shops', 'dhandha', 'run a business', 'running a business'],
  promotion: ['promotion', 'promotions', 'career growth', 'raise', 'raises', 'higher position', 'climbing the ladder', 'career advancement', 'promoted', 'getting promoted', 'will be promoted'],

  // Emotions
  overwhelmed: ['overwhelmed', 'feeling overwhelmed', 'too much', 'can’t handle', 'couldn’t handle', 'handling too much', 'burnout', 'burned out', 'feeling burnt out', 'will feel overwhelmed'],
  sad: ['sad', 'saddened', 'depressed', 'depressing', 'feeling down', 'felt down', 'will feel sad', 'feels sad'],
  happy: ['happy', 'happier', 'happiest', 'excited', 'exciting', 'joyful', 'joy', 'thrilled', 'thrilling', 'feeling happy', 'felt happy', 'will be happy'],
  tired: ['tired', 'exhausted', 'fatigued', 'fatigue', 'drained', 'feeling tired', 'felt tired', 'will feel tired'],
  anxious: ['anxious', 'anxiety', 'nervous', 'nervousness', 'worried', 'worry', 'worries', 'feeling anxious', 'felt anxious', 'will feel anxious'],
  lonely: ['lonely', 'alone', 'isolated', 'feeling lonely', 'felt lonely', 'will feel lonely', 'feels alone'],
  lost: ['lost', 'confused', 'confusion', 'don’t know', 'don’t understand', 'felt lost', 'feeling lost', 'will feel lost', 'without direction', 'no direction'],
  unmotivated: ['unmotivated', 'unmotivating', 'lazy', 'laziness', 'no energy', 'low energy', 'lost motivation', 'will lose motivation', 'feeling lazy', 'felt lazy'],

  // Default
  default: ['life', 'advice', 'help', 'question', 'questions', 'what to do', 'opinion', 'opinions', 'suggestion', 'suggestions', 'idea', 'ideas', 'need guidance', 'guidance']
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
