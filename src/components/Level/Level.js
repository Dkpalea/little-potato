import { Component } from 'react';
import db from '../../db';

import Recipe from '../Recipe/Recipe';

class Level extends Component {

  constructor(props) {
    super(props);
    this.state = {...this.generateQuestions(props.levelN)};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps !== this.props) {
      this.setState({...this.generateQuestions()});
    }
  }

  // helper
  getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  generateQuestions = () => {
    let randNum1 = this.getRandomInt(0,12);
    let randNum2 = this.getRandomInt(0,12);
    let randNum3 = this.getRandomInt(0,12);
    let randNum4 = this.getRandomInt(0,12);
    let randNum5 = this.getRandomInt(0,12);
    let randNum6 = this.getRandomInt(0,12);
    let randNumA = null;
    let randNumB = null;
    let randNumC = null;
    let q1Answer;
    let q2Answer;
    let q3Answer;
    // const randNum1 = this.getRandomInt(0,12);
    switch(this.props.levelNumber) {
      case 1:
        q1Answer = randNum1 + randNum2;
        q2Answer = randNum3 + randNum4;
        q3Answer = randNum5 + randNum6;
        break;
      case 2:
        // make sure the answer is not negative
        if (randNum1 <= randNum2) {
          // swap numbers
          [randNum1, randNum2] = [randNum2, randNum1];
        }
        q1Answer = randNum1 - randNum2;

        if (randNum3 <= randNum4) {
          // swap numbers
          [randNum3, randNum4] = [randNum4, randNum3];
        }
        q2Answer = randNum3 - randNum4;

        if (randNum5 <= randNum6) {
          // swap numbers
          [randNum5, randNum6] = [randNum6, randNum5];
        }
        q3Answer = randNum5 - randNum6;
        break;
      case 3:
        q1Answer = randNum1 * randNum2;
        q2Answer = randNum3 * randNum4;
        q3Answer = randNum5 * randNum6;
        break;
      case 4:
        // make sure no undefined and in Z+
        randNum1 = this.getRandomInt(1,12);
        const numberA = randNum1 * randNum2;
        // swap numbers
        [randNum1, q1Answer, randNum2] = [numberA, randNum2, randNum1];

        // make sure no undefined and in Z+
        randNum3 = this.getRandomInt(1,12);
        const numberB = randNum3 * randNum4;
        // swap numbers
        [randNum3, q2Answer, randNum4] = [numberB, randNum4, randNum3];

        // make sure no undefined and in Z+
        randNum5 = this.getRandomInt(1,12);
        const numberC = randNum5 * randNum6;
        // swap numbers
        [randNum5, q3Answer, randNum6] = [numberC, randNum6, randNum5];
        break;
      case 5:
        // a - randNum1 + randNum2
        // make sure not negative
        randNumA = this.getRandomInt(randNum1 + randNum2,randNum1+randNum2+10)
        q1Answer = randNumA - (randNum1 + randNum2);

        // b - randNum3 ÷ randomNum4
        // make sure no undefined and in Z+
        randNum3 = this.getRandomInt(1,12);
        const numberB2 = randNum3 * randNum4;
        let divAnswer;
        // swap numbers
        [randNum3, divAnswer, randNum4] = [numberB2, randNum4, randNum3];
        randNumB = this.getRandomInt(divAnswer,12);
        q2Answer = randNumB - divAnswer;

        // c * randNum5 ÷ randNum6
        // make sure no undefined and in Z+
        const n1 = this.getRandomInt(1,8);
        const n2 = this.getRandomInt(1,8);
        let x = 3;
        if (n2 === 1) {
          x = 1;
        } else if (n2 === 2) {
          x = 2;
        } else {
          while ((n2 % x) !== 0) {
            x += 1;
          }
        }
        const a = n1 * x;
        const b = n1 * n2;
        const c = n2 / x;

        [randNumC, randNum5, randNum6, q3Answer] = [n1, n2, c, a]
    }

    return (
          {
            randNum1,
            randNum2,
            randNum3,
            randNum4,
            randNum5,
            randNum6,
            randNumA,
            randNumB,
            randNumC,
            q1Answer,
            q2Answer,
            q3Answer,
          }
    );
  };

  render() {
    return (
      <div className="level">
        <h1>Level {this.props.levelNumber}</h1>
        <Recipe
          levelNumber={this.props.levelNumber}
          randNum1={this.state.randNum1}
          randNum2={this.state.randNum2}
          q1Answer={this.state.q1Answer}
          randNum3={this.state.randNum3}
          randNum4={this.state.randNum4}
          q2Answer={this.state.q2Answer}
          randNum5={this.state.randNum5}
          randNum6={this.state.randNum6}
          q3Answer={this.state.q3Answer}
          randNumA={this.state.randNumA}
          randNumB={this.state.randNumB}
          randNumC={this.state.randNumC}
        />
        <button onClick={() => this.props.increaseLevelNumber()}>next</button>

      </div>
    );
  }
}

export default Level;
