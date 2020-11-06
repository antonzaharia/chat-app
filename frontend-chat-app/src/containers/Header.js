import React from "react";
import { Icon, Div, Text, Button } from "atomize";
import Login from "../components/Login";
import Signup from "../components/Signup";

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

        <Button
          bg="info700"
          hoverBg="info600"
          m={"0 auto"}
          onClick={() => this.setState({ showLogin: true })}
        >
          Login
        </Button>
        <Button
          bg="info700"
          hoverBg="info600"
          m={"0 auto"}
          onClick={() => this.setState({ showSignup: true })}
        >
          Signup
        </Button>
        <Login
          isOpen={this.state.showLogin}
          onClose={() => this.setState({ showLogin: false })}
        />
        <Signup
          isOpen={this.state.showSignup}
          onClose={() => this.setState({ showSignup: false })}
        />
      </Div>
    );
  }
}

export default Header;
