import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { deleteTask, getAllTask } from "../apis/task.api";
import type { Task } from "../interfaces/task.interface";
import Form from "./Form";
import { getTaskDetail } from "../redux/slices/task.slice";

export default function TaskList() {
  const { data: tasks, error, status } = useAppSelector((store) => store.task);
  const dispatch = useAppDispatch();

  // Gọi API lấy dữ liệu
  useEffect(() => {
    dispatch(getAllTask());
  }, [dispatch]);

  if (error) {
    return <h1>Đã có lỗi xảy ra. Vui lòng kiểm tra lại</h1>;
  }

  return (
    <div>
      {status === "pending" && <div className="loader"></div>}
      {/* Form */}
      <Form />
      <ul>
        {tasks.map((task: Task) => (
          <li key={task.id}>
            <span>{task.name}</span>
            <button onClick={() => dispatch(getTaskDetail(task))}>Sửa</button>
            <button onClick={() => dispatch(deleteTask(task.id || 0))}>
              Xóa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
