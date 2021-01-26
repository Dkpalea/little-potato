import { Component } from 'react';

class Title extends Component {
  render() {
    return (
      <div className="title">
        <h1>title</h1>
        <button onClick={() => this.props.increaseLevelNumber()}>next</button>
      </div>
    );
  }
}

export default Title;
