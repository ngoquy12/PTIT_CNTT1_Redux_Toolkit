import React, { useEffect, useState } from "react";
import type { Task } from "../interfaces/task.interface";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { createTask, updateTask } from "../apis/task.api";

export default function Form() {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState<string>("");
  const { task } = useAppSelector((store) => store.task);

  console.log("task: ", task);

  useEffect(() => {
    // Cập nhật lại giá trị cho inputValue
    setInputValue(task?.name || "");
  }, [task]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTask: Task = {
      name: inputValue,
      status: "INACTIVE",
    };

    // Kiểm tra task để xác định khi nào thêm và khi nào sửa
    if (task) {
      dispatch(updateTask({ id: task.id || 0, name: inputValue }));
    } else {
      dispatch(createTask(newTask));
    }

    // Xóa giá trị trong input
    setInputValue("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
        />
        <button>{task ? "Lưu" : "Thêm"}</button>
      </form>
    </>
  );
}
