/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { ReactNode, useContext, useState } from "react";
import { AuthContext } from "./auth-context";
import { signIn, useSession } from "next-auth/react";
import { IUser } from "@/@types/entities/user";
import { api } from "@/services/api";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/lib/next-auth/next-auth-options";

interface AuthProviderProps {
  children: ReactNode;
}

interface ResponseApiAuth {
  token: string;
  user: IUser;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<IUser>();
  const [token, setToken] = useState<string>();

  const auth = async () => {
    signIn();

    const session = (await getServerSession(nextAuthOptions)) as IUser;
    setUser(session);

    // const { data } = useSession();

    // try {
    //   if (data?.user) {
    //     const { token, user: user } = (await api.post("/auth", {
    //       name: data.user.name,
    //       avatar: data.user.image,
    //       banner: data.user.image,
    //       discord: data.user.name,
    //     })) as ResponseApiAuth;

    //     localStorage.setItem("@user-duofinders", JSON.stringify(user));
    //     localStorage.setItem("@token-duofinders", token);

    //     setToken(token);
    //     setUser(user);
    //   } else {
    //     console.log("not user...");
    //   }
    // } catch (error) {
    //   console.log("Error: " + error);
    // }
  };

  return (
    <AuthContext.Provider value={{ auth, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
