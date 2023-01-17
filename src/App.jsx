import React from "react";
import { render } from "react-dom";
import Home from "./pages/Home/Home.jsx";

const App = () => {
  return <Home />;
};

render(<App />, document.getElementById("root"));
