import PropTypes from 'prop-types';

import React, { Component } from 'react';

import css from './Notification.module.css';

class Notification extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={css.notification}>
        <p>{this.props.message}</p>
      </div>
    );
  }
}
export default Notification;
