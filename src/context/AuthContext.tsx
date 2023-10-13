"use client";
import { setCookie } from "cookies-next";
import { AuthContextType, UserInfo } from "@/type/type";
import { useRouter } from "next/navigation";
import {
  createContext,
  useContext,
  ReactNode,
  useState,
} from "react";


const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [loginUser, setLoginUser] = useState<UserInfo | undefined>();

  const userLogin = async (userName: string, password: string):Promise<void> => {
    const userListResponse = await fetch(
      "https://65255fda67cfb1e59ce72c13.mockapi.io/Users"
    );
    const userList = await userListResponse.json();

    const user = await userList.find((u: UserInfo) => {
      return u.UserName == userName && u.Password == password;
    });

    if (user) {
      await setLoginUser(user);
      await router.push("/");
      setCookie("deneme" , user)
    } else {
      console.log(await user);
      throw new Error("Kullanıcı bulunamadı");
    }
  };

  return (
    <AuthContext.Provider value={{ userLogin, loginUser, setLoginUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
