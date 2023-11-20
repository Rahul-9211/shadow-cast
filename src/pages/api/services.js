// import { API_BASE_URL_DEV } from "constant";

const API_BASE_URL_DEV = process.env.REACT_APP_API_BASE_URL_DEV
export const SERVICE_URL = {
  SIGN_IN: `${API_BASE_URL_DEV}/api/v1/user/auth/signin`,
  FORGOT_PASSWORD: `${API_BASE_URL_DEV}/api/v1/user/forgotPassword`,
  USERNAME_VALIDATOR: `${API_BASE_URL_DEV}/api/v1/user/auth/usernameValidator`,
  SIGN_UP: `${API_BASE_URL_DEV}/api/v1/user/auth/signup`,
  VERIFY_USER: `${API_BASE_URL_DEV}/api/v1/user/auth/verifyUser`,
  RESEND_VERIFICATION_EMAIL: `${API_BASE_URL_DEV}/api/v1/user/resendVerificationEmail`,
  VERIFY_FORGOT_PASSWORD_OTP: `${API_BASE_URL_DEV}/api/v1/user/verifyForgetPasswordOtp`,
  RESET_PASSWORD: `${API_BASE_URL_DEV}/api/v1/user/reset-password`,
  UPDATE_USERNAME_WITH_GENDER_DOB : `${API_BASE_URL_DEV}/api/v1/user/profile/updateUsernameWithGenderAndDob`
};