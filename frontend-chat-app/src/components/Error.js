import React from "react";
import { Notification, Icon } from "atomize";
import { connect } from 'react-redux'

function Error({showError, content, removeErrors}) {
  return (
    <Notification
      bg="danger700"
      isOpen={showError}
      onClose={removeErrors}
      prefix={
        <Icon name="CloseSolid" color="white" size="18px" m={{ r: "0.5rem" }} />
      }
    >
      {content}
    </Notification>
  );
}
const mapDispatchToProps = dispatch => ({
    removeErrors: () => dispatch({type: "REMOVE_ERRORS"})
})
export default connect(null, mapDispatchToProps)(Error)