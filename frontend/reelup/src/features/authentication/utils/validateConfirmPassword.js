import { isEmptyOrWhitespace } from "../../../utils";
import { validatePassword } from "./index";


export const validateConfirmPassword = (confirmPassword, values) => {
  if (isEmptyOrWhitespace(confirmPassword)) {
    return "Confirm password is required.";
  }

  const error = validatePassword(confirmPassword);
  if (error) return error;

  if (values.password !== confirmPassword) {
    return "Passwords do not match.";
  }

  return null;
};
