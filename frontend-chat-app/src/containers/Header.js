import React from "react";
import { Icon, Div, Text, Button } from "atomize";
import { connect } from 'react-redux'
import Login from "../components/Login";
import Signup from "../components/Signup";
import { logout } from "../actions/UserActions";
import Footer from "./Footer"
import RegButons from '../components/RegButons'

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
      <Div m={{ t: "30px" }}>
        <Text tag="h1" textSize="display1">
          Welcome to ChatApp <Icon name="Email" size="30px" />
        </Text>
        <RegButons
          loginClick={() => this.setState({ showLogin: true })}
          signupClick={() => this.setState({ showSignup: true })}
        />
        {!this.props.loggedIn ? "" : <Button
          bg="brand900"
          hoverBg="brand700"
          m={"0 auto"}
          hoverShadow="4"
          onClick={() => this.props.logout()}
        >
          Logout
        </Button>}
        <Login
          isOpen={this.state.showLogin}
          onClose={() => this.setState({ showLogin: false })}
        />
        <Signup
          isOpen={this.state.showSignup}
          onClose={() => this.setState({ showSignup: false })}
        />
        <Footer />
      </Div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})
const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);
