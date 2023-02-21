import React, { Component } from 'react';
import css from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  render() {
    return (
      <div className={css.feedbackBtnContainer}>
        <button
          className={css.feedbackBtn}
          onClick={this.props.onLeaveFeedback}
        >
          Good
        </button>
        <button
          className={css.feedbackBtn}
          onClick={this.props.onLeaveFeedback}
        >
          Neutral
        </button>
        <button
          className={css.feedbackBtn}
          onClick={this.props.onLeaveFeedback}
        >
          Bad
        </button>
      </div>
    );
  }
}

export default FeedbackOptions;
