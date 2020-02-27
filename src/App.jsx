import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import Users from './Pages/UsersPage/Users';
import Projects from './Pages/ProjectsPage/Projects';
import Home from './Pages/HomePage/Home';
import { createMuiTheme } from '@material-ui/core/styles';

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
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
