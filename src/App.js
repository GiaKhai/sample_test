import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./router/index";

const App = () => {
  return (
    <Router>
      <div>
        <Routes />
      </div>
    </Router>
  );
};

export default App;
