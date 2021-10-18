import React, { Reducer } from "react";
import { Flex } from "@chakra-ui/react";
import { AccountProvider, QuizContenxtProvider } from "./core/context";

import LoginForm from "./components/LoginForm";
import Header from "./components/Header";

import { IAccountProviderContext, IQuizProviderContext, Page } from "./types";
import * as AuthReducer from "./containers/Auth/reducer";
import * as QuizeReducer from "./containers/Quizes/reducer";
import * as UserReducer from "./containers/User/reducer";
import useFormHook from "./hooks/form-hooks";
import WelcomePage from "./containers/Welcome";
import QuizePage from "./containers/Quizes";
import { QUIZES } from "./api";

function App() {
  const [currentPage, setPage] = React.useState<Page>("LOGIN");

  // Auth reducer
  const [auth, authDispatcher] = React.useReducer<
    Reducer<AuthReducer.IState, AuthReducer.IAction>
  >(AuthReducer.reducer, AuthReducer.INITIAL_STATES);

  // Quize reducer
  const [quize, quizeDispatcher] = React.useReducer<
    Reducer<QuizeReducer.IState, QuizeReducer.IAction>
  >(QuizeReducer.reducer, QuizeReducer.INITIAL_STATES);

  // Answer sheet reducer
  const [userAnswers, answerDispatcher] = React.useReducer<
    Reducer<UserReducer.IState, UserReducer.IAction>
  >(UserReducer.reducer, UserReducer.INITIAL_STATES);

  // Loign state form
  const [form, onChange] = useFormHook<
    Pick<AuthReducer.IState, "username" | "password">
  >({
    username: "",
    password: "",
  });

  // Handlers
  const handleSubmit = () => {
    authDispatcher({
      type: "AUTH_REQUEST",
      payload: form,
    });

    setTimeout(() => {
      authDispatcher({
        type: "AUTH_COMPLETED",
      });
    }, 200);
  };

  const handleNextQuestion = () => {
    quizeDispatcher({
      type: "NEXT",
    });
  };

  const handleBackQuestion = () => {
    quizeDispatcher({
      type: "BACK",
    });
  };

  const handleStart = () => {
    quizeDispatcher({
      type: "INIT",
      payload: {
        questions: QUIZES,
      },
    });
  };

  const handleUpdateAnswer = (questionId: number, answerId: number[]) => {
    answerDispatcher({
      type: "UPDATE_ANSWER",
      payload: {
        questionId,
        answerId,
      },
    });
  };

  // Auth context values
  const accountValues: IAccountProviderContext = {
    isAuthorized: auth.isAuthorized,
    username: auth.username,
  };

  // Quize context
  const quizValues: IQuizProviderContext = quize;

  // Check authorisation
  React.useEffect(() => {
    if (auth.isAuthorized) {
      setPage("WELCOME");
      return;
    }

    setPage("LOGIN");
  }, [auth.isAuthorized]);

  // Change page on quizing
  React.useEffect(() => {
    if (quize.currentQuestionId) {
      setPage("QUIZE");
    }
  }, [quize.currentQuestionId]);

  const renderPage = () => {
    switch (currentPage) {
      case "WELCOME":
        return <WelcomePage onStart={handleStart} />;
      case "QUIZE":
        return (
          <QuizePage
            onUpdateAnswer={handleUpdateAnswer}
            onBack={handleBackQuestion}
            onNext={handleNextQuestion}
          />
        );
      default:
        return (
          <Flex p="10">
            <LoginForm
              onSubmit={handleSubmit}
              onChangeUsername={(username) => onChange("username", username)}
              onChangePassword={(password) => onChange("password", password)}
            />
          </Flex>
        );
    }
  };

  console.log("userAnswers", userAnswers);

  return (
    <AccountProvider.Provider value={accountValues}>
      <QuizContenxtProvider.Provider value={quizValues}>
        {auth.isAuthorized && <Header />}
        {renderPage()}
      </QuizContenxtProvider.Provider>
    </AccountProvider.Provider>
  );
}

export default App;
