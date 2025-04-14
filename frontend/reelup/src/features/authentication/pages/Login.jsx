import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import InputField from '../../../components/form/InputField';
import PrimaryButton from '../../../components/ui/PrimaryButton';
import { validateEmailOrPhone, validatePassword } from '../utils'
import useAuthForm from '../hooks/useAuthForm';


const Login = () => {
  
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useAuthForm(
    {
      emailOrMobile: '',
      password: '',
    },
    {
      emailOrMobile: validateEmailOrPhone,
      password: validatePassword,
    },
    (values) => {
      console.log("Login successful:", values);
      // Call API
    }
  );


  return (

    <AuthLayout>
      <h2 className="text-3xl font-bold mb-6 text-center">Log In</h2>
      <form className="space-y-4" onSubmit={handleSubmit} >
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

        <div className="text-right text-sm text-gray-500 hover:underline cursor-pointer">
          Forgot Password?
        </div>

        <PrimaryButton type='submit' className='w-full'>
            Login
        </PrimaryButton>
        
        {/* Sign Up prompt */}
        <div className="text-center text-sm text-gray-500 mt-4">
          <span>Don't have an account yet?</span>
          <Link  
          className="text-red-500 hover:underline ml-1"
          to = '/signup'
          >
            Sign up
          </Link>
        </div>
      </form>
    </AuthLayout>

    
  );
};

export default Login;
