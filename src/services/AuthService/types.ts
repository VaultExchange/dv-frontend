export interface LoginUserRequest {
  email: string;
  password: string;
  googleCode?: string;
}

export interface LoginUserResponse {
  token: string;
}

export interface RegisterUserRequest {
  email: string;
  password: string;
  password_confirmation: string;
}

export interface ResetPasswordRequest {
  email: string;
}

export interface SetNewPasswordRequest {
  token: string;
  password: string;
  password_confirmation: string;
}
