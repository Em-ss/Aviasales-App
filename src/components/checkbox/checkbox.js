import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions.js';

import './checkbox.css';

const CheckBox = ({
  checkBoxAll,
  checkBoxNull,
  checkBoxOne,
  checkBoxTwo,
  checkBoxThree,
  actionHandleCheckboxAll,
  actionHandleCheckboxNull,
  actionHandleCheckboxOne,
  actionHandleCheckboxTwo,
  actionHandleCheckboxThree,
  tickets,
}) => {
  let check1,
    check2,
    check3,
    check4,
    check5 = null;
  if (checkBoxAll) {
    check1 = 'checked';
  }
  if (checkBoxNull) {
    check2 = 'checked';
  }
  if (checkBoxOne) {
    check3 = 'checked';
  }
  if (checkBoxTwo) {
    check4 = 'checked';
  }
  if (checkBoxThree) {
    check5 = 'checked';
  }
  if (checkBoxNull && checkBoxOne && checkBoxTwo && checkBoxThree) {
    actionHandleCheckboxAll(true);
  }
  // console.log(props.counter);
  return (
    <div className="checkbox">
      <span className="checkbox-title">КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      <div>
        <input
          type="checkbox"
          id="1"
          checked={check1}
          onClick={() => {
            let value = checkBoxAll ? false : true;
            actionHandleCheckboxAll(!checkBoxAll);
            actionHandleCheckboxNull(value, tickets);
            actionHandleCheckboxOne(value, tickets);
            actionHandleCheckboxTwo(value, tickets);
            actionHandleCheckboxThree(value, tickets);
          }}
        />
        <label htmlFor="1">Все</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="2"
          checked={check2}
          onClick={() => {
            actionHandleCheckboxNull(!checkBoxNull, tickets);
            actionHandleCheckboxAll(false);
          }}
        />
        <label htmlFor="2">Без пересадок</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="3"
          checked={check3}
          onClick={() => {
            actionHandleCheckboxOne(!checkBoxOne, tickets);
            actionHandleCheckboxAll(false);
          }}
        />
        <label htmlFor="3">1 пересадка</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="4"
          checked={check4}
          onClick={() => {
            actionHandleCheckboxTwo(!checkBoxTwo, tickets);
            actionHandleCheckboxAll(false);
          }}
        />
        <label htmlFor="4">2 пересадки</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="5"
          checked={check5}
          onClick={() => {
            actionHandleCheckboxThree(!checkBoxThree, tickets);
            actionHandleCheckboxAll(false);
          }}
        />
        <label htmlFor="5">3 пересадки</label>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    checkBoxAll: state.checkBoxAll,
    checkBoxNull: state.checkBoxNull,
    checkBoxOne: state.checkBoxOne,
    checkBoxTwo: state.checkBoxTwo,
    checkBoxThree: state.checkBoxThree,
    tickets: state.tickets['tickets'],
  };
};

export default connect(mapStateToProps, actions)(CheckBox);
