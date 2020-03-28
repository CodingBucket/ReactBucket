import React from 'react';
import './app.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home'
import NoteForm from './pages/NoteForm'

function App() {
  return (
    <React.Fragment>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/create" component={NoteForm} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
