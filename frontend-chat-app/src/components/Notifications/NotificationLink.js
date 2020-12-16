import React from "react";

import { Div } from "atomize";
import { Link } from "react-router-dom";
import { makeNotificationLink } from "../../helpers";

export default function NotificationLink({ close, user, notification }) {
  return (
    <Link
      onClick={close}
      to={makeNotificationLink(user, notification.conversation_id)}
    >
      <Div
        m="3px 0"
        p="10px"
        border="1px solid"
        borderColor={notification.seen ? "gray" : "info700"}
        hoverBorderColor="info900"
        hoverBg={notification.seen ? "white" : "info700"}
        hoverTextColor={notification.seen ? "black" : "white"}
        w="100%"
        textColor={notification.seen ? "black" : "info700"}
      >
        {notification.seen ? (
          <span className="seen-badge">SEEN </span>
        ) : (
          <span className="new-badge">NEW </span>
        )}
        {notification.content}
      </Div>
    </Link>
  );
}
