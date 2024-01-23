import { useCallback } from "react";
import { createContext, useState } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  token: null,
  tokenExpirationDate: null,
  userId: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(false);
  const [tokenExpirationDate, setTokenExpirationDate] = useState();
  const [userId, setUserId] = useState();

  const login = useCallback((uId, token, expirationDate) => {
    setToken(token);
    const tokenExpirationDate = expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpirationDate(tokenExpirationDate);
    localStorage.setItem(
      "userData",
      JSON.stringify({ userId: uId, token: token, expiration: tokenExpirationDate.toISOString() })
    );
    setUserId(uId);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setTokenExpirationDate(null);
    setUserId(null);
    localStorage.removeItem('userData');
  }, []);

  const auth = {
    isLoggedIn: !!token,
    token,
    tokenExpirationDate,
    userId,
    login,
    logout,
  };
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
