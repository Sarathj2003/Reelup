import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import InputField from '../../../components/form/InputField';
import PrimaryButton from '../../../components/ui/PrimaryButton';
import { validateEmailOrPhone, validatePassword, validateFullName,validateConfirmPassword } from '../utils'

const Signup = () => {
    const [errors, setErrors] = useState({});
    const [fullName, setFullName] = useState('');
    const [emailOrMobile, setEmailOrMobile] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const handleSubmit = (e) => {
      e.preventDefault();

      const newErrors = {};

      const fullNameError = validateFullName(fullName);
      if (fullNameError) {
        newErrors.fullName = fullNameError;
      }

      const emailOrPhoneError = validateEmailOrPhone(emailOrMobile);
      if (emailOrPhoneError) {
        newErrors.emailOrMobile = emailOrPhoneError;
      }

      const passwordError = validatePassword(password);
      if (passwordError) {
        newErrors.password = passwordError;
      }

      const confirmPasswordError = validateConfirmPassword(password);
      if (confirmPasswordError) {
        newErrors.confirmPassword = confirmPasswordError;
      }

      setErrors(newErrors);

      if (Object.keys(newErrors).length === 0) {
        console.log("Login successful:", {
          email: emailOrMobile,
          password,
          });
          // Call your API
        }
    };

  return (
    <AuthLayout>
      <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <InputField
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          error={errors.fullName}
        />
        <InputField
          type="text"
          placeholder="Email or Mobile number"
          value={emailOrMobile}
          onChange={(e) => setEmailOrMobile(e.target.value)}
          error={errors.emailOrMobile}
        />
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
        />
        <InputField
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          error={errors.confirmPassword}
        />

        <PrimaryButton type='submit' className='w-full'>
            Sign Up
        </PrimaryButton>

        {/* Already have an account prompt */}
        <div className="text-center text-sm text-gray-500 mt-4">
          <span>Already have an account?</span>
          <Link  
          className="text-red-500 hover:underline ml-1"
          to = '/login'
          >
            Log In
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Signup;
