import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoffee } from "../redux/action";
import { Box, Center, Grid, Image, Spinner, Text } from "@chakra-ui/react";

const CoffeeList = () => {
  const dispatch = useDispatch();
  const { coffees, loading, error } = useSelector((state) => state.coffee);

  useEffect(() => {
    dispatch(fetchCoffee());
  }, [dispatch]);

  if (loading) {
    return (
      <Center>
        <Spinner size="xl" />
      </Center>
    );
  }

  if (error) {
    return <Text color="red">Error:{error}</Text>;
  }

  return (
    <Box p={4}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Coffee List
      </Text>
      <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6}>
        {coffees.map((coffee) => (
          <Box
            key={coffee.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
            <Image src={coffee.image} alt={coffee.title} />
            <Box p={4}>
              <Text fontWeight="bold">{coffee.title}</Text>
              <Text>{coffee.description}</Text>
              <Text color="gray">{coffee.price}</Text>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default CoffeeList;
