import { useState } from "react";
import "./App.css";
import Timer from "./components/timer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Timer />
    </>
  );
}

export default App;
