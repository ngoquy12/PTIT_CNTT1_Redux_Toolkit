import React, { useEffect, useState } from "react";
import type { Task } from "../interfaces/task.interface";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { createTask } from "../apis/task.api";

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

    // Bắn action vào trong slice để xử lý
    dispatch(createTask(newTask));

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
