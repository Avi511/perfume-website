import React from 'react';

const Error = ({ message = 'An error occurred' }) => {
  return (
    <div className="text-center py-12 text-red-600">
      <p>{message}</p>
    </div>
  );
};

export default Error;
