import { Component } from 'react';

class End extends Component {
  render() {
    return (
      <div className="title">
        <h1>end</h1>
        <button onClick={() => this.props.backToTitle()}>back</button>
      </div>
    );
  }
}

export default End;
