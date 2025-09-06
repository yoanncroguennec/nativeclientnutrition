import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext"; // adapte ce chemin selon ta structure

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthContext.Provider");
  }
  return context;
};
