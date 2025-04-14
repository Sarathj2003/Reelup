import React from 'react';

const ErrorMessage = ({ message }) => {
  if (!message) return null;  

  return (
    <div className="text-red-600 text-sm">
      {message}
    </div>
  );
};

export default ErrorMessage;