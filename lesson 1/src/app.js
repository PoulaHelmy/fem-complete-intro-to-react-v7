import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div id="root">
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Javanese" />
      <Pet name="Molly" animal="Dog" breed="Javanese" />
      <Pet name="Molly" animal="Dog" breed="Javanese" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
