import logo from "./logo.svg";
import "./App.css";
const JSX = (
  <div id="challenge-node">
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// Add your code below this line

const div = document.getElementById("challenge-node");
ReactDOM.render(JSX, div);
function App() {
  return JSX;
}

export default App;
