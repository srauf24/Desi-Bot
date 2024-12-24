import React from 'react';

const ResponseBox = ({ response }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h3>Advice:</h3>
      <p>{response}</p>
    </div>
  );
};

export default ResponseBox;
