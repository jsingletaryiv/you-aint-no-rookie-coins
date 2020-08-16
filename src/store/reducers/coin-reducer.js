const initState = {
  coins: [
    { id: '1', title: '1955 Lincoln Cent (Double-Die)', content: 'This is where all the detialed information will go.' },
    { id: '2', title: '1974 Roosevelt Dime (No Mint Mark)', content: 'This is where all the detialed information will go.' },
    { id: '3', title: '1964 Washington Quarter (RPM)', content: 'This is where all the detialed information will go.' }
  ]
};

const coinReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_COIN':
      console.log('Coin Created', action.coin);
      break;
    case 'UPDATE_COIN':
      console.log('Coin Updated', action.coin);
      break;
    case 'DELETE_COIN':
      console.log('Coin Deleted', action.coin);
      break;
    default:
      // No Default 
  }
  return state;

}

export default coinReducer;
