import React, { useState, useContext } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx"
import Navbar from './components/NavBar/Navbar';
import Users from './Pages/UsersPage/Users';
import Projects from './Pages/ProjectsPage/Projects';
import Home from './Pages/HomePage/Home';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import SignUp from "./Pages/SignUnPage/SignUp.jsx"
import Signin from "./Pages/SignInPage/SignIn.jsx";
import AuthContextProvider from "./context/auth";
import store from './Redux/Store';
import { useSelector, Provider } from 'react-redux';


const theme = createMuiTheme({
  palette: {
    primary: { main: '#32418C' },
  },
  typography: {
    fontFamily: [
      'Nunito',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

function App() {
  return (

<ThemeProvider theme={theme}>
    <BrowserRouter >
      <AuthContextProvider>
        <Provider store={store}>
        <div className="App" theme={theme}>
          <Navbar />
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/users" component={Users} />
            <PrivateRoute exact path="/projects" component={Projects} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={Signin} />


          </Switch>
        </div>
          </Provider>
      </AuthContextProvider>
    </BrowserRouter>
  </ThemeProvider>
  )
}
export default App;
