import { IAccountProviderContext } from "../../types";

export interface IState extends IAccountProviderContext {
  isFailure: boolean;
  failureMessage?: string | null;
  isAuthorizing: boolean;
  password: string;
}

export const INITIAL_STATES: IState = {
  isAuthorizing: false,
  isAuthorized: false,
  isFailure: false,
  password: "",
  username: "",
  failureMessage: null,
};

export type IAction =
  | {
      type: "AUTH_REQUEST";
      payload: Pick<IState, "password" | "username">;
    }
  | {
      type: "AUTH_FAILURE";
      payload: Pick<IState, "failureMessage">;
    }
  | {
      type: "AUTH_COMPLETED";
    };

export const reducer = (
  state: IState = INITIAL_STATES,
  action: IAction
): IState => {
  switch (action.type) {
    case "AUTH_REQUEST":
      return {
        ...state,
        isAuthorizing: true,
        username: action.payload.username,
        password: action.payload.password,
      };
    case "AUTH_COMPLETED":
      return {
        ...INITIAL_STATES,
        ...state,
        isAuthorized: true,
        isAuthorizing: false,
      };
    case "AUTH_FAILURE":
      return {
        ...INITIAL_STATES,
        isFailure: true,
        failureMessage: action.payload.failureMessage,
      };

    default:
      return state;
  }
};
