import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuiz, updateScore } from "../redux/actions/quizAction";
import { Spinner } from "@chakra-ui/react";

const QuizComponent = () => {
  const dispatch = useDispatch();
  const { quizData, loading, error, score } = useSelector(
    (state) => state.quiz
  );

  useEffect(() => {
    dispatch(fetchQuiz());
  }, [dispatch]);

  if (loading) {
    return <Spinner size="xl" />;
  }

  if (error) {
    return <Text>Error:{error}</Text>;
  }

  const handleAnswer = (isCorrect) => {
    dispatch(updateScore(isCorrect ? 1 : 0));
  };

  return (
    <VStack spacing={4}>
      <Text>Current Score:{score}</Text>
      {quizData.map((question, index) => {
        <Box key={index}>
          <Text>{question.question}</Text>
          {question.options.map((option) => {
            <Button key={option} onClick={() => handleAnswer(option.isCorrect)}>
              {option.answer}
            </Button>;
          })}
        </Box>;
      })}
    </VStack>
  );
};

export default QuizComponent;
