import { isEmptyOrWhitespace } from "../../../utils";

export const validateEmailOrPhone = (input) => {
  if (isEmptyOrWhitespace(input)) {
    return "Email or mobile number is required.";
  }

  const value = input.trim();

  const hasLetters = /[a-zA-Z]/.test(value);
  if (hasLetters) {
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value) ? null : "Invalid email format.";
  } else {
    
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(value) ? null : "Invalid mobile number.";
  }
};
