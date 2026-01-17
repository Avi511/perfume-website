import React from 'react';

const ErrorState = ({ title = 'Something went wrong', description = 'Please try again later.' }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <h3 className="text-xl font-semibold text-red-600 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ErrorState;
