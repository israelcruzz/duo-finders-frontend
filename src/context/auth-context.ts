import { IUser } from "@/@types/entities/user";
import { createContext } from "react";

interface IAuthContext {
  auth: () => Promise<void>;
  user: IUser | undefined;
}

export const AuthContext = createContext({} as IAuthContext);
