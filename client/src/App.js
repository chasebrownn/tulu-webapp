import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import Login from './components/Logintulu/Login'
import TuluHeader from './components/TuluHeader/Tulu'

const App = () => {
  const ka = true;

  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        {ka ? (<TuluHeader />):(<Navbar />)}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </Container>
    </BrowserRouter>
  )
  };

export default App;
