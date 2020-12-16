import { Div, Button, SideDrawer, Icon, Text } from "atomize";
import NotificationLink from "./NotificationLink";

export default function BasicSideDrawer({ isOpen, onClose, notifications }) {
  return (
    <SideDrawer isOpen={isOpen} onClose={onClose}>
      <Div d="flex" m={{ b: "1rem" }}>
        <Icon name="AlertSolid" color="warning700" />
        <Text p={{ l: "0.5rem", t: "0.25rem" }}>Notifications</Text>
      </Div>
      <Button
        onClick={onClose}
        bg="gray200"
        textColor="medium"
        m={{ r: "2rem", b: "1rem" }}
      >
        Close
      </Button>
      <Div d="flex" flexDir="column">
        {notifications.map((n) => (
          <NotificationLink notification={n} key={n.id} />
        ))}
      </Div>
    </SideDrawer>
  );
}
