import { isEmptyOrWhitespace } from "../../../utils";

export const validateOtp = (otp) => {
  if (isEmptyOrWhitespace(otp)) {
    return "OTP is required.";
  }

  const trimmedOtp = otp.trim();

  if (!/^\d{6}$/.test(trimmedOtp)) {
    return "OTP must be exactly 6 digits.";
  }

  return null;
};
