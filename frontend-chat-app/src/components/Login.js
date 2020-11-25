import React, { Component } from "react";
import RegForm from "./RegForm"
import { login } from "../actions/UserActions"
import { Div, Button, Modal, Icon, Text } from "atomize";
import { connect } from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: "",
        password: "",
        isSubmitting: false,
    };
    this.onClickSubmit = this.onClickSubmit.bind(this);
  }
  onChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }
  onClickSubmit = (event) => {
    event.preventDefault()
    const { onClose } = this.props;
    this.setState({ isSubmitting: true});
    setTimeout(() => {
      this.setState({ isSubmitting: false });
      onClose();
    }, 600);
    this.props.login({email: this.state.email, password: this.state.password})
  }
  render() {
    const { isOpen, onClose } = this.props;
    const { isSubmitting } = this.state;
    return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        m={{ y: "4rem", x: { xs: "1rem", lg: "auto" } }}
        rounded="md"
      >
        <Icon
          name="Cross"
          pos="absolute"
          top="1rem"
          right="1rem"
          size="16px"
          onClick={onClose}
          cursor="pointer"
        />
        <Text
          p={{ l: "0.5rem", t: "0.25rem" }}
          textSize="subheader"
          m={{ b: "2rem" }}
        >
          Login.
        </Text>
        <form onSubmit={this.onClickSubmit}>
        <RegForm  onChange={this.onChange}/>
        <Div d="flex" justify="flex-end">
          <Button
            type="reset"
            onClick={onClose}
            bg="gray200"
            textColor="medium"
            m={{ r: "1rem" }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            isLoading={isSubmitting}
            onClick={this.onClickSubmit}
            bg={isSubmitting ? "info300" : "info700"}
          >
            Yes, Submit
          </Button>
        </Div>
        </form>
      </Modal>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
})
export default connect(null, mapDispatchToProps)(Login)