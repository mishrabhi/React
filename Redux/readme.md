# React-Redux:

- Redux is a state management library often used with JavaScript applications. It provides a predictable state container for JavaScript apps, making it easier to manage the state of your application in a centralized and predictable way. The core principles of Redux involve a single source of truth (the store), state that is read-only (can only be changed by emitting actions), and changes made with pure functions (reducers).

**Note:** A complex state management which is also present globally.

## To start using with React:

1. Create a react application

```
npm create vite@latest
```

2. Install redux in your react application

```
npm install redux
npm i react-redux
```

## Implement Redux:

- Let' understand the implementation with a simple theme example.

1. Defining Action Types:

- Action types are constants that represent the actions in your application. They are strings that are used to ensure that there are no typos in action names.

```
const SET_THEME = "SET_THEME";
```

2. Creating Reducers:

- Reducers are pure functions that take the current state and an action as arguments and return a new state. They describe how the state changes in response to actions sent to the store.

- Theme Reducer: Manages the theme state of the application.

```
function themeReducer(state = "light-mode", action) {
  switch (action.type) {
    case SET_THEME:
      return action.payload;
    default:
      return state;
  }
}
```

3. Creating the Store:

The store is where your application's state lives. It's created using the createStore function from Redux, which takes the combined reducer as an argument.

```
const store = legacy_createStore(themeReducer);
```

4. Dispatching Actions:

- Actions are objects that represent what happened and what needs to change in the application. Dispatching an action is the process of sending this object to the store to update the state.

```
function changeTheme(theme) {
  store.dispatch({ type: SET_THEME, payload: theme });
```

5. Subscribing to Store Changes:

- Subscription in Redux is a way to automatically run a certain piece of code whenever the store gets updated. This is usually used to re-render the UI. This will be needed to re-render the UI.

```
store.subscribe(() => /*Change any state to re-render*/);
```

6. Create UI for event handling:

```
<div>
  <pre className="sidebar left-sidebar" id="userSidebar">
    {JSON.stringify(store.getState())}
  </pre>
  <div className="main-content">
    <div className="theme-switcher">
      <button
        id="lightModeBtn"
        onClick={() => {
          changeTheme("light-mode");
        }}
      >
        Light Mode
      </button>
      <button
        id="darkModeBtn"
        onClick={() => {
          changeTheme("dark-mode");
        }}
      >
        Dark Mode
      </button>
    </div>
  </div>
</div>
```

## COMBINE-REDUCERS:

- The combineReducers function in Redux allows you to combine multiple reducer functions into a single root reducer. It simplifies the process of managing complex application state by breaking down the state management logic into smaller, more manageable pieces. Here's a brief syntax and explanation of how to use combineReducers:

Syntax:

```
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  reducer1,
  reducer2,
  // Add more reducers as needed
});
```

## Hooks provided by Redux:

### 1. useSelector:

- useSelector hook allows you to extract data from the Redux store state.

- It takes a selector function as an argument, which returns the desired data from the state.

- It automatically subscribes to the Redux store, so it will re-render your component whenever the selected data changes.

Example:

```
import React from "react";
import { useSelector } from "react-redux";

const CounterDisplay = () => {
  const count = useSelector((state) => state.counter);

  return <div>Count: {count}</div>;
};

export default CounterDisplay;
```

### 2.useDispatch:

- useDispatch hook returns a reference to the dispatch function from the Redux store.

- It allows you to dispatch actions directly from your functional components.

Example:

```
import React from "react";
import { useDispatch } from "react-redux";

const CounterButtons = () => {
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CounterButtons;
```
