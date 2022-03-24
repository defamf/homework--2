import "./App.css";
import { dataTest } from "./data";
import React, { useEffect } from "react";
import { Stocks } from "./components";

function App() {
  useEffect(() => {
    // Update the document title using the browser API
    console.log(dataTest);
  });

  return <Stocks />;
}

export default App;
