import React from 'react';
import ErrorMessage from '../ui/ErrorMessage';

const InputField = ({ type, placeholder, value, onChange, error, className = '' }) => {
  return (
    <>
      <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full px-3 py-1 border rounded-lg focus:outline-none focus:ring-2 ${
        error ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-red-400'
      } ${className}`}      
      />
      <div style={{ minHeight: '1.25rem' }}>
        {error ? <ErrorMessage message={error} /> : null}
      </div>
    </>
  );
};

export default InputField;
