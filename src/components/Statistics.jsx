import PropTypes from 'prop-types';

import React, { Component } from 'react';
import css from './Statistics.module.css';

class Statistics extends Component {
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
  };

  render() {
    return (
      <div>
        <p>
          Good: <span className={css.statsData}>{this.props.good}</span>
        </p>
        <p>
          Neutral: <span className={css.statsData}>{this.props.neutral}</span>
        </p>
        <p>
          Bad: <span className={css.statsData}>{this.props.bad}</span>
        </p>

        <p>
          Total: <span className={css.statsData}>{this.props.total}</span>
        </p>

        <p>
          Positive feedback:
          <span className={css.statsData}>
            {this.props.positivePercentage}%
          </span>
        </p>
      </div>
    );
  }
}

export default Statistics;
