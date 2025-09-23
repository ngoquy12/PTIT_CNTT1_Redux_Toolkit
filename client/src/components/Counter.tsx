import { useDispatch } from "react-redux";
import { decrease, increase, reset } from "../redux/slices/counter.slice";
import { useAppSelector } from "../hooks/useRedux";

export default function Counter() {
  // Lấy dữ liệu từ trong store
  const { value } = useAppSelector((store) => store.counter);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increase());
  };

  const handleDecrease = () => {
    dispatch(decrease());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div>
      <h2>Counter: {value}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
