import React, { Component } from 'react';
import './index.styl';
import Card from './card/card';

class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <h1 className="app-headline">Der Einarmige Flunkimat!</h1>
        <Card title="Modifier" />
        <Card title="Basis" />
        <Card title="Special" />
      </div>
    );
  }
}
export default App;
