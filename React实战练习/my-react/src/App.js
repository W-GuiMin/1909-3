import React from 'react';
import './App.css';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from './pages/Login/Login'
import Main from './pages/Main/Main'
function App() {

  return (
    <div className="App">
      <Switch>
        <Route path="/main" component={Main} />
        <Route path="/login" component={Login} />
      </Switch>
      {(() => {
        if (window.sessionStorage.getItem('adminName')) {
          return <Redirect to="/main" />
        } else {
          return <Redirect to="/login" />
        }
      })()}
    </div>
  );
}
export default App;
