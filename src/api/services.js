import { API_BASE_URL_DEV } from "constant";

export const SERVICE_URL = {
  SIGN_IN: `${API_BASE_URL_DEV}/api/v1/user/signin`,
  FORGOT_PASSWORD: `${API_BASE_URL_DEV}/api/v1/user/forgotPassword`,
  USERNAME_VALIDATOR: `${API_BASE_URL_DEV}/api/v1/auth/usernameValidator`,
  SIGN_UP: `${API_BASE_URL_DEV}/api/v1/user/signup`,
  VERIFY_USER: `${API_BASE_URL_DEV}/api/v1/user/auth/verifyUser`,
  RESEND_VERIFICATION_EMAIL: `${API_BASE_URL_DEV}/api/v1/user/resendVerificationEmail`,
  VERIFY_FORGOT_PASSWORD_OTP: `${API_BASE_URL_DEV}/api/v1/user/verifyForgetPasswordOtp`,
  RESET_PASSWORD: `${API_BASE_URL_DEV}/api/v1/user/reset-password`,
};
