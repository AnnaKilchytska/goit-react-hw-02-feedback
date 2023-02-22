import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import React, { Component } from 'react';
import css from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),

    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className={css.feedbackOptions}>
        {this.props.options.map(option => (
          <button
            type="button"
            key={nanoid()}
            className={css.feedbackBtn}
            onClick={this.props.onLeaveFeedback}
          >
            {option}
          </button>
        ))}
      </div>
    );
  }
}

export default FeedbackOptions;
