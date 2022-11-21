import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Spin } from 'antd';

import './ticket-list.css';
import * as actions from '../actions/actions.js';
import Ticket from '../ticket/ticket';

const TicketList = ({
  loading,
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
  sortFastTickets,
}) => {
  let elements1 = filterOne.map((item, id) => {
    if (checkBoxOne) {
      if (id < more) {
        return <Ticket key={uuidv4()} item={item} />;
      }
    }
  });
  let elements2 = filterTwo.map((item, id) => {
    if (checkBoxTwo) {
      if (id < more) {
        return <Ticket key={uuidv4()} item={item} />;
      }
    }
  });
  let elements3 = filterThree.map((item, id) => {
    if (checkBoxThree) {
      if (id < more) {
        return <Ticket key={uuidv4()} item={item} />;
      }
    }
  });
  let elements4 = filterNull.map((item, id) => {
    if (checkBoxNull) {
      if (id < more) {
        return <Ticket key={uuidv4()} item={item} />;
      }
    }
  });

  let elementsFull = [elements1, elements2, elements3, elements4];

  if (sortBottomTickets) {
    let value = [...filterOne, ...filterTwo, ...filterThree, ...filterNull];
    let sort = Object.assign([], value);

    sort = sort.sort(function (a, b) {
      return a['price'] - b['price'];
    });

    elementsFull = sort.map((item, id) => {
      if (id < more) {
        return <Ticket key={uuidv4()} item={item} />;
      }
    });
  }
  if (sortFastTickets) {
    console.log(sortFastTickets);
    let value = [...filterOne, ...filterTwo, ...filterThree, ...filterNull];
    let sort = Object.assign([], value);
    console.log(value);
    sort = sort.sort(function (a, b) {
      return a['segments'][0]['duration'] - b['segments'][0]['duration'];
    });

    elementsFull = sort.map((item, id) => {
      if (id < more) {
        return <Ticket key={uuidv4()} item={item} />;
      }
    });
  }

  let btn =
    elements1[0] || elements2[0] || elements3[0] || elements4[0] ? (
      <button className="btn-more" onClick={moreTickets}>
        Показать еще 5 билетов!
      </button>
    ) : (
      <div className="default">
        <span>Рейсов, подходящих под заданные фильтры, не найдено</span>
      </div>
    );
  return (
    <>
      <div>
        {loading ? (
          elementsFull
        ) : (
          <div className="example">
            <Spin />
          </div>
        )}
      </div>
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
    sortBottomTickets: state.sortBottomTickets,
    sortFastTickets: state.sortFastTickets,
    loading: state.loading,
  };
};
export default connect(mapStateToProps, actions)(TicketList);
