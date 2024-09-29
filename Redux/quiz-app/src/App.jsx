import React from "react";
import "./App.css";
import { Box, ChakraProvider } from "@chakra-ui/react";
import AuthComponent from "./components/authComponent";
import QuizComponent from "./components/quizComponent";
import ResultComponent from "./components/resultComponent";

function App() {
  return (
    <ChakraProvider>
      <Box p={4}>
        <AuthComponent />
        <QuizComponent />
        <ResultComponent />
      </Box>
    </ChakraProvider>
  );
}

export default App;
