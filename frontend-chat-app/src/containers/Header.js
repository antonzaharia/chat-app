import React from "react";
import { Icon, Div, Text, Button, Notification } from "atomize";
import { connect } from "react-redux";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Content from "../components/Content";
import { logout } from "../actions/UserActions";
import Conversations from "../components/Conversations"
import Footer from "./Footer";
import RegButons from "../components/RegButons";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: false,
      showSignup: false,
    };
  }

  render() {
    return (
      <Div d="flex">
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
        <Text tag="h1" textSize={{ xs: "body", md: "display1" }} w={{xs: "100px", md: "180px"}} pos="fixed" left="10px">
          Welcome to ChatApp <Icon name="Email" size={{ xs: "15px", md: "30px"}} />
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
              <Text m="8px">{this.props.user.name}</Text>
              <Button
              bg="brand900"
              hoverBg="brand700"
              m={"0 auto"}
              hoverShadow="4"
              onClick={() => this.props.logout()}
            >
              Logout
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
        {this.props.user && this.props.user.conversations ? <Conversations conversations={this.props.user ? this.props.user.conversations : ["No Conversations"]}/> : ""}
        {/* <Content /> */}
        <Footer />
      </Div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  removeErrors: () => dispatch({ type: "REMOVE_ERRORS" })
});
const mapStateToProps = (state) => ({
  user: state.user.currentUser,
  loggedIn: state.user.loggedIn,
  errors: state.user.errors
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
