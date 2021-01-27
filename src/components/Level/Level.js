import { Component } from 'react';
import Modal from 'react-modal';
import db from '../../db';

import bacon from '../../assets/ingredient/bacon.png';
import butter from '../../assets/ingredient/butter.png';
import cheese from '../../assets/ingredient/cheese.png';
import chives from '../../assets/ingredient/chives.png';
import egg from '../../assets/ingredient/egg.png';
import mayo from '../../assets/ingredient/mayo.png';
import milk from '../../assets/ingredient/milk.png';
import oil from '../../assets/ingredient/oil.png';
import pepper from '../../assets/ingredient/pepper.png';
import pepper_salad from '../../assets/ingredient/pepper_salad.png';
import potato1 from '../../assets/ingredient/potato1.png';
import potato2 from '../../assets/ingredient/potato2.png';
import potato3 from '../../assets/ingredient/potato3.png';
import potato4 from '../../assets/ingredient/potato4.png';
import potato5 from '../../assets/ingredient/potato5.png';
import salt1 from '../../assets/ingredient/salt1.png';
import salt2 from '../../assets/ingredient/salt2.png';
import vegetables from '../../assets/ingredient/vegetables.png';

import level1 from '../../assets/level/level_1.png'
import level2 from '../../assets/level/level_2.png'
import level3 from '../../assets/level/level_3.png'
import level4 from '../../assets/level/level_4.png'
import level5 from '../../assets/level/level_5.png'

import bakedPotato from '../../assets/dish/baked_potato.png';
import fries from '../../assets/dish/fries.png';
import mashedPotato from '../../assets/dish/mashed_potato.png';
import potatoChips from '../../assets/dish/potato_chips.png';
import potatoSalad from '../../assets/dish/potato_salad.png';

import star from '../../assets/ui/star.png';
import starGray from '../../assets/ui/star-gray.png';


import Recipe from '../Recipe/Recipe';

class Level extends Component {

  godMode = true;

