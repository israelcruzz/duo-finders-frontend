/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { ReactNode, useContext, useState } from "react";
import { AuthContext } from "./auth-context";
import { signIn, useSession } from 'next-auth/react'
import { IUser } from "@/@types/entities/user";

interface AuthProviderProps {
  children: ReactNode;
}

export async function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<IUser>();

  const auth = async () => {
    signIn();

    const { data } = useSession();
  };

  return (
    <AuthContext.Provider value={{ auth }}>{children}</AuthContext.Provider>
  );
}


export const useAuth = () => useContext(AuthContext)