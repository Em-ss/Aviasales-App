import React, { Component } from 'react';

import classes from './filter.module.scss';
export class Filter extends Component {
  onChangeBtn() {}

  render() {
    return (
      <div>
        <div className={classes.filter}>
          <button className={classes.btn} onClick={this.onChangeBtn.bind(this)}>
            САМЫЙ ДЕШЕВЫЙ
          </button>
          <button className={classes.btn} onClick={this.onChangeBtn.bind(this)}>
            САМЫЙ БЫСТРЫЙ
          </button>
          <button className={classes.btn} onClick={this.onChangeBtn.bind(this)}>
            ОПТИМАЛЬНЫЙ
          </button>
        </div>
        <div className={classes.tickets}>{this.props.children}</div>
      </div>
    );
  }
}
