import { Component } from 'react';

import bg2 from '../../assets/title_ending/bg2.png';

class Title extends Component {
  render() {
    return (
      <div className="title">
        <button onClick={() => {
          this.props.increaseLevelNumber();
          this.props.updateTimeForLevel('start', this.props.levelNumber+1);
        }}><b>Begin!</b></button>
      </div>
    );
  }
}

export default Title;
