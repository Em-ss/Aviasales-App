import React, { Component } from 'react';

import { AppContext } from '../context-app/context-app';
import CheckBox from '../checkbox/checkbox';
import { Filter } from '../filter/filter';
import { Ticket } from '../ticket/ticket';

import 'antd/dist/antd.css';
import './app.css';

export class App extends Component {
  constructor() {
    super();
  }
  render() {
    const tickets = <Ticket></Ticket>;

    return (
      <AppContext.Provider value={''}>
        <div className="container">
          <CheckBox></CheckBox>
          <Filter>{tickets}</Filter>
        </div>
      </AppContext.Provider>
    );
  }
}
