import { createSlice } from "@reduxjs/toolkit";
import { getAllTask } from "../../apis/task.api";
import type { InitialStateType } from "../../interfaces/task.interface";

// Khai báo giá trị khởi tạo cho state
const initialState: InitialStateType = {
  status: "idle",
  data: [],
  error: null,
};

// Tạo slice cho task
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllTask.pending, (state) => {
        // Cập nhật trạng thái (status)
        state.status = "pending";
      })
      .addCase(getAllTask.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(getAllTask.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default taskSlice.reducer; // Cần export như thế này thì store mới hiểu đây là 1 reducer
