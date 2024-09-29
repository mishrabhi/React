import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/actions/authAction";

const AuthComponent = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Box>
      <Text>{isAuthenticated ? "Logged In" : "Logged Out"}</Text>
      <Button onClick={() => dispatch(login())} colorScheme="green">
        Login
      </Button>
      <Button onClick={() => dispatch(logout())} colorScheme="red">
        Logout
      </Button>
    </Box>
  );
};

export default AuthComponent;
