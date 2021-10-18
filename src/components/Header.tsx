import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import { useAuth } from "../containers/Auth/hooks";
import { useQuize } from "../containers/Quizes/hooks";

function Header() {
  const auth = useAuth();
  const quize = useQuize();
  const username = auth.username;

  const questionIndex = quize.questions.findIndex(
    (q) => q.id === quize.currentQuestionId
  );

  if (questionIndex === -1) {
    return <Box />;
  }

  return (
    <Flex w="full" p="10" bg="gray.400">
      <Box>Username: {username}</Box>
      <Box>Timer: </Box>
      <Box>
        Question {questionIndex + 1} / {quize.questions.length}
      </Box>
    </Flex>
  );
}

export default Header;
