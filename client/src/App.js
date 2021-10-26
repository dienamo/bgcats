import "./App.css";
import Home from "./views/Home";
import Vote from "./views/Vote";
import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/vote" component={Vote} />
    </Router>
  );
}

export default App;
