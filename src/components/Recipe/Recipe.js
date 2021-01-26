import { Component } from 'react';

class Recipe extends Component {
  render() {
    switch (this.props.levelNumber) {
      case 1:
        return (
          <div className="recipe">
            <h1>Make french fries using...</h1>
            <h2>{this.props.randNum1} + {this.props.randNum2} potatoes</h2>
            <span>Answer: {this.props.q1Answer}</span>
            <h2>{this.props.randNum3} + {this.props.randNum4} pinches of salt</h2>
            <span>Answer: {this.props.q2Answer}</span>
            <h2>{this.props.randNum5} + {this.props.randNum6} ounces of oil</h2>
            <span>Answer: {this.props.q3Answer}</span>
          </div>
        );
      case 2:
        return (
          <div className="recipe">
            <h1>Make potato chips using...</h1>
            <h2>{this.props.randNum1} - {this.props.randNum2} potatoes</h2>
            <span>Answer: {this.props.q1Answer}</span>
            <h2>{this.props.randNum3} - {this.props.randNum4} pinches of salt</h2>
            <span>Answer: {this.props.q2Answer}</span>
            <h2>{this.props.randNum5} - {this.props.randNum6} pinches of pepper</h2>
            <span>Answer: {this.props.q3Answer}</span>
          </div>
        );
      case 3:
        return (
          <div className="recipe">
            <h1>Make mashed potatoes using...</h1>
            <h2>{this.props.randNum1} x {this.props.randNum2} potatoes</h2>
            <span>Answer: {this.props.q1Answer}</span>
            <h2>{this.props.randNum3} x {this.props.randNum4} cups of milk</h2>
            <span>Answer: {this.props.q2Answer}</span>
            <h2>{this.props.randNum5} x {this.props.randNum6} sticks of butter</h2>
            <span>Answer: {this.props.q3Answer}</span>
          </div>
        );
      case 4:
        return (
          <div className="recipe">
            <h1>Make baked potatoes using...</h1>
            <h2>{this.props.randNum1} ÷ {this.props.randNum2} potatoes</h2>
            <span>Answer: {this.props.q1Answer}</span>
            <h2>{this.props.randNum3} ÷ {this.props.randNum4} cups of milk</h2>
            <span>Answer: {this.props.q2Answer}</span>
            <h2>{this.props.randNum5} ÷ {this.props.randNum6} sticks of butter</h2>
            <span>Answer: {this.props.q3Answer}</span>
          </div>
        );
      case 5:
        return (
          <div className="recipe">
            <h1>Make potato salad using...</h1>
            <h2>{this.props.randNumA} - {this.props.randNum1} + {this.props.randNum2} potatoes</h2>
            <span>Answer: {this.props.q1Answer}</span>
            <h2>{this.props.randNumB} - {this.props.randNum3} ÷ {this.props.randNum4} cups of milk</h2>
            <span>Answer: {this.props.q2Answer}</span>
            <h2>{this.props.randNumC} x {this.props.randNum5} ÷ {this.props.randNum6} sticks of butter</h2>
            <span>Answer: {this.props.q3Answer}</span>
          </div>
        );
    }
  }
}

export default Recipe;
