import React from "react";

import { Div } from "atomize";

export default function NotificationLink({ notification }) {
  return <Div w="100%">{notification.content}</Div>;
}
