import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import SiteCalendar from "./components/Calendar";
import Home from "./components/Home/Home";
import NewAppointment from "./components/NewAppointment";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
        <Switch>
          <Route path="/new-appointment" component={NewAppointment} exact />
        </Switch>
        <Switch>
          <Route path="/calendar" component={SiteCalendar} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
