import React, { useRef } from 'react';
import ErrorMessage from '../ui/ErrorMessage';


const OTPInput = ({ length = 6, value = '', onChange, error }) => {
  const inputsRef = useRef([]);

  const handleChange = (e, idx) => {
    const val = e.target.value;
    if (/^\d?$/.test(val)) {
      const newOtp = value.split('');
      newOtp[idx] = val;
      onChange(newOtp.join(''));

      // Auto-focus next input
      if (val && idx < length - 1) {
        inputsRef.current[idx + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === 'Backspace' && !value[idx] && idx > 0) {
      const newOtp = value.split('');
      newOtp[idx - 1] = '';
      onChange(newOtp.join(''));
      inputsRef.current[idx - 1]?.focus();
    }
  };

  return (
    <>
      <div className="flex justify-between gap-2">
        {Array.from({ length }).map((_, idx) => (
          <input
            key={idx}
            type="text"
            maxLength={1}
            value={value[idx] || ''}  // Ensure value[idx] is handled safely
            onChange={(e) => handleChange(e, idx)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            ref={(el) => (inputsRef.current[idx] = el)}
            className={`w-12 h-12 text-center text-lg border rounded-lg focus:outline-none focus:ring-2 ${
              error ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-red-400'
            }`}
          />
        ))}
      </div>
      <div style={{ minHeight: '1.25rem' }}>
        {error ? <ErrorMessage message={error} /> : null}
      </div>
    </>
  );
};

export default OTPInput;
