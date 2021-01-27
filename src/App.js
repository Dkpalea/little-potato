// import logo from './logo.svg';
import { Component } from 'react';
import './App.scss';
import Modal from 'react-modal';

import Level from './components/Level/Level';
import Title from './components/Title/Title';
import End from './components/End/End';

// import bgm from '../src/assets/music/bgm.mp3';
// import silence from '../src/assets/music/250-milliseconds-of-silence.mp3';

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
    Modal.setAppElement('#root');
  }

  updateTimeForLevel = (updateMode, level) => {
    this.setState((state, props) => {
      const tempState = state;
      if (updateMode === 'start') {
        tempState.trial[level].start = new Date();
      } else if (updateMode === 'end') {
        tempState.trial[level].end = new Date();
      }
      return tempState;
    }, () => {
      localStorage.setItem('littlePotato', JSON.stringify(this.state));
      console.log(this.state);
    });
  };

  increaseLevelNumber = () => {
    this.setState((state, props) => {
      return (
        {
          currentLevel: {
            number: state.currentLevel.number+1,
          },
        }
      );
    }, () => {
      localStorage.setItem('littlePotato', JSON.stringify(this.state));
      console.log(this.state);
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
      console.log(this.state);
    });
  };

  setTopScore = (duration, avgScore) => {
    this.setState((state, props) => {
      return (
        {
          topScore: {
            date: new Date(),
            duration,
            stars: Math.round(avgScore),
          }
        }
      );
    }, () => {
      localStorage.setItem('littlePotato', JSON.stringify(this.state));
      console.log(this.state);
    });
  };

  setMusicHasStarted = () => {
    this.setState((state, props) => {
      return (
        {
          musicHasStarted: true,
        }
      );
    }, () => {
      localStorage.setItem('littlePotato', JSON.stringify(this.state));
      console.log(this.state);
    });
  };

  componentDidMount() {
    // const audio = new Audio(bgm);
    // audio.loop = true;
    // // media.muted = true;
    // audio.play();
  }

  render() {
    return (
      <div className="App">
        {/*<iframe src={bgm} allow="autoplay" style={{display: 'none'}} id="iframeAudio" />*/}
        {/*<iframe src={silence} allow="autoplay" id="audio" style={{display: 'none'}} />*/}
        {/*<audio id="player" autoPlay loop>*/}
        {/*  <source src={bgm} type="audio/mp3" />*/}
        {/*</audio>*/}
        {/*<audio src={bgm} autoPlay style={{display: 'none'}} id="iframeAudio" />*/}
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
            setMusicHasStarted={() => this.setMusicHasStarted()}
            musicHasStarted={this.state.musicHasStarted}
            levelNumber={this.state.currentLevel.number}
            increaseLevelNumber={() => this.increaseLevelNumber()}
            updateTimeForLevel={(updateMode, level) => this.updateTimeForLevel(updateMode, level)}
          /> : (
          this.state.currentLevel.number !== 6 ?
            <Level
              trial={this.state.trial}
              topScore={this.state.topScore}
              levelNumber={this.state.currentLevel.number}
              q1Answer={this.state.currentLevel.q1Answer}
              q2Answer={this.state.currentLevel.q2Answer}
              q3Answer={this.state.currentLevel.q3Answer}
              increaseLevelNumber={() => this.increaseLevelNumber()}
              updateTimeForLevel={(updateMode, level) => this.updateTimeForLevel(updateMode, level)}
              setTopScore={(duration, avgScore) => this.setTopScore(duration, avgScore)}
            /> :
            <End
              trial={this.state.trial}
              topScore={this.state.topScore}
              backToTitle={() => this.backToTitle()}
            />
        )}
      </div>
    );
  };
}

export default App;
