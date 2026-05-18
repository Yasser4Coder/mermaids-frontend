import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { AUTH_KEY } from "../lib/constants";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    try {
      setIsAuthenticated(localStorage.getItem(AUTH_KEY) === "1");
    } catch {
      setIsAuthenticated(false);
    }
  }, []);

  const signIn = useCallback(() => {
    localStorage.setItem(AUTH_KEY, "1");
    setIsAuthenticated(true);
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem(AUTH_KEY);
    setIsAuthenticated(false);
  }, []);

  const value = useMemo(
    () => ({ isAuthenticated, signIn, signOut }),
    [isAuthenticated, signIn, signOut]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
