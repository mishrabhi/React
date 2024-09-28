//Middleware to log action types

export const actionTypeLogger = (store) => (next) => (action) => {
  console.log("Action type:", action.type);
  return next(action);
};

//Middleware to log payload

export const payloadLogger = (store) => (next) => (action) => {
  if (action.payload) {
    console.log("Payload:", action.payload);
  }
  return next(action);
};

//Combine middlewares
export const combineMiddleware = [actionTypeLogger, payloadLogger];
