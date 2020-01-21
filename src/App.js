import React from 'react';
import SignIn from "./SignIn";
import About from "./About";
import Users from "./User";
import SignUpForm from "./Signup";
import Server from "./Server";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store'


function App() {
  return (
      <Provider store={store}>
          <Router>
              <div className="App">
                  <nav>
                      <ul>
                          <li>
                              <Link to="/">Home</Link>
                          </li>
                          <li>
                              <Link to="/about">About</Link>
                          </li>
                          <li>
                              <Link to="/login">Login</Link>
                          </li>
                          <li>
                              <Link to="/users">User</Link>
                          </li>
                          <li>
                              <Link to="/signup">Sign Up</Link>
                          </li>
                          <li>
                              <Link to="/servers">Servers</Link>
                          </li>
                      </ul>
                  </nav>
                  <h1>React Home Page</h1>
                  <Switch>
                      <Route path="/about">
                          <About/>
                      </Route>
                      <Route path="/login">
                          <SignIn/>
                      </Route>
                      <Route path="/users">
                          <Users/>
                      </Route>
                      <Route path="/signup">
                          <SignUpForm/>
                      </Route>
                      <Route path="/servers">
                          <Server/>
                      </Route>
                  </Switch>
              </div>
          </Router>
      </Provider>
  );
}

export default App;
