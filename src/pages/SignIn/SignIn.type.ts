import { FormEvent } from "react";

export interface SignInProps {
  isLoading: boolean;
  error: string;
  onSubmit(event: FormEvent<HTMLFormElement>): Promise<void>;
}
