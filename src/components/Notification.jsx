import React, { Component } from 'react';

import css from './Notification.module.css';

class Notification extends Component {
  render() {
    return (
      <div className={css.notification}>
        <p>{this.props.message}</p>
      </div>
    );
  }
}
export default Notification;
