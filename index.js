import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ListaDeUsuarios from './ListaDeUsuarios';
import DetalhesUsuario from './DetalhesUsuario';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
        <Route path="/usuarios/:id" component={DetalhesUsuario} />
          <Route path="/usuarios" component={ListaDeUsuarios} />
          <Route path="/" component={Hello} />
        </Switch>
      </BrowserRouter>
    );
  }
}
render(<App />, document.getElementById('root'));
