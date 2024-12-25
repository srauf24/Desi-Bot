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
        placeholder="Type your question here, eg. Should I become a Lawyer?"
        rows="3"
        style={{
          width: '80%',
          padding: '10px',
          fontSize: '1rem',
          borderRadius: '5px',
          border: '1px solid #ccc',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          marginBottom: '10px',
        }}
      />
      <br />
      <button
        onClick={handleSubmit}
        style={{
          padding: '10px 20px',
          backgroundColor: '#3f51b5',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
          transition: 'background-color 0.3s ease',
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#303f9f')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#3f51b5')}
      >
        Get Advice
      </button>
    </div>
  );
};

export default InputBox;