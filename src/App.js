import logo from './logo.svg';
import { Component } from 'react';
import './App.scss';

import Level from './components/Level/Level';
import Title from './components/Title/Title';
import End from './components/End/End';

import db from './db';

class App extends Component {

  // helper to reset localStorage
  reset = true;

  constructor(props) {
    super(props);
    // this.handleLoginClick = this.handleLoginClick.bind(this);
    // this.handleLogoutClick = this.handleLogoutClick.bind(this);
    if (!window.localStorage.littlePotato || this.reset) {
      console.log('construct');
      localStorage.setItem('littlePotato', JSON.stringify(db));
    }
    this.state = JSON.parse(window.localStorage.littlePotato);
  }

  increaseLevelNumber = () => {
    this.setState((state, props) => {
      return (
        {
          currentLevel: {
            number: state.currentLevel.number+1,
          }
        }
      );
    }, () => {
      localStorage.setItem('littlePotato', JSON.stringify(this.state));
    });
  };

  backToTitle = () => {
    this.setState((state, props) => {
      return (
        {
          currentLevel: {
            number: 0,
          }
        }
      );
    }, () => {
      localStorage.setItem('littlePotato', JSON.stringify(this.state));
    });
  };

  render() {
    console.log(this.state);

    return (
      <div className="App">
        {/*<header className="App-header">*/}
        {/*  <img src={logo} className="App-logo" alt="logo" />*/}
        {/*  <p>*/}
        {/*    Edit <code>src/App.js</code> and save to reload.*/}
        {/*  </p>*/}
        {/*  <a*/}
        {/*    className="App-link"*/}
        {/*    href="https://reactjs.org"*/}
        {/*    target="_blank"*/}
        {/*    rel="noopener noreferrer"*/}
        {/*  >*/}
        {/*    Learn React*/}
        {/*  </a>*/}
        {/*</header>*/}
        {this.state.currentLevel.number === 0 ?
          <Title
            increaseLevelNumber={() => this.increaseLevelNumber()}
          /> : (
          this.state.currentLevel.number !== 6 ?
            <Level
              levelNumber={this.state.currentLevel.number}
              q1Answer={this.state.currentLevel.q1Answer}
              q2Answer={this.state.currentLevel.q2Answer}
              q3Answer={this.state.currentLevel.q3Answer}
              increaseLevelNumber={() => this.increaseLevelNumber()}
            /> :
            <End backToTitle={() => this.backToTitle()}/>
        )}
      </div>
    );
  };
}

export default App;
