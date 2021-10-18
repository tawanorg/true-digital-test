import React from "react";
import { Flex, Button } from "@chakra-ui/react";

interface Props {
  onSubmit: () => void;
  onChangeUsername: (value: string) => void;
  onChangePassword: (value: string) => void;
}

function LoginForm({ onChangeUsername, onChangePassword, onSubmit }: Props) {
  return (
    <Flex maxWidth="4xl" mx="auto" w="full">
      <Flex p="10" justifyContent="center" alignItems="center">
        <Flex flexDir="column" alignItems="center" bg="grey">
          <label htmlFor="username">
            <input
              type="text"
              id="username"
              aria-label="username"
              placeholder="Your username"
              onChange={(e) => onChangeUsername(e.target.value)}
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              id="password"
              aria-label="password"
              placeholder="Your password"
              onChange={(e) => onChangePassword(e.target.value)}
            />
          </label>
          <Button onClick={onSubmit}>Submit</Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default LoginForm;
