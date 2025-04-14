import { isEmptyOrWhitespace } from "../../../utils";

export const validatePassword = (password) => {
  if (isEmptyOrWhitespace(password)) {
    return "Password is required.";
  }

  const value = password.trim();

  if (value.length < 6 || value.length > 15) {
    return "Password must be 6-15 characters long.";
  }

  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

  return regex.test(value)
    ? null
    : "Password must contain uppercase, lowercase, number, and special character.";
};
