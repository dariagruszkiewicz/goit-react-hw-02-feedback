import css from './Feedback.module.css';
import { Component } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';

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
        <FeedbackOptions
          options={'Good'}
          onLeaveFeedback={() => this.handleClick('good')}
        ></FeedbackOptions>
        <FeedbackOptions
          options={'Neutral'}
          onLeaveFeedback={() => this.handleClick('neutral')}
        ></FeedbackOptions>
        <FeedbackOptions
          options={'Bad'}
          onLeaveFeedback={() => this.handleClick('bad')}
        ></FeedbackOptions>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={
            this.countPositiveFeedbackPercentage() > 0
              ? this.countPositiveFeedbackPercentage()
              : '0'
          }
        ></Statistics>
      </div>
    );
  }
}
