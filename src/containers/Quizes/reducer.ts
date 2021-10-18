/* eslint-disable @typescript-eslint/no-redeclare */
import { IQuizProviderContext } from "../../types";

export interface IState extends IQuizProviderContext {}

export const INITIAL_STATES: IState = {
  questions: [],
  totalScore: 0,
  currentQuestionId: null,
  timer: 0,
  totalNumberOfQuestions: 0,
};

export type IAction =
  | {
      type: "INIT";
      payload: Pick<IState, "questions">;
    }
  | {
      type: "NEXT";
    }
  | {
      type: "BACK";
    };

export const reducer = (
  state: IState = INITIAL_STATES,
  action: IAction
): IState => {
  switch (action.type) {
    case "INIT":
      return {
        ...state,
        ...action.payload,
        currentQuestionId: action.payload.questions[0].id,
        totalNumberOfQuestions: action.payload.questions.length,
      };
    case "NEXT":
      const curentQuestionIndex = state.questions.findIndex(
        (q) => q.id === state.currentQuestionId
      );

      const nextQuestion = state.questions[curentQuestionIndex + 1];

      if (!nextQuestion) {
        return {
          ...state,
          currentQuestionId: state.questions[0].id,
        };
      }

      return {
        ...state,
        currentQuestionId: nextQuestion.id,
      };
    case "BACK":
      const prevQuestionIndex = state.questions.findIndex(
        (q) => q.id === state.currentQuestionId
      );
      const prevQuestion = state.questions[prevQuestionIndex - 1];
      return {
        ...state,
        currentQuestionId: prevQuestion.id,
      };
    default:
      return state;
  }
};
