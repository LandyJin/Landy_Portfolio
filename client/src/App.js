import React, { Component } from 'react';
import './App.css';

// React Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Compnents
import MainPage from './components/MainPage/MainPage';
import GetInTouch from './components/GetInTouch/GetInTouch';

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
              <Route path="/getinToch" component={GetInTouch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;