import React from "react";
import { Icon, Div, Text, Button, Notification } from "atomize";
import { connect } from "react-redux";
import Login from "../components/Login";
import Signup from "../components/Signup";
import { logout } from "../actions/UserActions";
import Conversations from "../components/Conversation/Conversations";
import Footer from "./Footer";
import RegButons from "../components/RegButons";
import BasicSideDrawer from "../components/Notifications/BasicSideDrawer";
import { Link } from "react-router-dom";

import Conversation from "../components/Conversation/Conversation";
import { Route } from "react-router-dom";
import ConversationForm from "../components/Conversation/ConversationForm";
import { makeNotificationNumber } from "../helpers";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: false,
      showSignup: false,
      showConversationForm: false,
      showSideDrawer: false,
      error: false,
    };
  }
  handleShowConversationForm = () => {
    if (this.props.user) {
      this.setState({ showConversationForm: !this.state.showConversationForm });
    } else {
      this.setState({ error: true });
    }
  };

  render() {
    return (
      <Div w="100%">
        <Div d="flex" w="100%" p="10px">
          <Notification
            isOpen={this.props.errors}
            m={{ r: "0.5rem" }}
            hoverBg="danger600"
            bg="danger700"
            onClose={this.props.removeErrors}
          >
            {this.props.errors
              ? this.props.errors.map((error) => <p>{error}</p>)
              : ""}
          </Notification>
          <Text tag="h1" w="100%">
            ChatApp <Icon name="Email" size="20px" />
          </Text>
          {this.props.loggedIn ? (
            ""
          ) : (
            <RegButons
              loginClick={() => this.setState({ showLogin: true })}
              signupClick={() => this.setState({ showSignup: true })}
            />
          )}
          {!this.props.loggedIn ? (
            ""
          ) : (
            <Div d="flex" pos="fixed" right="0px" p="10px">
              <Button
                prefix={
                  <Icon
                    name="UserSolid"
                    size="16px"
                    color="white"
                    m={{ r: "0.5rem" }}
                  />
                }
                bg="warning700"
                hoverBg="warning800"
                rounded="circle"
                p={{ r: "1.5rem", l: "1rem" }}
                shadow="3"
                hoverShadow="4"
                onClick={() => this.setState({ showSideDrawer: true })}
              >
                {makeNotificationNumber(this.props.user)} | Notification
                {makeNotificationNumber(this.props.user) === 1 ? "" : "s"}
              </Button>
              <Button
                bg="brand900"
                hoverBg="brand700"
                m={"0 auto"}
                hoverShadow="4"
                rounded="circle"
                onClick={() => this.props.logout()}
              >
                <Link className="logout-btn" to="/">
                  Logout
                </Link>
              </Button>
            </Div>
          )}
          <Login
            isOpen={this.state.showLogin}
            onClose={() => this.setState({ showLogin: false })}
          />
          <Signup
            isOpen={this.state.showSignup}
            onClose={() => this.setState({ showSignup: false })}
          />
        </Div>
        <Button m="0 auto" onClick={this.handleShowConversationForm}>
          New Conversation
        </Button>
        {this.state.showConversationForm ? <ConversationForm /> : ""}
        <br />
        {this.state.error && !this.props.user ? (
          <Div textAlign="center" textColor="warning700">
            <p>You must be logged in!</p>
          </Div>
        ) : (
          ""
        )}
        {this.props.conversationErrors ? (
          <Div textAlign="center" textColor="warning700">
            <p>{this.props.conversationErrors}</p>
          </Div>
        ) : (
          ""
        )}
        <Div d="flex">
          <Conversations conversations={this.props.conversations} />
          <Route
            path="/users/:userId/conversations/:id"
            render={(routerProps) => <Conversation {...routerProps} />}
          />
        </Div>
        <BasicSideDrawer
          isOpen={this.state.showSideDrawer}
          onClose={() => this.setState({ showSideDrawer: false })}
          notifications={
            this.props.user
              ? this.props.user.notifications
              : [{ id: "x", content: "No Notifications" }]
          }
        />
        <Footer />
      </Div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  removeErrors: () => dispatch({ type: "REMOVE_ERRORS" }),
});
const mapStateToProps = (state) => ({
  loggedIn: state.user.loggedIn,
  errors: state.user.errors,
  user: state.user.currentUser,
  conversations: state.conversations.userConversations,
  conversationErrors: state.conversations.errors,
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
