import { Component } from 'react';

import bgm from '../../assets/music/bgm.mp3';
import click from '../../assets/music/click.wav';

class Title extends Component {
  render() {
    return (
      <div className="title">
        <button onClick={() => {
          this.props.increaseLevelNumber();
          // start audio
          if (!this.props.musicHasStarted) {
            const audio = new Audio(bgm);
            audio.loop = true;
            audio.volume = 0.05;
            audio.play();
            this.props.setMusicHasStarted();
          }
          // click  sound
          const audio2 = new Audio(click);
          audio2.volume = 0.1;
          audio2.play();
          this.props.updateTimeForLevel('start', this.props.levelNumber+1);
        }}><b>Begin!</b></button>
      </div>
    );
  }
}

export default Title;
