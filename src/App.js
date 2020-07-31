import React from "react";
import "./styles.css";
import Eyeball from "./Eyeball";

export default function App() {
  return (
    <div className="App">
      <h1>react-eyeball</h1>
      <Eyeball />
      <h2>the eyeball you've always wanted!</h2>
      inspired by this <a href="https://youtu.be/tyjrJZVei30">eyeball robot</a>
    </div>
  );
}
