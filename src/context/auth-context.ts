import { createContext } from "react";

interface IAuthContext {
  auth: () => Promise<void>;
}

const AuthContext = createContext({} as IAuthContext);
