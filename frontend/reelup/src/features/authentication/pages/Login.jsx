import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import InputField from '../../../components/form/InputField';
import PrimaryButton from '../../../components/ui/PrimaryButton';
import { validateEmailOrPhone, validatePassword } from '../utils'
import useAuthForm from '../hooks/useAuthForm';


const Login = () => {
    const [emailOrMobile, setEmailOrMobile] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({}); 

    const handleSubmit = (e) => {
      e.preventDefault();

      const newErrors = {};

      const emailOrPhoneError = validateEmailOrPhone(emailOrMobile);
      if (emailOrPhoneError) {
        newErrors.emailOrMobile = emailOrPhoneError;
      }

      const passwordError = validatePassword(password);
      if (passwordError) {
        newErrors.password = passwordError;
      }
      
      setErrors(newErrors);

      if (Object.keys(newErrors).length === 0) {
        console.log("Login successful:", { email: emailOrMobile, password });
        // Call your API 
      }

    }

  return (

    <AuthLayout>
      <h2 className="text-3xl font-bold mb-6 text-center">Log In</h2>
      <form className="space-y-4" onSubmit={handleSubmit} >
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
