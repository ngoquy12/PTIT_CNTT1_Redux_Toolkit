import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Task } from "../interfaces/task.interface";
import axiosInstance from "../utils/axiosInstance";

// Gọi các API bên ngoài
export const getAllTask = createAsyncThunk("task/getAllTask", async () => {
  const response = axiosInstance.get("tasks");

  return (await response).data;
});

// Thêm mới task
export const createTask = createAsyncThunk(
  "task/createTask",
  async (task: Task) => {
    const response = await axiosInstance.post("tasks", task);

    return response.data;
  }
);

// Hàm xóa task
export const deleteTask = createAsyncThunk(
  "task/deleTask",
  async (id: number) => {
    await axiosInstance.delete(`tasks/${id}`);

    return id;
  }
);

// Hàm sửa task
export const updateTask = createAsyncThunk(
  "task/updateTask",
  async (updateData: { id: number; name: string }) => {
    const { id, name } = updateData;

    const response = await axiosInstance.patch(`tasks/${id}`, {
      name,
    });

    return response.data;
  }
);
