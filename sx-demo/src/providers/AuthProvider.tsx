import { Auth } from "@/types";
import { PropsWithChildren, createContext, useContext, useState } from "react";

type AuthType = {
  auth?: Auth,
  signin: (auth: Auth) => void;
  signout: () => void;
}

const AuthContext = createContext<AuthType>({
  signin: () => {},
  signout: () => {},
});

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [auth, setAuth] = useState<Auth>();

  const signin = (auth: Auth) => {
    console.log("Signin called with auth:", auth); // ログ出力追加
    setAuth(auth);
  }

  const signout = () => {
    console.log("Signout called"); // ログ出力追加
    setAuth(undefined);
  };

  return (
    <AuthContext.Provider value={{ auth, signin, signout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
export const useAuth = () => useContext(AuthContext);
