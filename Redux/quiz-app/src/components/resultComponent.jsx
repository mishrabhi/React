import { Box, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const ResultComponent = () => {
  const score = useSelector((state) => state.quiz.score);

  return (
    <Box>
      <Text>Your final score is: {score}</Text>
    </Box>
  );
};

export default ResultComponent;
