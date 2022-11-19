export const actionHandleCheckboxAll = (checked) => ({ type: 'CHB_All', payload: checked });

export const moreTickets = () => ({ type: 'MORE', payload: 5 });
export const up = (checked) => ({ type: 'UP', payload: checked });
export const sortBottom = (checked) => ({ type: 'SORT_BOTTOM', payload: checked });

export const actionHandleCheckboxOne = (checked, state) => {
  return async (dispatch) => {
    let ticket = state.filter((item) => {
      if (item.segments[0].stops.length < 2 && item.segments[0].stops.length > 0) {
        return true;
      }
    });
    if (!checked) {
      ticket = [];
    }

    dispatch({
      type: 'CHB1',
      payload: checked,
      payload1: ticket,
    });
  };
};
export const actionHandleCheckboxTwo = (checked, state) => {
  return async (dispatch) => {
    let ticket = state.filter((item) => {
      if (item.segments[0].stops.length > 1 && item.segments[0].stops.length < 3) {
        return true;
      }
    });
    if (!checked) {
      ticket = [];
    }

    dispatch({
      type: 'CHB2',
      payload: checked,
      payload1: ticket,
    });
  };
};
export const actionHandleCheckboxThree = (checked, state) => {
  return async (dispatch) => {
    let ticket = state.filter((item) => {
      if (item.segments[0].stops.length > 2) {
        return true;
      }
    });
    if (!checked) {
      ticket = [];
    }

    dispatch({
      type: 'CHB3',
      payload: checked,
      payload1: ticket,
    });
  };
};
export const actionHandleCheckboxNull = (checked, state) => {
  return async (dispatch) => {
    let ticket = state.filter((item) => {
      if (item.segments[0].stops.length < 1) {
        return true;
      }
    });
    if (!checked) {
      ticket = [];
    }

    dispatch({
      type: 'CHB_N',
      payload: checked,
      payload1: ticket,
    });
  };
};

export const actionGetSearchId = () => {
  return async (dispatch) => {
    const response = await fetch('https://front-test.dev.aviasales.ru/search');
    const jsonData = await response.json();
    const responseTickets = await fetch(`https://front-test.dev.aviasales.ru/tickets?searchId=${jsonData.searchId}`);
    const Tickets = await responseTickets.json();

    dispatch({
      type: 'LOAD_SEARCHID',
      payload: Tickets,
    });
  };
};
