import React, { useState } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import Users from './Pages/UsersPage/Users';
import Projects from './Pages/ProjectsPage/Projects';
import Home from './Pages/HomePage/Home';
import Admin from "./Pages/AdminPage/Admin.jsx"
import { createMuiTheme } from '@material-ui/core/styles';
import SignUp from "./Pages/SignUnPage/SignUp.jsx"
import Signin from "./Pages/SignInPage/SignIn.jsx";
const theme = createMuiTheme({
  palette: {
    primary: { main: '#32418C' },
  },
});

function App() {
  return (

    <BrowserRouter>
      <div className="App" theme={theme}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/admin" component={Admin} />

        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
