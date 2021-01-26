import { Component } from 'react';

class Recipe extends Component {
  render() {
    switch (this.props.levelNumber) {
      case 1:
        return (
          <div className="recipe">
            <div>Make french fries using...</div>
            <div>{this.props.randNum1} + {this.props.randNum2} potatoes</div>
            <span>Answer: {this.props.q1Answer}</span>
            <div>{this.props.randNum3} + {this.props.randNum4} pinches of salt</div>
            <span>Answer: {this.props.q2Answer}</span>
            <div>{this.props.randNum5} + {this.props.randNum6} ounces of oil</div>
            <span>Answer: {this.props.q3Answer}</span>
          </div>
        );
      case 2:
        return (
          <div className="recipe">
            <div>Make potato chips using...</div>
            <div>{this.props.randNum1} - {this.props.randNum2} potatoes</div>
            <span>Answer: {this.props.q1Answer}</span>
            <div>{this.props.randNum3} - {this.props.randNum4} pinches of salt</div>
            <span>Answer: {this.props.q2Answer}</span>
            <div>{this.props.randNum5} - {this.props.randNum6} pinches of pepper</div>
            <span>Answer: {this.props.q3Answer}</span>
          </div>
        );
      case 3:
        return (
          <div className="recipe">
            <div>Make mashed potatoes using...</div>
            <div>{this.props.randNum1} x {this.props.randNum2} potatoes</div>
            <span>Answer: {this.props.q1Answer}</span>
            <div>{this.props.randNum3} x {this.props.randNum4} cups of milk</div>
            <span>Answer: {this.props.q2Answer}</span>
            <div>{this.props.randNum5} x {this.props.randNum6} sticks of butter</div>
            <span>Answer: {this.props.q3Answer}</span>
          </div>
        );
      case 4:
        return (
          <div className="recipe">
            <div>Make baked potatoes using...</div>
            <div>{this.props.randNum1} ÷ {this.props.randNum2} potatoes</div>
            <span>Answer: {this.props.q1Answer}</span>
            <div>{this.props.randNum3} ÷ {this.props.randNum4} pieces of bacon</div>
            <span>Answer: {this.props.q2Answer}</span>
            <div>{this.props.randNum5} ÷ {this.props.randNum6} sprigs of chives</div>
            <span>Answer: {this.props.q3Answer}</span>
          </div>
        );
      case 5:
        return (
          <div className="recipe">
            <div>Make potato salad using...</div>
            <div>{this.props.randNumA} - {this.props.randNum1} + {this.props.randNum2} potatoes</div>
            <span>Answer: {this.props.q1Answer}</span>
            <div>{this.props.randNumB} - {this.props.randNum3} ÷ {this.props.randNum4} cups of milk</div>
            <span>Answer: {this.props.q2Answer}</span>
            <div>{this.props.randNumC} x {this.props.randNum5} ÷ {this.props.randNum6} sticks of butter</div>
            <span>Answer: {this.props.q3Answer}</span>
          </div>
        );
    }
  }
}

export default Recipe;
