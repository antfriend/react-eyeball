import React from "react";
import "./styles.css";
import Eyeball from "./Eyeball";

export default function App() {
  return (
    <div className="App">
      <h1>react-eyeball</h1>
      <Eyeball />
      <h2>the eyeball you've always wanted!</h2>
      <a href="https://0msqf.csb.app/">example</a><br/>
      it resembles my <a href="https://youtu.be/tyjrJZVei30">eyeball robot</a><br/>
      behaves like my other <a href="https://youtu.be/-3fQGa2TRlY">eyeball robot</a><br/>
    </div>
  );
}

