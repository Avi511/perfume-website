import React from 'react';

const EmptyState = ({ title = 'No data found', description = 'There\'s nothing to display here.' }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default EmptyState;
