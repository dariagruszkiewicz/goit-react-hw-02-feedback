import css from './Feedback.module.css';
import { Component } from 'react';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = type => {
    if (type === 'good') {
      this.setState(prevState => ({
        good: prevState.good + 1,
      }));
    } else if (type === 'neutral') {
      this.setState(prevState => ({
        neutral: prevState.neutral + 1,
      }));
    } else if (type === 'bad') {
      this.setState(prevState => ({
        bad: prevState.bad + 1,
      }));
    }
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0);
  };

  render() {
    return (
      <div className={css.wrapper}>
        <h1>Please leave feedback</h1>
        <button onClick={() => this.handleClick('good')}>Good</button>
        <button onClick={() => this.handleClick('neutral')}>Neutral</button>
        <button onClick={() => this.handleClick('bad')}>Bad</button>
        <ul className={css.statisticsList}>
          <h2>Statistics</h2>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
          <li>Total: {this.countTotalFeedback()} </li>
          <li>
            Positive feedback:{' '}
            {this.countPositiveFeedbackPercentage() > 0
              ? this.countPositiveFeedbackPercentage()
              : '0'}
            %
          </li>
        </ul>
      </div>
    );
  }
}
