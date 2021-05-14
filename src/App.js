import "./App.css";
import Navbar from "./Navbar"
import Home from './Home'
import Create from './Create'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            {/* Home Path Route */}
            <Route exact path="/" >
              <Home />
            </Route>
            {/* Create Path Route */}
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
