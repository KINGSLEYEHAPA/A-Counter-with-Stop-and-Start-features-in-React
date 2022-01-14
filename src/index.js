import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startBtn = document.getElementById("start");
    startBtn.addEventListener("click", () => {
      let update = setInterval(() => {
        setCount((count) => count + 1);
      }, 1000);

      const stopMe = () => {
        clearInterval(update);
      };

      const stopBtn = document.getElementById("stop");

      stopBtn.addEventListener("click", () => {
        return stopMe();
      });
    });
  }, []);

  return (
    <div className="container">
      <h1 className="heading">Counter Application</h1>
      <p>Number Count: {count}</p>
      <button id="start">Start</button>
      <button id="stop">Stop</button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
