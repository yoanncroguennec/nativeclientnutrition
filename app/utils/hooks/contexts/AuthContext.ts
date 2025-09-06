import React, { createContext } from "react";

interface AuthContextType {
  userToken: string | null;
  userId: string | null;
  isAuthenticated: boolean;
  setTokenAndId: (token: string | null, id: string | null) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
