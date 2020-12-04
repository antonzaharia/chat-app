import React, { Component } from "react";
import { Container } from "atomize";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { checkLoggedInStatus } from "./actions/UserActions";
import MainContainer from "./containers/Container";
import { loadConversations } from "./actions/ConversationActions";

class App extends Component {
  componentDidMount() {
    let user = this.props.user
    this.props.checkLoggedInStatus()
    user ? this.props.loadConversations(user.id) : console.log("no user")
  }
  componentDidUpdate() {
    let user = this.props.user
    user ? this.props.loadConversations(user.id) : console.log("no user")
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
  checkLoggedInStatus: () => dispatch(checkLoggedInStatus()),
  loadConversations: userId => dispatch(loadConversations(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
