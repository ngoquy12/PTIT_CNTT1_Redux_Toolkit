import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { getAllTask } from "../apis/task.api";
import type { Task } from "../interfaces/task.interface";

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
      <div>
        <input type="text" />
        <button>Thêm</button>
      </div>
      <ul>
        {tasks.map((task: Task) => (
          <li key={task.id}>
            <span>{task.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
