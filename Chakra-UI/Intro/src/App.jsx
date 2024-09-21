import { Box, Button, Heading, Input, Text, VStack } from "@chakra-ui/react";

const App = () => {
  return (
    <Box p={5} maxW="600px" mx="auto" borderWidth="1px" borderRadius="1g">
      <Heading as="h1" size="x1" mb={4}>
        First UI using Chakra
      </Heading>

      <Input placegolder="Enter Something ..." mb={4} />
      <Button colorScheme="blue" mb={4}>
        Submit
      </Button>

      <VStack
        p={4}
        borderWidth="1px"
        borderRadius="1g"
        spacing={4}
        align="stretch"
      >
        <Text fontSize="md">This is a simple card build with Chakra UI</Text>
        <Button colorScheme="teal">Click Me </Button>
      </VStack>
    </Box>
  );
};

export default App;
