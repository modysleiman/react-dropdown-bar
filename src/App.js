import logo from "./logo.svg";
import "./App.css";
import DropDown from "./components/DropDown";

function App() {
  return (
    <div className="App">
      <h1>hive drop down project</h1>
      <div className="example-div">
        <div className="example-div-item">
          <DropDown
            multiSelect={true}
            description={"animals multi select & scrollable"}
            listItems={[
              "dog",
              "cat",
              "mouse",
              "cow",
              "goat",
              "chicken",
              "whale",
              "bear",
              "horse",
              "fish",
              "donkey",
            ]}
          />
        </div>
        <div className="example-div-item">
          <DropDown
            multiSelect={false}
            description={"animals default"}
            listItems={["dog", "cat", "mouse", "cow"]}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
