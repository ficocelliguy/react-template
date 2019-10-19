export default (state = false, { type, isLoggedIn }) => {
  switch (type) {
    case 'LOGGED_IN': {
      return isLoggedIn;
    }
    default: {
      return state;
    }
  }
};
