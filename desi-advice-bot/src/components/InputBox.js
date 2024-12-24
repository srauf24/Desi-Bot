import React, { useState } from 'react';

const InputBox = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    if (input.trim()) {
      onSubmit(input);
      setInput('');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your question here, eg. Should i become a lawyer?"
        rows="3"
        style={{ width: '80%', padding: '10px', fontSize: '1rem' }}
      />
      <br />
      <button onClick={handleSubmit} style={{ padding: '10px 20px', marginTop: '10px' }}>
        Get Advice
      </button>
    </div>
  );
};

export default InputBox;
