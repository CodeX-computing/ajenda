import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import todosReducer from './todos/todos';
import goalsReducer from './goals/goals';

const store = configureStore({
  reducer: { todos: todosReducer, goals: goalsReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
