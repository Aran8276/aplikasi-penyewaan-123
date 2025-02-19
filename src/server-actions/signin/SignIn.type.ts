export interface SignInResponse {
    success: boolean;
    message: string;
    data: SignInData;
    access_token: string;
    refresh_token: string;
  }
  
  interface SignInData {
    id: number;
    name: string;
    email: string;
    email_verified_at: null;
    created_at: Date;
    updated_at: Date;
  }