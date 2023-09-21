import { useState } from "react";
import "./App.css";

function App() {
  const [hw, setHw] = useState(0);
  const [mid, setMid] = useState(0);
  const [final, setFinal] = useState(0);
  const [score, setScore] = useState(0);
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === "Hw") {
      setHw(Number(value));
    } else if (name === "Mid") {
      setMid(Number(value));
    } else if (name === "Final") {
      setFinal(Number(value));
    }
  };

  const calculate = () => {
    const score = hw + mid + final;
    setScore(score);
  };

  const checkResult = () => {
    if (score < 40) return "เกรด F";
    if (score < 50) return "เกรด D";
    if (score < 60) return "เกรด C";
    if (score < 70) return "เกรด B";
    if (score >= 80) return "เกรด A";
  };
  const getResultClass = () => {
    if (score < 40) return "red";
    if (score < 60) return "gray";
    if (score < 60) return "yellow";
    return "green";
  };

  return (
    <>
      <div>
        <h1 className="bmi-app"></h1>
        <p className="subtitle">โปรแกรมคำนวณเกรด</p>
        <table>
          <tr>
            <td>
              <label htmlFor="Hw">Homework</label>
            </td>
            <td>
              <input type="number" name="Hw" onChange={handleOnChange} />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="Mid">Mid</label>
            </td>
            <td>
              <input type="number" name="Mid" onChange={handleOnChange} />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="Final">Final</label>
            </td>
            <td>
              <input type="number" name="Final" onChange={handleOnChange} />
            </td>
          </tr>
        </table>
      </div>

      <br></br>
      <button type="button" onClick={calculate}>
        คำนวณ
      </button>
      <hr />
      <div className="result">
        <p>คะแนน คือ {score}</p>
        <p>ผลลัพทธ์</p>
        <p className={getResultClass()}>{checkResult()}</p>
      </div>
    </>
  );
}

export default App;
