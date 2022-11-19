import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actionGetSearchId } from '../actions/actions.js';
import { AppContext } from '../context-app/context-app';
import CheckBox from '../checkbox/checkbox';
import Filter from '../filter/filter';
import TicketList from '../ticket-list/ticket-list';

import 'antd/dist/antd.css';
import './app.css';

class App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    // dispatch(actionGetSearchId());
    this.props.tickets();
  }
  // componentDidUpdate() {
  //   // this.props.tickets();
  // }
  render() {
    return (
      <AppContext.Provider value={''}>
        <div className="container">
          <CheckBox></CheckBox>
          <Filter>
            <TicketList />
          </Filter>
        </div>
      </AppContext.Provider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tickets: state.tickets,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    tickets: () => dispatch(actionGetSearchId()),
    // tickets: () => dispatch(getTickets(this.props.loadId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
