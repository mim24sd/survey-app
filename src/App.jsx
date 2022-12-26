import React from "react";
import { render } from "react-dom";

const App = () => {
  return (
    <div>
      <p>hi</p>
      <img src="https://www.w3schools.com/css/img_5terre.jpg" alt="logo" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
