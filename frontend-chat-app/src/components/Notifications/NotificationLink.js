import React from "react";

import { Div } from "atomize";
import { Link } from "react-router-dom";

export default function NotificationLink({ notification }) {
  return (
    <Link>
      <Div
        m="3px 0"
        p="10px"
        border="1px solid"
        borderColor={notification.seen ? "info700" : "gray"}
        hoverBorderColor="info900"
        hoverBg={notification.seen ? "info700" : "white"}
        hoverTextColor={notification.seen ? "white" : "black"}
        w="100%"
        textColor={notification.seen ? "info700" : "black"}
      >
        {notification.seen ? (
          <span className="new-badge">NEW </span>
        ) : (
          <span className="seen-badge">SEEN </span>
        )}
        {notification.content}
      </Div>
    </Link>
  );
}
