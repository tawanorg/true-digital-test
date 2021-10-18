import React from "react";
import {
  Button,
  RadioGroup,
  Radio,
  Flex,
  Stack,
  Checkbox,
} from "@chakra-ui/react";
import { useQuize } from "./hooks";
import { IAnswer } from "../../types";

interface Props {
  onNext: () => void;
  onBack: () => void;
  onUpdateAnswer: (qId: number, aId: number[]) => void;
}

export const QuizePage = ({ onUpdateAnswer, onBack, onNext }: Props) => {
  const quize = useQuize();

  const currentQuestion = React.useMemo(() => {
    return quize.questions.find((q) => q.id === quize.currentQuestionId);
  }, [quize]);

  const handleUpdateMultipleAnswer = (answer: IAnswer) => {
    if (!currentQuestion) return;
    onUpdateAnswer(currentQuestion?.id, [answer.id]);
  };

  const handleUpdateSingleAnswer = (aId: number) => {
    if (!currentQuestion) return;
    onUpdateAnswer(currentQuestion?.id, [aId]);
  };

  const renderAnswerForm = React.useCallback(() => {
    if (!currentQuestion) return;

    switch (currentQuestion.choiceType) {
      case "MULTIPLE":
        return (
          <Flex>
            <Stack spacing={10} direction="row">
              {currentQuestion.answer.map((answer, key) => (
                <Checkbox
                  onChange={() => handleUpdateMultipleAnswer(answer)}
                  key={key}
                >
                  {answer.title}
                </Checkbox>
              ))}
            </Stack>
          </Flex>
        );
      case "SINGLE":
        return (
          <Flex>
            <RadioGroup
              onChange={(value) =>
                handleUpdateSingleAnswer(value as unknown as number)
              }
            >
              <Stack direction="row">
                {currentQuestion.answer.map((answer, key) => (
                  <Radio value={answer.id} key={key}>
                    {answer.title}
                  </Radio>
                ))}
              </Stack>
            </RadioGroup>
          </Flex>
        );
      default:
        break;
    }
  }, [currentQuestion]);

  if (!currentQuestion) {
    return <Flex>Question not found!</Flex>;
  }

  return (
    <Flex flexDir="column">
      <h1>Question: {currentQuestion.question}</h1>
      <Flex flexDir="column">
        <ul>{renderAnswerForm()}</ul>
      </Flex>
      <Flex justifyContent="space-between" p="5">
        <Button onClick={onBack}>Back</Button>
        <Button onClick={onNext}>Next</Button>
      </Flex>
    </Flex>
  );
};

export default QuizePage;
