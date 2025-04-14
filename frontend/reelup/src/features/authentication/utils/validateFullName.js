import { isEmptyOrWhitespace } from "../../../utils";

export const validateFullName = (name) => {
  if (isEmptyOrWhitespace(name)) {
    return "Full name is required.";
  }

  if (name.trim().length < 3) {
    return "Name must be at least 3 characters.";
  }

  return null;
};
