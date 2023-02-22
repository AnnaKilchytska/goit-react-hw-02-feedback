import PropTypes from 'prop-types';

import React, { Component } from 'react';

import css from './Section.module.css';

class Section extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div className={css.section}>
        <h2 className={css.section__title}>{this.props.title}</h2>
        {this.props.children}
      </div>
    );
  }
}

export default Section;
