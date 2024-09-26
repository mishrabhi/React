import { createStore } from "redux";
// {createStore} is depricated, now use legacy_createStore
import { todoReducer } from "./reducer";

export const store = createStore(todoReducer);
