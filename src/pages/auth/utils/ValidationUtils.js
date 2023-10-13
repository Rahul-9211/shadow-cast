

export const isValidEmail = (email) => {
  const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  return emailRegex.test(email);
};

export const isStrongPassword = (password) => {
  const passwordStrengthRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&!])[A-Za-z\d@#$%^&!]{8,}$/;
  return passwordStrengthRegex.test(password);
};
