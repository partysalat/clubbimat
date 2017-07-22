import React, { Component } from 'react';
import './index.styl';
import Card from './card/card';
import { gamble } from './gambling/gambleService';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        { title: 'Modifier', open: false, key: 'modifier' },
        { title: 'Basis', open: false, key: 'basis' },
        { title: 'Special', open: false, key: 'special' },
      ],
    };
  }
  reset() {
    this.setState((currentState) => {
      currentState.cards.forEach((card) => {
        card.open = false;
      });
      return currentState;
    });
  }
  enableCards() {
    this.setState((currentState) => {
      const closedCard = currentState.cards.find(card => !card.open);
      if (!closedCard) {
        return currentState;
      }
      closedCard.open = !closedCard.open;
      setTimeout(() => this.enableCards(), 1000, this);
      return currentState;
    });
  }
  gambleMode() {
    this.reset();
    const modes = gamble();
    this.setState((currentState) => {
      currentState.cards.forEach((card) => {
        card.modeText = modes[card.key].text;
      });

      setTimeout(() => {
        this.enableCards();
      }, 500);

      return currentState;
    });
  }
  render() {
    return (
      <div>
        <h1 className="app-headline">Der Einarmige Flunkimat!</h1>
        <div className="app-button" onClick={() => this.gambleMode()}>
          Gamble
        </div>

        {this.state.cards.map(config =>
          <div key={config.title} className="app-card">
            <Card
              title={config.title}
              isOpen={config.open}
              modeText={config.modeText}
            />
          </div>
        )}

      </div>
    );
  }
}

export default App;
