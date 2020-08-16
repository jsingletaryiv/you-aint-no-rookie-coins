const initState = {
  coins: [
    { id: '1', title: '1955 Lincoln Cent (Double-Die)', content: 'This is where all the detialed information will go.' },
    { id: '2', title: '1974 Roosevelt Dime (No Mint Mark)', content: 'This is where all the detialed information will go.' },
    { id: '3', title: '1964 Washington Quarter (RPM)', content: 'This is where all the detialed information will go.' }
  ]
};

const coinReducer = (state = initState, action) => {
  return state;

}

export default coinReducer;
