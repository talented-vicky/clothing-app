import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];
// this is because the store expects an array-middleware from the redux 
// remember that logger is a middleware

const store = configureStore({reducer: rootReducer}, applyMiddleware(...middlewares))
// the 2nd parameter is us spreading-in the values in the array

// use; const store = configureStore(rootReducer, applyMiddleware(logger))
// and then; delete this line => (const middlewares = [logger])
// the applyMiddleware simply takes in multiple middlewares so the above would
// only work if we won't (later in the future) need to pass in more 
// middlewars (other than the logger middleware)

 


// adding middleware (which are basically functions that take our actions, do
// something with them & pass them to the root reducer) to our store so that 
// they catch actions when're they're fired and then display them

// 1)Action => (Middleware) => 2)Roor Reducer => 3)Store => 4)DOM changes     

export default store;