import { FormEvent } from "react";

export interface LoginProps {
  isLoading: boolean;
  error: string;
  onSubmit(event: FormEvent<HTMLFormElement>): Promise<void>;
}
