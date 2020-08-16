// List of async actions that are dispatched 

export const newCoin = (coin) => {
  return (dispatch, getState) => {
    // Make async call to database before dispatch
    dispatch({ type: 'CREATE_COIN', coin });
  } 
}
