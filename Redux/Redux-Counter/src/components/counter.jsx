import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/action";

export const Counter = () => {
  //   let [state, dispatch] = useReducer(reducer, initState);
  let count = useSelector((state) => state.count);
  let dispatch = useDispatch();
  console.log(count);
  return (
    <div>
      <button onClick={() => dispatch(increment(1))}>Inc</button>
      <h2>{count}</h2>
      <button onClick={() => dispatch(decrement(1))}>Dec</button>
    </div>
  );
};
