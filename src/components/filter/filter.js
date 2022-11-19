import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions.js';

import classes from './filter.module.scss';
const Filter = ({ sortBottom, sortBottomTickets, children }) => {
  return (
    <div>
      <div className={classes.filter}>
        <button
          className={classes.btn}
          onClick={() => {
            console.log(sortBottomTickets);
            sortBottom(!sortBottomTickets);
          }}
        >
          САМЫЙ ДЕШЕВЫЙ
        </button>
        <button className={classes.btn}>САМЫЙ БЫСТРЫЙ</button>
        <button className={classes.btn}>ОПТИМАЛЬНЫЙ</button>
      </div>
      <div className={classes.tickets}>{children}</div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    sortBottomTickets: state.sortBottomTickets,
  };
};
export default connect(mapStateToProps, actions)(Filter);
