// src/store.js
import { configureStore } from '@reduxjs/toolkit';

// Reducer de ejemplo vacío
const rootReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: rootReducer,
});

