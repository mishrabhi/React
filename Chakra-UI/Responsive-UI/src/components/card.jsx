import { Avatar, Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

const TestimonialCard = ({ title, description, name, position, avatarSrc }) => {
  return (
    <Box
      bg="white"
      borderRadius="lg"
      p={6}
      boxShadow="lg"
      textAlign="center"
      maxW="sm"
      mx="auto"
    >
      {/* Title */}
      <Heading size="md" mb={4}>
        {title}
      </Heading>

      {/* Description */}
      <Text color="gray" mb={6}>
        {description}
      </Text>

      {/* Author */}
      <VStack>
        <Avatar name={name} src={avatarSrc} mb={2} />
        <Text fontWeight="bold">{name}</Text>
        <Text fontSize="sm" color="gray">
          {position}
        </Text>
      </VStack>
    </Box>
  );
};

const Testimonials = () => {
  return (
    <Box bg="gray" py={10}>
      {/* Header */}
      <VStack spacing={3} mb={10}>
        <Heading size="lg">Our Clients Speak</Heading>
        <Text color="gray">
          We have been working around the clients around the world
        </Text>
      </VStack>

      {/* Testimonials */}
      <Flex
        direction={["column", "column", "row"]}
        justify="space-around"
        wrap="wrap"
        spacing={8}
      >
        <TestimonialCard
          title="Efficient Calloborating"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem."
          name="Jane Cooper"
          position="CEO at ABC Corporation"
          avatarSrc="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        <TestimonialCard
          title="Intuitive Design"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem."
          name="Jane Cooper"
          position="CEO at ABC Corporation"
          avatarSrc="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        <TestimonialCard
          title="Mindblowing Service"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem."
          name="Jane Cooper"
          position="CEO at ABC Corporation"
          avatarSrc="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
      </Flex>
    </Box>
  );
};

export default Testimonials;
