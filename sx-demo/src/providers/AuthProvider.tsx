import { Auth } from "@/types";
import { PropsWithChildren, createContext, useContext, useState } from "react";

type AuthType = {
  auth?: Auth,
  login: (auth: Auth) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthType>({
  login: () => {},
  logout: () => {},
});

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [auth, setAuth] = useState<Auth>();
  const login = (auth: Auth) => {
    setAuth(auth);
  }
  const logout = () => {
    setAuth(undefined);
  };
  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
export const useAuth = () => useContext(AuthContext);