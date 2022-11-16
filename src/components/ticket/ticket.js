import React, { Component } from 'react';

import './ticket.css';

export class Ticket extends Component {
  render() {
    return (
      <div className="ticket">
        <div className="row-1">
          <div className="row-box price">13400 Р</div>
          <div></div>
        </div>
        <div className="row-2">
          <div className="row-box">
            <span className="title">MOW – HKT</span>
            <span className="data">1</span>
          </div>
          <div className="row-box">
            <span className="title">В пути</span>
            <span className="data">2</span>
          </div>
          <div className="row-box">
            <span className="title">2 пересадки</span>
            <span className="data">3</span>
          </div>
        </div>
        <div className="row-3">
          <div className="row-box">
            <span className="title">MOW – HKT</span>
            <span className="data">5</span>
          </div>
          <div className="row-box">
            <span className="title">В пути</span>
            <span className="data">5</span>
          </div>
          <div className="row-box">
            <span className="title">2 пересадки</span>
            <span className="data">7</span>
          </div>
        </div>
      </div>
    );
  }
}
