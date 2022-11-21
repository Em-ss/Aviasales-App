import React from 'react';
import { connect } from 'react-redux';
import { Checkbox } from 'antd';

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

      <div className="input">
        <Checkbox
          checked={check1}
          onClick={() => {
            let value = checkBoxAll ? false : true;
            actionHandleCheckboxAll(!checkBoxAll);
            actionHandleCheckboxNull(value, tickets);
            actionHandleCheckboxOne(value, tickets);
            actionHandleCheckboxTwo(value, tickets);
            actionHandleCheckboxThree(value, tickets);
          }}
        >
          <span className="gtr">Все</span>
        </Checkbox>
      </div>

      <div className="input">
        <Checkbox
          checked={check2}
          onClick={() => {
            actionHandleCheckboxNull(!checkBoxNull, tickets);
            actionHandleCheckboxAll(false);
          }}
        >
          Без пересадок
        </Checkbox>
      </div>
      <div className="input">
        <Checkbox
          checked={check3}
          onClick={() => {
            actionHandleCheckboxOne(!checkBoxOne, tickets);
            actionHandleCheckboxAll(false);
          }}
        >
          1 пересадка
        </Checkbox>
      </div>
      <div className="input">
        <Checkbox
          checked={check4}
          onClick={() => {
            actionHandleCheckboxTwo(!checkBoxTwo, tickets);
            actionHandleCheckboxAll(false);
          }}
        >
          2 пересадки
        </Checkbox>
      </div>
      <div className="input">
        <Checkbox
          checked={check5}
          onClick={() => {
            actionHandleCheckboxThree(!checkBoxThree, tickets);
            actionHandleCheckboxAll(false);
          }}
        >
          3 пересадки
        </Checkbox>
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
