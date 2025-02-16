import { ReactNode } from "react";
import { ButtonProps } from "../ui/button";

export interface LoadableButtonProps extends ButtonProps {
  loading?: boolean;
  children: ReactNode;
}
