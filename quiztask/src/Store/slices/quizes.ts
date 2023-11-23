import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../AxiosConfig/instance";


interface quiz{
title:String,

}
const fetchquiz = createAsyncThunk("quiz/fetchquiz", async () => {
const response = await instance.get(
    "/quiz");
  console.log(response.data.data);
  return response.data.data;
});

const quizesSlice = createSlice({
  name: "quizes",
  initialState: {
    quizes: [],
  },

  reducers: {
    setquizes(state, action) {
      state.quizes = action.payload.quizes;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchquiz.fulfilled, (state, action) => {
      state.quizes = action.payload.quizes;
    });
  },
});

export const {  setquizes } = quizesSlice.actions;
export { fetchquiz };
export default quizesSlice.reducer;
