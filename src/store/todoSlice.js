// reducer.js

import { createSlice } from "@reduxjs/toolkit";
import { fetchTodos, addTodo, updateTodo, deleteTodo } from './thunkFunction';
//idle - 대기, pending - 진행중, fulfilled - 성공, rejected - 실패
const initialState = {
  lists: [],
  status: "idle",
  error: null,
};

const todoSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.lists = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addTodo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.lists = [...state.lists, action.payload];
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(updateTodo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        state.status = "succeeded";
        const updatedTodo = action.payload;
        state.lists = state.lists.map((list) =>
          list.id === updatedTodo.id ? updatedTodo : list
        );
      })
      .addCase(updateTodo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(deleteTodo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.status = "succeeded";
        const deletedTodoId = action.payload;
        state.lists = state.lists.filter((list) => list.id !== deletedTodoId);
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default todoSlice.reducer;
