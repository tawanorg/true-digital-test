/* eslint-disable @typescript-eslint/no-redeclare */
import { IUserAnswer } from "../../types";

export interface IState {
  answers: IUserAnswer[];
}

export const INITIAL_STATES: IState = {
  answers: [],
};

export type IAction =
  | {
      type: "UPDATE_ANSWER";
      payload: IUserAnswer;
    }
  | {
      type: "SUBMIT_ANSWER";
    };

export const reducer = (
  state: IState = INITIAL_STATES,
  action: IAction
): IState => {
  switch (action.type) {
    case "UPDATE_ANSWER":
      const existingAnswer = state.answers.find(
        (a) => a.questionId === action.payload.questionId
      );

      if (!existingAnswer) {
        return {
          answers: state.answers.concat(action.payload),
        };
      }
      return {
        answers: state.answers
          .filter((a) => a.questionId !== action.payload.questionId)
          .concat(action.payload),
      };
    default:
      return state;
  }
};
