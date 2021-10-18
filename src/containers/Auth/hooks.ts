import { useContext } from "react";
import { AccountProvider } from "../../core/context";

export const useAuth = () => {
  const context = useContext(AccountProvider);

  if (!context)
    throw new Error("useAuth not inside its provider `AccountProvider`");

  return context;
};

export const useLogin = () => {};
