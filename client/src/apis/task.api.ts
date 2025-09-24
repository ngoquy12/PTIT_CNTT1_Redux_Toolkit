import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { Task } from "../interfaces/task.interface";

// Gọi các API bên ngoài
export const getAllTask = createAsyncThunk("task/getAllTask", async () => {
  const response = axios.get("http://localhost:3000/tasks");

  return (await response).data;
});

// Thêm mới task
export const createTask = createAsyncThunk(
  "task/createTask",
  async (task: Task) => {
    const response = await axios.post("http://localhost:3000/tasks", task);

    return response.data;
  }
);

// Hàm xóa task
export const deleteTask = createAsyncThunk(
  "task/deleTask",
  async (id: number) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`);

    return id;
  }
);
