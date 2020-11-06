import React, { Component } from "react";
import { Div, Button, Modal, Icon, Text } from "atomize";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitting: false,
    };
    this.onClickSubmit = this.onClickSubmit.bind(this);
  }
  onClickSubmit() {
    const { onClose } = this.props;
    this.setState({ isSubmitting: true });
    setTimeout(() => {
      this.setState({ isSubmitting: false });
      onClose();
    }, 600);
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
