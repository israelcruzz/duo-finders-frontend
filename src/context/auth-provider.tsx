"use client";

import { ReactNode, useContext } from "react";
import { AuthContext } from "./auth-context";

interface AuthProviderProps {
  children: ReactNode;
}

export async function AuthProvider({ children }: AuthProviderProps) {
  const auth = async () => {};

  return (
    <AuthContext.Provider value={{ auth }}>{children}</AuthContext.Provider>
  );
}


export const useAuth = () => useContext(AuthContext)