export const actionHandleCheckboxAll = (checked) => ({ type: 'CHB_All', payload: checked });

export const moreTickets = () => ({ type: 'MORE', payload: 5 });

export const sortBottom = (checked) => ({ type: 'SORT_BOTTOM', payload: checked });
export const sortFast = (checked) => ({ type: 'SORT_FAST', payload: checked });

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
    await fetch('https://front-test.dev.aviasales.ru/search')
      .then((data) => {
        return data.json();
      })
      .then((value) => {
        const searchTickets = () => {
          fetch(`https://front-test.dev.aviasales.ru/tickets?searchId=${value.searchId}`)
            .then((response) => {
              if (!response.ok) {
                throw new Error('Vse ploxo');
              }
              return response.json();
            })
            .then((dat) => {
              if (!dat.stop) {
                console.log(dat);
                searchTickets();
              }
              console.log(dat);
              dispatch({
                type: 'LOAD_SEARCHID',
                payload: dat,
                loading: true,
              });
            });
        };
        searchTickets();
      });
  };
};
