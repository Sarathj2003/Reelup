import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import InputField from '../../../components/form/InputField';
import PrimaryButton from '../../../components/ui/PrimaryButton';
import useAuthForm from '../hooks/useAuthForm';
import { validateEmailOrPhone } from '../utils';
import PageHeader from '../../../components/ui/PageHeader';

const ForgotPassword = () => {
  const navigate = useNavigate();

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useAuthForm(
    { emailOrMobile: '' },
    { emailOrMobile: validateEmailOrPhone },
    (values) => {
      console.log("Send OTP to:", values.emailOrMobile);
    //   API call
    // if Api call is successfull
        navigate('/verify-otp', { 
            state: { 
                from: 'forgotPassword',
                emailOrMobile: values.emailOrMobile, 
            } 
        });
    }
  );

  return (
    <AuthLayout > 
        <PageHeader title="Forgot Password" onBack={() => navigate(-1)} />
        <form className="space-y-4" onSubmit={handleSubmit}>
        <InputField
          type="text"
          placeholder="Enter Email or Mobile Number"
          value={values.emailOrMobile}
          className='h-12'
          onChange={handleChange('emailOrMobile')}
          error={errors.emailOrMobile}
        />

          <PrimaryButton type="submit" className='w-full'>
            Send OTP
          </PrimaryButton>
        
      </form>
    </AuthLayout>
  );
};

export default ForgotPassword;
