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
        borderColor="info700"
        hoverBorderColor="info900"
        hoverBg="info700"
        hoverTextColor="white"
        w="100%"
        textColor="info700"
      >
        {notification.content}
      </Div>
    </Link>
  );
}
