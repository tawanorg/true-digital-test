import React from "react";
import { IQuizProviderContext, IAccountProviderContext } from "../types";

export const QuizContenxtProvider = React.createContext<IQuizProviderContext>({
  currentQuestionId: null,
  timer: 0,
  totalNumberOfQuestions: 0,
  totalScore: 0,
  questions: [],
});

export const AccountProvider = React.createContext<IAccountProviderContext>({
  username: null,
  isAuthorized: false,
});
