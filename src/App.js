import React, {Component} from "react";
import {Link, HashRouter} from 'react-router-dom'
import "./App.css";
import Dashboard from './components/Dashboard/Dashboard'
import Routes from './Routes'
import Header from './components/Header/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
      
      <HashRouter>
        <div>
        <Header />
        {Routes}
        </div>

        </HashRouter>
     
      </div>
    );
  }
}
 

export default App;
