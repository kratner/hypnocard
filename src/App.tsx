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
        links={[
          {
            url: "https://www.linkedin.com/in/keithratner/",
            linkname: "LinkedIn",
            title: "Keith Ratner on LinkedIn",
            target: "_blank",
          },
          {
            url: "https://github.com/kratner",
            linkname: "GitHub",
            title: "Keith Ratner on GitHub",
            target: "_self",
          },
          {
            url: "https://behance.net/kratner",
            linkname: "Behance",
            title: "Keith Ratner on Behance",
            target: "_self",
          },
          {
            url: "https://keithratner.live",
            linkname: "KeithRatner.Live",
            title: "Keith Ratner dot Live",
            target: "_self",
          },
        ]}
      />
    </div>
  );
}

export default App;
