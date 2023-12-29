// actions.js

import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axios";

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get("/todos");
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data || error.message);
    }
  }
);

export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async (todo, thunkAPI) => {
    try {
      const response = await axiosInstance.post("/todos", todo);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data || error.message);
    }
  }
);

export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async (updatedTodo, thunkAPI) => {
    try {
      const response = await axiosInstance.put(
        `/todos/${updatedTodo.id}`,
        updatedTodo
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data || error.message);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (todoId, thunkAPI) => {
    try {
      await axiosInstance.delete(`/todos/${todoId}`);
      return todoId;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data || error.message);
    }
  }
);
