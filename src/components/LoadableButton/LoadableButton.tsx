import { Button } from "../ui/button";
import { Loader } from "lucide-react";
import { LoadableButtonProps } from "./LoadableButton.type";

export default function LoadableButton({
  loading,
  children,
  ...props
}: LoadableButtonProps) {
  if (loading) {
    return (
      <Button {...props} disabled>
        <Loader className="animate-spin" /> {children}
      </Button>
    );
  }

  return <Button {...props}>{children}</Button>;
}
