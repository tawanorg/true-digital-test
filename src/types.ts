export interface IUserAnswer {
  questionId: number;
  answerId: number[];
}

export interface IAnswer {
  id: number;
  title: string;
}

export interface IQuize {
  id: number;
  question: string;
  correctAnswer: number[];
  choiceType: "SINGLE" | "MULTIPLE";
  answer: IAnswer[];
}

export interface IQuizProviderContext {
  questions: IQuize[];
  timer: number;
  totalNumberOfQuestions: number;
  currentQuestionId: number | null;
  totalScore: number;
}

export interface IAccountProviderContext {
  username: string | null;
  isAuthorized: boolean;
}

export type Page = "LOGIN" | "WELCOME" | "QUIZE" | "REVIEW" | "RESULT";
