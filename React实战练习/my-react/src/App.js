import React from 'react';
import './App.css';
import {
  Switch,
  Route,
  // Redirect
} from "react-router-dom";
import Login from './pages/Login/Login'
import Main from './pages/Main/Main'
function App() {
  // if (window.sessionStorage.getItem('adminName')) {
  //   <Redirect to="/main" />
  // } else {
  //   <Redirect to="/login" />
  // }
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/main" component={Main} />
      </Switch>
    </div>
  );
}
export default App;
