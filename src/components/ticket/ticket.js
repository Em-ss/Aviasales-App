import React, { Component } from 'react';
import { connect } from 'react-redux';
import addMinutes from 'date-fns/addMinutes';

import * as actions from '../../actions/actions';
import './ticket.css';

class Ticket extends Component {
  render() {
    const { item } = this.props;
    let transfer = 'БЕЗ ПЕРЕСАДКИ';
    let transferR = 'БЕЗ ПЕРЕСАДКИ';
    let time = new Date(item.segments[0].date);
    let timeEnd = addMinutes(new Date(item.segments[0].date), item.segments[0].duration);

    let timeR = new Date(item.segments[1].date);
    let timeEndR = addMinutes(new Date(item.segments[1].date), item.segments[1].duration);

    let duration = new Date(item.segments[0].duration * 3600);
    let durationR = new Date(item.segments[1].duration * 3600);

    if (item.segments[0].stops.length < 2 && item.segments[0].stops.length > 0) {
      transfer = '1 ПЕРЕСАДКА';
    }
    if (item.segments[0].stops.length > 1 && item.segments[0].stops.length < 3) {
      transfer = '2 ПЕРЕСАДКИ';
    }
    if (item.segments[0].stops.length > 2) {
      transfer = '3 ПЕРЕСАДКИ';
    }

    if (item.segments[1].stops.length < 2 && item.segments[1].stops.length > 0) {
      transferR = '1 ПЕРЕСАДКА';
    }
    if (item.segments[1].stops.length > 1 && item.segments[1].stops.length < 3) {
      transferR = '2 ПЕРЕСАДКИ';
    }
    if (item.segments[1].stops.length > 2) {
      transferR = '3 ПЕРЕСАДКИ';
    }
    let img = `https://pics.avs.io/99/36/${item.carrier}.png`;
    return (
      <div className="ticket">
        <div className="row-1">
          <div className="row-box price">{item.price} Р</div>
          <div className="ticket-img">
            <img src={img} />
          </div>
        </div>
        <div className="row-2">
          <div className="row-box">
            <span className="title">
              {item.segments[0].origin} – {item.segments[0].destination}
            </span>
            <span className="data">
              {time.toLocaleTimeString('en-GB')} - {timeEnd.toLocaleTimeString('en-GB')}
            </span>
          </div>
          <div className="row-box">
            <span className="title">В пути</span>
            <span className="data">
              {duration.getHours()}ч {duration.getMinutes()}м
            </span>
          </div>
          <div className="row-box">
            <span className="title">{transferR}</span>
            <span className="data">{item.segments[1].stops.join()}</span>
          </div>
        </div>
        <div className="row-3">
          <div className="row-box">
            <span className="title">
              {item.segments[1].origin} – {item.segments[1].destination}
            </span>
            <span className="data">
              {timeR.toLocaleTimeString('en-GB')} - {timeEndR.toLocaleTimeString('en-GB')}
            </span>
          </div>
          <div className="row-box">
            <span className="title">В пути</span>
            <span className="data">
              {durationR.getHours()}ч {durationR.getMinutes()}м
            </span>
          </div>
          <div className="row-box">
            <span className="title">{transfer}</span>
            <span className="data">{item.segments[0].stops.join()}</span>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = () => {
  return {};
};
export default connect(mapStateToProps, actions)(Ticket);
