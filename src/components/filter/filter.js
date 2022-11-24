import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/actions';

import classes from './filter.module.scss';
const Filter = ({ sortBottom, sortBottomTickets, children, sortFast, sortFastTickets }) => {
  return (
    <div>
      <div className={classes.filter}>
        <button
          className={sortBottomTickets ? classes.active : classes.btn}
          onClick={() => {
            sortBottom(!sortBottomTickets);
            sortFast(false);
          }}
        >
          САМЫЙ ДЕШЕВЫЙ
        </button>
        <button
          className={sortFastTickets ? classes.active : classes.btn}
          onClick={() => {
            sortFast(!sortFastTickets);
            sortBottom(false);
            console.log(sortFastTickets);
          }}
        >
          САМЫЙ БЫСТРЫЙ
        </button>
        <button className={classes.btn}>ОПТИМАЛЬНЫЙ</button>
      </div>
      <div className={classes.tickets}>{children}</div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    sortBottomTickets: state.sortBottomTickets,
    sortFastTickets: state.sortFastTickets,
  };
};
export default connect(mapStateToProps, actions)(Filter);