  constructor(props) {
    super(props);
    this.state = {
      ...this.generateQuestions(),
      userAnswer1: null,
      userAnswer2: null,
      userAnswer3: null,
      userAnswer1IsCorrect: null,
      userAnswer2IsCorrect: null,
      userAnswer3IsCorrect: null,
      modalIsOpen: false,
    };
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

  recipes = {
    1: {
      recipeName: 'French Fries',
      ingredientLabel1: 'potatoes',
      ingredientLabel2: 'salt',
      ingredientLabel3: 'oil',
      ingredientImgPath1: potato1,
      ingredientImgPath2: salt1,
      ingredientImgPath3: oil,
      backgroundImgPath: level1,
      dish: fries,
    },
    2: {
      recipeName: 'Potato Chips',
      ingredientLabel1: 'potatoes',
      ingredientLabel2: 'salt',
      ingredientLabel3: 'pepper',
      ingredientImgPath1: potato2,
      ingredientImgPath2: salt2,
      ingredientImgPath3: pepper,
      backgroundImgPath: level2,
      dish: potatoChips,
    },
    3: {
      recipeName: 'Mashed Potatoes',
      ingredientLabel1: 'potatoes',
      ingredientLabel2: 'milk',
      ingredientLabel3: 'butter',
      ingredientImgPath1: potato3,
      ingredientImgPath2: milk,
      ingredientImgPath3: butter,
      backgroundImgPath: level3,
      dish: mashedPotato,
    },
    4: {
      recipeName: 'Baked Potatoes',
      ingredientLabel1: 'potatoes',
      ingredientLabel2: 'bacon',
      ingredientLabel3: 'chives',
      ingredientImgPath1: potato4,
      ingredientImgPath2: bacon,
      ingredientImgPath3: chives,
      backgroundImgPath: level4,
      dish: bakedPotato,
    },
    5: {
      recipeName: 'Baked Potatoes',
      ingredientLabel1: 'potatoes',
      ingredientLabel2: 'egg',
      ingredientLabel3: 'mayo',
      ingredientImgPath1: potato5,
      ingredientImgPath2: egg,
      ingredientImgPath3: mayo,
      backgroundImgPath: level5,
      dish: potatoSalad,
    },
  };

  checkAnswers = () => {
    const userAnswer1IsCorrect = parseInt(document.getElementById('user-answer-1-input').value) === this.state.q1Answer;
    const userAnswer2IsCorrect = parseInt(document.getElementById('user-answer-2-input').value) === this.state.q2Answer;
    const userAnswer3IsCorrect = parseInt(document.getElementById('user-answer-3-input').value) === this.state.q3Answer;
    this.setState({userAnswer1IsCorrect, userAnswer2IsCorrect, userAnswer3IsCorrect});

    if ((userAnswer1IsCorrect && userAnswer2IsCorrect && userAnswer3IsCorrect) || this.godMode) {
      // clear input after correct answers submitted
      this.props.updateTimeForLevel('end', this.props.levelNumber);
      this.openModal();
      document.getElementById('user-answer-1-input').value = '';
      document.getElementById('user-answer-2-input').value = '';
      document.getElementById('user-answer-3-input').value = '';
      // reset correctness state to hide incorrect border formatting
      this.setState({userAnswer1IsCorrect: null, userAnswer2IsCorrect: null, userAnswer3IsCorrect: null});
    }
  };

  openModal = () => {
    this.setState({modalIsOpen: true})
  };

  closeModalAndNavigateAndStartTimer = () => {
    this.props.increaseLevelNumber();
    if (this.props.levelNumber !== 5) {
      this.props.updateTimeForLevel('start', this.props.levelNumber+1);
    } else {
      const elapsedMs = this.props.trial[5].end-this.props.trial[1].start;
      // check and set top score
      if (!this.props.topScore.duration || this.props.topScore.duration > elapsedMs) {
        this.props.setTopScore(elapsedMs);
      }
    }
    this.setState({modalIsOpen: false})
  };

  modalStyles = {
    content: {
      width: '940px',
      height: '540px',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    },
  };

  renderStars = (score) => {
    const starsElements = [];
    for (let i=1; i<=5; i++) {
      if (i<=score) {
        starsElements.push(
          <img key={`star-${i}`} className="star" src={star} />
        );
      } else {
        starsElements.push(
          <img key={`star-${i}`} className="star" src={starGray} />
        );
      }
    }
    return starsElements;
  };

  renderEmojis = (score) => {
    switch (score){
      case 1:
        return ('😧 💩');
      case 2:
        return ('✌️ ☹️');
      case 3:
        return ('😁 👍');
      case 4:
        return ('👌 😎');
      case 5:
        return ('🤓 🥔');
    }
  };

  renderTime = () => {
    if (this.props.trial[this.props.levelNumber].end) {
      const elapsedMs = this.props.trial[this.props.levelNumber].end-this.props.trial[this.props.levelNumber].start;
      const minutes = Math.floor(elapsedMs / 60000);
      const seconds = Math.floor((elapsedMs - minutes*60000) / 1000);
      const remainingMs = elapsedMs - (minutes*60 + seconds)*1000;
      const formattedTimesArray = [minutes, seconds, remainingMs].map(
        (number) => number.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})
      );
      return (`${formattedTimesArray[0]}:${formattedTimesArray[1]}:${formattedTimesArray[2]}`);
    }
  };

  calculateScore = () => {
    const elapsedMs = this.props.trial[this.props.levelNumber].end-this.props.trial[this.props.levelNumber].start;
    const secs = elapsedMs / 1000;
    const level = this.props.levelNumber;

    if (level < 3) {
      // easy
      if (secs < 15) return 5;
      if (secs < 20) return 4;
      if (secs < 30) return 3;
      if (secs < 45) return 2;
      if (secs >= 45) return 1;
    } else if (level >=3 && level < 5) {
      // medium
      if (secs < 25) return 5;
      if (secs < 30) return 4;
      if (secs < 50) return 3;
      if (secs < 80) return 2;
      if (secs >= 80) return 1;
    } else {
      // hard
      if (secs < 45) return 5;
      if (secs < 55) return 4;
      if (secs < 70) return 3;
      if (secs < 100) return 2;
      if (secs >= 100) return 1;
    }
  };

  render() {
    return (
      <div className="level">
        <Modal
          isOpen={this.state.modalIsOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={() => this.closeModalAndNavigateAndStartTimer()}
          // style={this.modalStyles}
          contentLabel="Your Score"
          className="modal"
          overlayClassName="overlay"
        >
          <div className="modal-content">
            <div className="left-col">
              <div className="time">{this.renderTime()}</div>
              <div className="stars-container">{this.renderStars(this.calculateScore())}</div>
              <div className="emoji-rating">{this.renderEmojis(this.calculateScore())}</div>
            </div>
            <div className="right-col">
              <img src={this.recipes[this.props.levelNumber].dish} />
              <button onClick={() => this.closeModalAndNavigateAndStartTimer()}>{this.props.levelNumber<5?`Continue to level ${this.props.levelNumber + 1}! 👉`:'See your final score! 😮'}</button>
            </div>
          </div>
        </Modal>
        {/*<div className="level-background" style={{backgroundImage: `url(${this.recipes[this.props.levelNumber].backgroundImgPath})`}} />*/}
        <div className="level-inner">
          <div className="left-col">
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
            {/*<img className="level-background" src={this.recipes[this.props.levelNumber].backgroundImgPath} />*/}
          </div>
          <div className="right-col">
            <div className="right-col-top">
              <div className="user-answer">
                <img className="user-answer-img" src={this.recipes[this.props.levelNumber].ingredientImgPath1} />
                <input id="user-answer-1-input" type="number" min="0" style={(this.state.userAnswer1IsCorrect === false)?{border: '3px solid red'}:null} />
              </div>
              <div className="user-answer">
                <img className="user-answer-img" src={this.recipes[this.props.levelNumber].ingredientImgPath2} />
                <input id="user-answer-2-input" type="number" min="0" style={(this.state.userAnswer2IsCorrect === false)?{border: '3px solid red'}:null} />
              </div>
              <div className="user-answer">
                <img className="user-answer-img" src={this.recipes[this.props.levelNumber].ingredientImgPath3} />
                <input id="user-answer-3-input" type="number" min="0" style={(this.state.userAnswer3IsCorrect === false)?{border: '3px solid red'}:null} />
              </div>
            </div>
            <div className="right-col-bottom">
              <button onClick={() => this.checkAnswers()}>Make!</button>
            </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Level;
