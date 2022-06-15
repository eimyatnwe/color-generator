import React, { useState } from "react";
import SingleColor from "./SingleColor";
import Values from "values.js";
import "./App.css";

function App() {
  const [color, setColor] = useState("");
  const [list, setList] = useState(new Values("#f15025").all(10));
  const [error, setError] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      console.log(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
            placeholder="#f15025"
            className={`${error ? "error" : null}`}
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        <h4>List goes here</h4>
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
