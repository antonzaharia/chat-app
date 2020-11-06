import React, { Component } from "react";
import RegForm from "./RegForm"
import { connect } from "react-redux"
import { Div, Button, Modal, Icon, Text } from "atomize";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "",
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
      event.persist()
    event.preventDefault()
    const { onClose } = this.props;
    this.setState({ isSubmitting: true });
    setTimeout(() => {
      this.setState({ isSubmitting: true });
      onClose();
    }, 600);
    this.props.test({name: this.state.name, email: this.state.email, password: this.state.password})
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
          Signup.
        </Text>
        <RegForm signup={true} onChange={this.onChange}/>
        <Div d="flex" justify="flex-end">
          <Button
            onClick={onClose}
            bg="gray200"
            textColor="medium"
            m={{ r: "1rem" }}
          >
            Cancel
          </Button>
          <Button
            isLoading={isSubmitting}
            onClick={this.onClickSubmit}
            bg={isSubmitting ? "info300" : "info700"}
          >
            Yes, Submit
          </Button>
        </Div>
      </Modal>
    );
  }
}
const mapDispatchToProps = dispatch => ({
    test: user => dispatch({type: "TEST", payload: user})
})
export default connect(null, mapDispatchToProps)(Signup)