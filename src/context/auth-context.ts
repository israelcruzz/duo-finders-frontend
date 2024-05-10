import { createContext } from "react";

interface IAuthContext {
  auth: () => Promise<void>;
}

export const AuthContext = createContext({} as IAuthContext);
