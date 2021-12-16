import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementBy,
} from "../redux/counter/CounterSlice";
const Counter = (props) => {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>{counter}</h3>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementBy(10))}>++</button>
    </div>
  );
};

export default Counter;
