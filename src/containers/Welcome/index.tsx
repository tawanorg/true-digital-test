import { Flex } from "@chakra-ui/react";
import { useAuth } from "../Auth/hooks";

interface Props {
  onStart: () => void;
}

export const WelcomePage = ({ onStart }: Props) => {
  const auth = useAuth();
  const username = auth.username;

  const startQuize = () => onStart();

  return (
    <Flex>
      <h1>Welcome {username}</h1>
      <button onClick={startQuize}>Start</button>
    </Flex>
  );
};

export default WelcomePage;
