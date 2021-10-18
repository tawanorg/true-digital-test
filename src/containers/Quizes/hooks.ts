import { useContext } from "react";
import { QuizContenxtProvider } from "../../core/context";

export const useQuize = () => {
  const context = useContext(QuizContenxtProvider);

  if (!context)
    throw new Error("useQuize not inside its provider `QuizContenxtProvider`");

  return context;
};
