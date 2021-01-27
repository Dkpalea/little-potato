import { Component } from 'react';

// import recipe from '../../assets/level/recipe.png';

class Recipe extends Component {
  render() {
    switch (this.props.levelNumber) {
      case 1:
        return (
          <div className="recipe">
            <div className="recipe-content">
              <div className="recipe-level">Level {this.props.levelNumber} of 5</div>
              <div className="recipe-title">French Fries</div>
              <ul>
                <li>{this.props.randNum1} + {this.props.randNum2} potatoes</li>
                {/*<span>Answer: {this.props.q1Answer}</span>*/}
                <li>{this.props.randNum3} + {this.props.randNum4} pinches of salt</li>
                {/*<li>Answer: {this.props.q2Answer}</li>*/}
                <li>{this.props.randNum5} + {this.props.randNum6} ounces of oil</li>
                {/*<span>Answer: {this.props.q3Answer}</span>*/}
              </ul>
            </div>
            <div className="recipe-background" />
          </div>
        );
      case 2:
        return (
          <div className="recipe">
            <div className="recipe-content">
              <div className="recipe-level">Level {this.props.levelNumber} of 5</div>
              <div className="recipe-title">Potato Chips</div>
              <ul>
                <li>{this.props.randNum1} - {this.props.randNum2} potatoes</li>
                {/*<span>Answer: {this.props.q1Answer}</span>*/}
                <li>{this.props.randNum3} - {this.props.randNum4} pinches of salt</li>
                {/*<li>Answer: {this.props.q2Answer}</li>*/}
                <li>{this.props.randNum5} - {this.props.randNum6} pinches of pepper</li>
                {/*<span>Answer: {this.props.q3Answer}</span>*/}
              </ul>
            </div>
            <div className="recipe-background" />
          </div>
        );
      case 3:
        return (
          <div className="recipe">
            <div className="recipe-content">
              <div className="recipe-level">Level {this.props.levelNumber} of 5</div>
              <div className="recipe-title">Mashed Potatoes</div>
              <ul>
                <li>{this.props.randNum1} x {this.props.randNum2} potatoes</li>
                {/*<span>Answer: {this.props.q1Answer}</span>*/}
                <li>{this.props.randNum3} x {this.props.randNum4} cups of milk</li>
                {/*<li>Answer: {this.props.q2Answer}</li>*/}
                <li>{this.props.randNum5} x {this.props.randNum6} sticks of butter</li>
                {/*<span>Answer: {this.props.q3Answer}</span>*/}
              </ul>
            </div>
            <div className="recipe-background" />
          </div>
        );
      case 4:
        return (
          <div className="recipe">
            <div className="recipe-content">
              <div className="recipe-level">Level {this.props.levelNumber} of 5</div>
              <div className="recipe-title">Baked Potatoes</div>
              <ul>
                <li>{this.props.randNum1} ÷ {this.props.randNum2} potatoes</li>
                {/*<span>Answer: {this.props.q1Answer}</span>*/}
                <li>{this.props.randNum3} ÷ {this.props.randNum4} pieces of bacon</li>
                {/*<li>Answer: {this.props.q2Answer}</li>*/}
                <li>{this.props.randNum5} ÷ {this.props.randNum6} sprigs of chives</li>
                {/*<span>Answer: {this.props.q3Answer}</span>*/}
              </ul>
            </div>
            <div className="recipe-background" />
          </div>
        );
      case 5:
        return (
          <div className="recipe">
            <div className="recipe-content">
              <div className="recipe-level">Level {this.props.levelNumber} of 5</div>
              <div className="recipe-title">Potato Salad</div>
              <ul>
                <li>{this.props.randNumA} - {this.props.randNum1} + {this.props.randNum2} potatoes</li>
                {/*<span>Answer: {this.props.q1Answer}</span>*/}
                <li>{this.props.randNumB} - {this.props.randNum3} ÷ {this.props.randNum4} eggs</li>
                {/*<li>Answer: {this.props.q2Answer}</li>*/}
                <li>{this.props.randNumC} x {this.props.randNum5} ÷ {this.props.randNum6} scoops of mayo</li>
                {/*<span>Answer: {this.props.q3Answer}</span>*/}
              </ul>
            </div>
            <div className="recipe-background" />
          </div>
        );
    }
  }
}

export default Recipe;
