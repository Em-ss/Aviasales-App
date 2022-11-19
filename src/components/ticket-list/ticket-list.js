import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions.js';
import Ticket from '../ticket/ticket';

const TicketList = ({
  tickets = [],
  more,
  moreTickets,
  checkBoxOne,
  filterOne,
  filterTwo,
  filterThree,
  filterNull,
  checkBoxThree,
  checkBoxTwo,
  checkBoxNull,
  sortBottomTickets,
  up,
  upF,
}) => {
  // console.log(items);
  // let sort = Object.assign([], filterOne);
  // if (sortBottomTickets) {
  //   // console.log('asd');

  //   filterOne = sort.sort(function (a, b) {
  //     return a['price'] - b['price'];
  //   });
  // }

  // let filterAll;
  // if (sortBottomTickets) {
  //   filterAll = value.sort(function (a, b) {
  //     return a['price'] - b['price'];
  //   });
  // }

  // if (id < more) {
  //   return <Ticket item={item} />;
  // }

  let elements1 = filterOne.map((item, id) => {
    if (checkBoxOne) {
      if (id < more) {
        return <Ticket item={item} />;
      }
    }
  });
  let elements2 = filterTwo.map((item, id) => {
    if (checkBoxTwo) {
      if (id < more) {
        return <Ticket item={item} />;
      }
    }
  });
  let elements3 = filterThree.map((item, id) => {
    if (checkBoxThree) {
      if (id < more) {
        return <Ticket item={item} />;
      }
    }
  });
  let elements4 = filterNull.map((item, id) => {
    if (checkBoxNull) {
      if (id < more) {
        return <Ticket item={item} />;
      }
    }
  });

  let elementsFull = [elements1, elements2, elements3, elements4];

  if (sortBottomTickets) {
    let value = [...filterOne, ...filterTwo, ...filterThree, ...filterNull];
    let sort = Object.assign([], value);
    console.log(value);
    sort = sort.sort(function (a, b) {
      return a['price'] - b['price'];
    });

    elementsFull = sort.map((item, id) => {
      if (id < more) {
        return <Ticket item={item} />;
      }
    });
  }

  // console.log(filterOne);

  // let sort = Object.assign([], elementsFull);
  // let sort = [...elementsFull];

  let btn =
    elements1[0] || elements2[0] || elements3[0] || elements4[0] ? (
      <button onClick={moreTickets}>Показать еще 5 билетов!</button>
    ) : (
      <div className="re">Рейсов, подходящих под заданные фильтры, не найдено</div>
    );
  return (
    <>
      <div>{elementsFull}</div>
      {btn}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    tickets: state.tickets['tickets'],
    filterOne: state.filterOne,
    filterTwo: state.filterTwo,
    filterThree: state.filterThree,
    filterNull: state.filterNull,
    more: state.more,
    checkBoxAll: state.checkBoxAll,
    checkBoxNull: state.checkBoxNull,
    checkBoxOne: state.checkBoxOne,
    checkBoxTwo: state.checkBoxTwo,
    checkBoxThree: state.checkBoxThree,
    upF: state.up,
    sortBottomTickets: state.sortBottomTickets,
  };
};
export default connect(mapStateToProps, actions)(TicketList);
