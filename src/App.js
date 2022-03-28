import "./App.css";
import { dataTest } from "./data";
import React from "react";

function App() {
  return (
    <div className="App">
      <div className="page-deets">
        <h2>Track List</h2>
      </div>
      <div className="list-Track">
        {dataTest.map((dataTest) => (
          <div key={dataTest.id}>
            <p>
              <img
                key={dataTest.album.id}
                src={dataTest.album.images[0].url}
                alt=""
              />
            </p>
            <p>{dataTest.name}</p>
            <p>{dataTest.album.name}</p>
            <p>{dataTest.album.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/*class Music extends React.Component {
  render() {
    const listItem = dataTest.map((dataTest, id) => (
      <li key={id} url={dataTest.album.images[0].url}>
        {" "}
        {dataTest.name}{" "}
      </li>
    ));
    return (
      <div className="baru">
        <Stocks />
        <ul>{listItem}</ul>
      </div>
    );
  }
}*/
/*}
function App() {
  useEffect(() => {
    // Update the document title using the browser API
    console.log(dataTest);
  });

  return <Stocks />;
}*/

export default App;
