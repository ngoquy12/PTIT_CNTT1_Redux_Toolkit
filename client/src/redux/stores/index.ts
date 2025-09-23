import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "../slices/task.slice";
import counterSlice from "../slices/counter.slice";

const store = configureStore({
  reducer: {
    task: taskSlice,
    counter: counterSlice,
  },
});

export default store;

// Định nghĩa type cho dispatch và selector
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
