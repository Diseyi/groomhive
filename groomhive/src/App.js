import "./App.css";
import PictureModal from "./components/pictureModal/PictureModal";
import "./index.css";
import Home from "./pages/home/Home";
import picture from "./assets/picture2.png"



function App() {
  return (
    <div className="App">
    <Home />
    {/* <PictureModal picture={picture}  name="Angela McKenzie" title="Senior IxD" /> */}
    </div>
  );
}

export default App;
