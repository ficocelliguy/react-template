import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logIn } from '../Actions/Actions'

const MapPage = ({ logOut }) => <div>
  <div> ~ Map Display Page ~ </div>
  <Link to="/" onClick={logOut}>Log Out</Link><br/>
  <Link to="/Main">Main Page</Link>
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
)(MapPage);