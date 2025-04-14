import { isEmptyOrWhitespace } from "../../../utils";
import { validatePassword } from "./validatePassword";

export const validateConfirmPassword = (password, confirmPassword) => {
  if (isEmptyOrWhitespace(confirmPassword)) {
    return "Confirm password is required.";
  }

  const error = validatePassword(confirmPassword);
  if (error) return error;

  if (password !== confirmPassword) {
    return "Passwords do not match.";
  }

  return null;
};
