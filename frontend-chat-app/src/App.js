import React, { Component } from "react";
import { Container } from "atomize";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { checkLoggedInStatus } from "./actions/UserActions";
import Header from "./containers/Header";
import { ActionCable } from 'actioncable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    }
    this.cable = ActionCable.createConsumer('ws://localhost:3000/cable')
  }
  
  componentDidMount() {
    this.props.checkLoggedInStatus()
    this.fetch
    this.createSubscription()
  }

  fetchMessages = () => {
    fetch('http://localhost:3000/messages')
      .then(res => res.json())
      .then(messages => this.setState({ messages: messages });
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
  errors: state.user.errors
});
const mapDispatchToProps = (dispatch) => ({
  checkLoggedInStatus: () => dispatch(checkLoggedInStatus()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
