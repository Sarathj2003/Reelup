// This is for checking if the user is passing
// only white spaces in inputbox and to trim the white spaces



export const isEmptyOrWhitespace = (str) => {
    return !str || str.trim().length === 0;
  };
  
  
  export const sanitizeString = (str) => str.trim();
  