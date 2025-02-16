export interface LoginResponse {
  success: boolean;
  message: string;
  data: Data;
  access_token: string;
  refresh_token: string;
}

interface Data {
  id: number;
  name: string;
  email: string;
  email_verified_at: null;
  created_at: Date;
  updated_at: Date;
}
