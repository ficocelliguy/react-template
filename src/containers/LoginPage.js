import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logIn } from '../Actions/Actions'


const LoginPage = ({loggedIn, logIn}) => {
    if(loggedIn) {
      return <Redirect to="/main" state={{test:"1"}}/>
    }
    else {
      return <div>
        <div>Welcome to Untitled App</div>
        <button onClick={logIn}>Log In</button>
      </div>;
    }
  };

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
});

const mapDispatchToProps = {
  logIn: () => logIn(true)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);