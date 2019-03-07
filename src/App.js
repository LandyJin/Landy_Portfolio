import React, { Component } from 'react';
import './App.css';

// React Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Compnent
import MainPage from './components/MainPage/MainPage'

// Menu
import Menu from './components/Menu/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Menu />
            <Switch>
              <Route exact path="/" component={MainPage} />
              {/* <Route path="/aboutme" component={AboutMe} />
              <Route path="/location" component={Location} />
              <Route path="/transactions" component={Transactions} /> */}
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
