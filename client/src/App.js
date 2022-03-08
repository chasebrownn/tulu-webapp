import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Login from './components/Logintulu/Login'
import TuluHeader from './components/TuluHeader/Tulu'
import Age from './components/Age/Age'
import Dashboard from './components/Dashboardtulu/Dashboard'
import Hometulu from './components/Hometulu/Home'
import './index.css'
const App = () => {
  const ka = true;

  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        {ka ? (<TuluHeader />):(<Navbar />)}
        <Switch>
          <Route path="/" exact component={Hometulu} />
          <Route path="/login" exact component={Login} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/age" exact component={Age} />
          
        </Switch>
      </Container>
    </BrowserRouter>
  )
  };

export default App;
