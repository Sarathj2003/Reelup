import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import InputField from '../../../components/form/InputField';
import PrimaryButton from '../../../components/ui/PrimaryButton';
import { validateEmailOrPhone, validatePassword, validateFullName,validateConfirmPassword } from '../utils'
import useAuthForm from '../hooks/useAuthForm';



const Signup = () => {
  const navigate = useNavigate();

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useAuthForm(
    {
      fullName: '',
      emailOrMobile: '',
      password: '',
      confirmPassword: '',
    },
    {
      fullName: validateFullName,
      emailOrMobile: validateEmailOrPhone,
      password: validatePassword,
      confirmPassword: validateConfirmPassword,
    },
    (values) => {
      console.log("Signup successful:", values);
    //   API call
    // if Api call is successfull
      navigate('/verify-otp', { 
          state: { 
              from: 'signup',
              emailOrMobile: values.emailOrMobile, 
          } 
      });
    }
  );

  return (
    <AuthLayout>
      <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <InputField
          type="text"
          placeholder="Full Name"
          value={values.fullName}
          onChange={handleChange('fullName')}
          error={errors.fullName}
        />
        <InputField
          type="text"
          placeholder="Email or Mobile number"
          value={values.emailOrMobile}
          onChange={handleChange('emailOrMobile')}
          error={errors.emailOrMobile}
        />
        <InputField
          type="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange('password')}
          error={errors.password}
        />
        <InputField
          type="password"
          placeholder="Confirm Password"
          value={values.confirmPassword}
          onChange={handleChange('confirmPassword')}
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
