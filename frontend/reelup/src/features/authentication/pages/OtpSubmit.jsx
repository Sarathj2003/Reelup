import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import InputField from '../../../components/form/InputField';
import OTPInput from '../../../components/form/OTPInput';
import PrimaryButton from '../../../components/ui/PrimaryButton';
import useAuthForm from '../hooks/useAuthForm';
import { validateOtp } from '../utils';
import PageHeader from '../../../components/ui/PageHeader';

const OtpSubmit = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { from } = state || {};


  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    setValues,
    setErrors
  } = useAuthForm(
    { otp: '' },
    { otp: validateOtp },
    (values) => {
      console.log("your otp is :", values.otp);
    //   API call
        if (from === 'signup') {
            // call signup otp verification API
            console.log('signup otp verification')
        } else if (from === 'forgotPassword') {
            // call forgot password otp verification API
            console.log('forgot password otp verification')
        } else {
            // unknown error in otp verification 
            console.log('unknown error in otp verification')
        }
    }
  );

  return (
    <AuthLayout > 
        <PageHeader title="Verify OTP" onBack={() => navigate(-1)} />
        <form className="space-y-4" onSubmit={handleSubmit}>
        <OTPInput
            value={values.otp}
            onChange={(val) => {
                setValues((prev) => ({ ...prev, otp: val }));
                const error = validateOtp(val);
                setErrors((prev) => ({ ...prev, otp: error }));
            }}
            error={errors.otp}
        />


          <PrimaryButton type="submit" className='w-full'>
            Verify OTP
          </PrimaryButton>
        
      </form>
    </AuthLayout>
  );
};

export default OtpSubmit;
