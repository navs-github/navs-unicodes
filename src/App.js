import { Route, BrowserRouter as Router } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";


function App() {


  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
    </Router>

  );
}

export default App;
