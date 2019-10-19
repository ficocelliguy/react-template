import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logIn } from '../Actions/Actions'

const MainPage = ({ logOut }) => <div>
  <div> ~ Main Page ~ </div>
  <Link to="/" onClick={logOut}>Log Out</Link><br/>
  <Link to="/Map">Map Page</Link>
</div>;

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
});

const mapDispatchToProps = {
  logOut: () => logIn(false)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);