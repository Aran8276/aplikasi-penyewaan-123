import { GetUserResponse } from "@/server-actions/auth/User/User.type";

export interface HeaderViewProps {
  user: GetUserResponse | boolean | undefined;
  isAdmin: boolean;
}
