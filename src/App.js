import "./styles.css";
import { useState } from "react";
export default function App() {
  const emp = [
    { first_name: "Sagar", last_name: "Munot" },
    { first_name: "Test", last_name: "Demo" }
  ];
  const [inputValue, setInputValue] = useState(emp);
  const printValues = (e) => {
    console.log("Here...");
    e.preventDefault();
    const inputs = document.forms[0];
    console.log(inputs);
  };
  const changedValues = (e, index) => {
    console.log(e.target.value);
    const data = inputValue;
    data[index].first_name = e.target.value;
    //setInputValue(data);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <form>
        {emp.map((employee, index) => {
          return (
            <input
              onChange={(e) => changedValues(e, index)}
              type="text"
              value={inputValue[index]["first_name"]}
            />
          );
        })}
        <button onClick={printValues}>Click Here</button>
      </form>
      <div>
        <h3> Input Values</h3>
        {inputValue.map((input) => {
          return <div> {input.first_name}</div>;
        })}
      </div>
    </div>
  );
}
