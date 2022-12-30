import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Main4 } from "./Main4";
import { Main1 } from "./Main1";
import { Main2 } from "./Main2";
import { Main3 } from "./Main3";
import { Main5 } from "./Main5";
import Naavbar from "./Navbar";
import { Main6 } from "./Main6";
import { Main7 } from "./Main7";
import { Main8 } from "./Main8";

function App() {
  return (
    <>
      <div className="web-container">
        <Naavbar/> 
        <Main1/> 
        <Main2/>
        <Main3/>
        <Main4/>
        <Main5 />
        <Main6 />
        <Main7 />
        <Main8/>
      </div>
    </>
  );
}

export default App;
