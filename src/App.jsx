import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import Navbar from './components/NavBar/Navbar.jsx';
import Users from './Pages/UsersPage/Users.jsx';
import Projects from './Pages/ProjectsPage/Projects.jsx';
import Home from './Pages/HomePage/Home.jsx';

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
      <BrowserRouter>

        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/projects" component={Projects} />
          </Switch>
        </div>

      </BrowserRouter>

    </ThemeProvider>
  );
}
export default App;
