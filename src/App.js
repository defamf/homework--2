import "./App.css";
import { dataTest } from "./data";
import React from "react";
import { Stocks } from "./components";

class Music extends React.Component {
  render() {
    const listItem = dataTest.map((dataTest) => (
      <li key={dataTest.id}> {dataTest.name} </li>
    ));
    return (
      <div className="baru">
        <Stocks />
        <ul>{listItem}</ul>
      </div>
    );
  }
}
/*}
function App() {
  useEffect(() => {
    // Update the document title using the browser API
    console.log(dataTest);
  });

  return <Stocks />;
}*/

export default Music;
