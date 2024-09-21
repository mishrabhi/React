import {
  Avatar,
  Box,
  Button,
  Heading,
  HStack,
  Text,
  VStack,
  Tag,
} from "@chakra-ui/react";
import React from "react";

const ProfileCard = () => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      boxShadow="lg"
      textAlign="center"
      bg="white"
    >
      {/* Image or Icon */}
      <Avatar
        size="xl"
        src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        mb={4}
        mx="auto"
        name="Abhishek"
      />

      {/* Title */}
      <Heading size="md" mb={1}>
        Abhishek Mishra
      </Heading>

      {/* Username */}

      <Text color="gray" mb={3}>
        @abhishek_mishra{" "}
      </Text>

      {/* Description */}
      <Text fontSize="sm" color="gray" mb={4}>
        Student, Coder, Programmer and Cricketer. PM for work enquiries or{" "}
        <Text as="span" color="blue">
          #tag
        </Text>{" "}
        me in your posts
      </Text>

      {/* Tags */}

      <HStack justify="center" spacing={2} mb={3}>
        <Tag>#EDUCATION</Tag>
        <Tag>#PROGRAMMING</Tag>
        <Tag>#CRICKET</Tag>
      </HStack>

      {/* Buttons */}
      <VStack spacing={3}>
        <Button colorScheme="gray" variant="outline" w="full">
          Message
        </Button>
        <Button colorScheme="blue" w="full">
          Follow
        </Button>
      </VStack>
    </Box>
  );
};

export default ProfileCard;
