import React from "react";
import { useState } from 'react'
import { Notification, Icon } from "atomize";
import { connect } from 'react-redux'

function Error({content}) {
    const[show, setShow] = useState(true)
  return (
    <Notification
      bg="danger700"
      isOpen={show}
      onClose={() => setShow(false)}
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