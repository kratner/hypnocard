import HypnoCard from "./components/HypnoCard";
import "./styles/main.scss";

function App() {
  return (
    <div className="App">
      <HypnoCard
        name="Keith Ratner"
        title="Digital Designer"
        phone="650-516-7281"
        email="keith.ratner@gmail.com"
        cardUrl="https://kratner.github.io/hypnocard"
      />
    </div>
  );
}

export default App;
