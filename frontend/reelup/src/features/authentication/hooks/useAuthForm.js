import { useState } from 'react';
import {
  validateEmailOrPhone,
  validatePassword,
  validateFullName,
  validateConfirmPassword,
} from '../utils';

const useAuthForm = (mode = 'login') => {
  const [fullName, setFullName] = useState('');
  const [emailOrMobile, setEmailOrMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleValidation = () => {
    const newErrors = {};

    if (mode === 'signup') {
      const nameError = validateFullName(fullName);
      if (nameError) newErrors.fullName = nameError;
    }

    const emailError = validateEmailOrPhone(emailOrMobile);
    if (emailError) newErrors.emailOrMobile = emailError;

    const passError = validatePassword(password);
    if (passError) newErrors.password = passError;

    if (mode === 'signup') {
      const confirmError = validateConfirmPassword(password, confirmPassword);
      if (confirmError) newErrors.confirmPassword = confirmError;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (callback) => (e) => {
    e.preventDefault();
    if (handleValidation()) {
      const formData = {
        fullName,
        emailOrMobile,
        password,
        ...(mode === 'signup' && { confirmPassword }),
      };
      callback(formData);
    }
  };

  return {
    fullName,
    setFullName,
    emailOrMobile,
    setEmailOrMobile,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    errors,
    handleSubmit,
  };
};

export default useAuthForm;
