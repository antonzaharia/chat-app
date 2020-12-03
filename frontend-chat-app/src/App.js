import React, { Component } from "react";
import { Container } from "atomize";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { checkLoggedInStatus } from "./actions/UserActions";
import MainContainer from "./containers/Container";

class App extends Component {
  componentDidMount() {
    this.props.checkLoggedInStatus()
  }
  render() {
    return (
      <Container d="flex" justify="center">
        <Switch>
          <Route path="/" component={MainContainer}></Route>
        </Switch>
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.user.currentUser,
  loggedIn: state.user.loggedIn,
  errors: state.user.errors
});
const mapDispatchToProps = (dispatch) => ({
  checkLoggedInStatus: () => dispatch(checkLoggedInStatus())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
