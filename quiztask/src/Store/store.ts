import { configureStore } from "@reduxjs/toolkit";
import quizesReducer from "./slices/quizes";

const store = configureStore({
  reducer: {
    quizes: quizesReducer,

  },
});

export default store;
