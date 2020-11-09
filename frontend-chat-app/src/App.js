import React, { Component } from "react";
import { Container } from "atomize";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { checkLoggedInStatus } from "./actions/UserActions";
import Header from "./containers/Header";
class App extends Component {
  componentDidMount() {
    checkLoggedInStatus()
  }
  render() {
    return (
      <Container d="flex" justify="center">
        <Switch>
          <Route path="/" component={Header}></Route>
        </Switch>
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.user.currentUser,
  loggedIn: state.user.loggedIn,
});
const mapDispatchToProps = (dispatch) => ({
  checkLoggedInStatus: (data) => dispatch(checkLoggedInStatus(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
