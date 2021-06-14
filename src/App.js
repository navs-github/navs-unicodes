import { Route, BrowserRouter as Router } from "react-router-dom";
import About from "./components/About";
import Landing from "./components/Landing";


function App() {


  return (
    <Router>
      <Route path="/" exact component={Landing} />
      <Route path="/about" component={About} />
    </Router>

  );
}

export default App;
