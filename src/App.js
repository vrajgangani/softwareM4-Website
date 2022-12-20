import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Main4 } from "./Main4";
import { Main1 } from "./Main1";
import { Main2 } from "./Main2";
import { Main3 } from "./Main3";
import { Main5 } from "./Main5";
import Naavbar from "./Navbar";

function App() {
  return (
    <>
      <div className="web-container">
        <Naavbar/>
        <Main1/>
        <Main2/>
        <Main3/>
        <Main4/>
        <Main5/>
      </div>
    </>
  );
}

export default App;
