import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";

function App() {
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [sum, setSum] = useState(0);
  const handleClick = () => {
    const firstNumber = parseFloat(firstValue);
    const secondNumber = parseFloat(secondValue);

    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
      setSum(firstNumber + secondNumber);
    } else {
      alert("Enter a valid number");
    }
  };
  return (
    <div className="App">
      <h1>İki Sayıyı Toplama</h1>

      <div className="number-inputs">
        <input
          type="number"
          className="input is-large"
          placeholder="0"
          onChange={(event) => setFirstValue(event.target.value)}
          parse={(value) => parseInt(value, 10)}
        />
        <input
          type="number"
          className="input is-large"
          placeholder="0"
          onChange={(event) => setSecondValue(event.target.value)}
          parse={(value) => parseInt(value, 10)}
        />
      </div>

      <button onClick={handleClick}>Topla!</button>

      <h2>{sum}</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
