export interface Task {
  id: number;
  name: string;
  status: "ACTIVE" | "INACTIVE";
}

export interface InitialStateType {
  status: "idle" | "pending" | "success" | "failed";
  data: Task[];
  error: null | undefined | string;
}
