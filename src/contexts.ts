import { createContext } from "react";
import { AuthContextType } from "./sharedExports";

export const AuthContext = createContext<AuthContextType>({
  authState: { id: -1, name: "" },
  setAuthState: () => {
    return {} as any;
  },
});
