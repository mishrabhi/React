import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import { ChakraProvider } from "@chakra-ui/react";
import CoffeeList from "./components/coffeeList";

const App = () => {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <CoffeeList />
      </ChakraProvider>
    </Provider>
  );
};
export default App;
