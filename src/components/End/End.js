import { Component } from 'react';
import star from '../../assets/ui/star.png';
import starGray from '../../assets/ui/star-gray.png';
import potato1 from '../../assets/ingredient/potato1.png';
import salt1 from '../../assets/ingredient/salt1.png';
import oil from '../../assets/ingredient/oil.png';
import level1 from '../../assets/level/level_1.png';
import fries from '../../assets/dish/fries.png';
import potato2 from '../../assets/ingredient/potato2.png';
import salt2 from '../../assets/ingredient/salt2.png';
import pepper from '../../assets/ingredient/pepper.png';
import level2 from '../../assets/level/level_2.png';
import potatoChips from '../../assets/dish/potato_chips.png';
import potato3 from '../../assets/ingredient/potato3.png';
import milk from '../../assets/ingredient/milk.png';
import butter from '../../assets/ingredient/butter.png';
import level3 from '../../assets/level/level_3.png';
import mashedPotato from '../../assets/dish/mashed_potato.png';
import potato4 from '../../assets/ingredient/potato4.png';
import bacon from '../../assets/ingredient/bacon.png';
import chives from '../../assets/ingredient/chives.png';
import level4 from '../../assets/level/level_4.png';
import bakedPotato from '../../assets/dish/baked_potato.png';
import potato5 from '../../assets/ingredient/potato5.png';
import egg from '../../assets/ingredient/egg.png';
import mayo from '../../assets/ingredient/mayo.png';
import level5 from '../../assets/level/level_5.png';
import potatoSalad from '../../assets/dish/potato_salad.png';
import click from '../../assets/music/click.wav';

class End extends Component {

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

  renderStars = (score, mode) => {
    const starsElements = [];
    for (let i=1; i<=5; i++) {
      if (i<=score) {
        starsElements.push(
          <img key={`star-${mode}-${i}`} className={`star-${mode}`} src={star} />
        );
      } else {
        starsElements.push(
          <img key={`star-${mode}-${i}`} className={`star-${mode}`} src={starGray} />
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

  renderTime = (levelNumber) => {
    if (this.props.trial[levelNumber].end) {
      const elapsedMs = this.props.trial[levelNumber].end-this.props.trial[levelNumber].start;
      const minutes = Math.floor(elapsedMs / 60000);
      const seconds = Math.floor((elapsedMs - minutes*60000) / 1000);
      const remainingMs = elapsedMs - (minutes*60 + seconds)*1000;
      const formattedTimesArray = [minutes, seconds, remainingMs].map(
        (number) => number.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})
      );
      return (`${formattedTimesArray[0]}:${formattedTimesArray[1]}:${formattedTimesArray[2]}`);
    }
    return '00:00:00';
  };

  renderOverallTime = () => {
    const elapsedMs = this.props.trial[5].end-this.props.trial[1].start;
    const minutes = Math.floor(elapsedMs / 60000);
    const seconds = Math.floor((elapsedMs - minutes*60000) / 1000);
    const remainingMs = elapsedMs - (minutes*60 + seconds)*1000;
    const formattedTimesArray = [minutes, seconds, remainingMs].map(
      (number) => number.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})
    );
    // check and set top score
    // if (!this.props.topScore.duration || this.props.topScore.duration > elapsedMs) {
    //   this.props.setTopScore(elapsedMs);
    // }
    return (`${formattedTimesArray[0]}:${formattedTimesArray[1]}:${formattedTimesArray[2]}`);
  };

  calculateScore = (levelNumber) => {
    const elapsedMs = this.props.trial[levelNumber].end-this.props.trial[levelNumber].start;
    const secs = elapsedMs / 1000;
    const level = levelNumber;

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

  calculateAverageScore = () => {
    let totalScore = 0;
    for (let i=1; i<=5; i++) {
      totalScore += this.calculateScore(i);
    }
    return Math.round(totalScore / 5);
  };

  renderAllScores = () => {
    const allScoresElements = [];
    for (let i=1;i<=5;i++) {
      allScoresElements.push(
        <div key={`score-${i}`} className="score-content">
          <div className="left-col">
            <div className="time">{this.renderTime(i)}</div>
            <div className="stars-container">{this.renderStars(this.calculateScore(i), 'small')}</div>
            <div className="emoji-rating">{this.calculateScore(i)}</div>
          </div>
          <div className="right-col">
            <img src={this.recipes[i].dish} />
          </div>
        </div>
      );
    }

    return allScoresElements;
  };

  renderBestTime = () => {
    if (this.props.topScore.duration) {
      const elapsedMs = this.props.topScore.duration;
      const minutes = Math.floor(elapsedMs / 60000);
      const seconds = Math.floor((elapsedMs - minutes*60000) / 1000);
      const remainingMs = elapsedMs - (minutes*60 + seconds)*1000;
      const formattedTimesArray = [minutes, seconds, remainingMs].map(
        (number) => number.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})
      );
      return (`${formattedTimesArray[0]}:${formattedTimesArray[1]}:${formattedTimesArray[2]}`);
    }
    return '00:00:00';
  };

  render() {
    return (
      <div className="end">
        <div className="all-scores-container">{this.renderAllScores()}</div>
        <div className="overall-outer-right-col">
          <div className="overall-top-container">
            <div className="overall-score-content">
              <div className="overall-left-col">
                <div className="overall-your-score">{this.props.topScore.duration===this.props.trial[5].end-this.props.trial[1].start?'New best!':'Your score'}</div>
                <div className="overall-time">{this.renderOverallTime()}</div>
                <div className="overall-stars-container">{this.renderStars(this.calculateAverageScore(), 'big')}</div>
                <div className="overall-emoji-rating">{this.renderEmojis(this.calculateAverageScore())}</div>
              </div>
            </div>
            <div className="overall-best-score-content">
              <div className="overall-best-left-col">
                <div className="overall-best-your-score">Best score</div>
                <div className="overall-best-time">{this.renderBestTime()}</div>
                <div className="overall-best-stars-container">{this.renderStars(this.props.topScore.stars, 'tiny')}</div>
                <div className="overall-best-emoji-rating">{this.renderEmojis(this.props.topScore.stars)}</div>
              </div>
            </div>
          </div>
          {/*<img src={this.recipes[i].dish} />*/}
          <button onClick={() => {
            // click  sound
            const audio2 = new Audio(click);
            audio2.volume = 0.1;
            audio2.play();
            this.props.backToTitle();
          }}>Go back home...</button>
        </div>
      </div>
    );
  }
}

export default End;
