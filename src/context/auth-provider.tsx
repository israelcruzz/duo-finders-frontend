"use client";

import { ReactNode, useContext, useEffect } from "react";
import { AuthContext } from "./auth-context";
import { useSession } from "next-auth/react";
import { api } from "@/services/api";

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${session.token}`;
    }
  });

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
