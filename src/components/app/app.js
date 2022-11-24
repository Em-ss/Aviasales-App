import React, { Component } from 'react';
import { connect } from 'react-redux';

import CheckBox from '../checkbox/checkbox';
import Filter from '../filter/filter';
import TicketList from '../ticket-list/ticket-list';
import { actionGetSearchId } from '../../actions/actions';

import 'antd/dist/antd.css';
import './app.css';

class App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.tickets();
  }

  render() {
    return (
      <>
        <div className="container-img">
          <img src="../../img/Logo.png" />
        </div>
        <div className="container">
          <CheckBox></CheckBox>
          <Filter>
            <TicketList />
          </Filter>
        </div>
      </>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
