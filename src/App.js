import "./App.css";
import PlayList from "./pages/PlayList";
import { Routing } from "./routing";

function App() {
  return (
    <div className="App">
      <PlayList />
      <Routing />
    </div>
  );
}

export default App;
