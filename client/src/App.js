import React, { Component } from 'react';
import './App.css';

// React Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// React Bootstrap
import "react-bootstrap/dist/react-bootstrap.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';

// Compnents
import MainPage from './components/MainPage/MainPage';
import GetInTouch from './components/GetInTouch/GetInTouch';
import BlogList from './components/BlogList/BlogList';

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
              <Route path="/bloglist" component={BlogList} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
