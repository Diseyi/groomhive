import "./App.css";
import "./index.css";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import HiveWoman from "./pages/hiveWoman/HiveWoman";
import Sponsorship from "./pages/sponsorship/Sponsorship";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import HireTalent from "./pages/hireTalent/HireTalent";


function App() {
  return (
    <div className="App">
     {/* <BrowserRouter>
    <Routes> */}

    {/* <Route path="/" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="sponsorship" element={<Sponsorship />} />
    <Route path="hivewoman" element={ <HiveWoman />} /> */}
      {/* {/* <Home /> */}
      {/* <About />
      <Sponsorship />
      <HiveWoman /> */} 
      {/* <HireTalent /> */}

      {/* </Routes>
      </BrowserRouter> */}
       <Home />
    </div>
  );
}

export default App;
