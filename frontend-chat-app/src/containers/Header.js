import React from "react";
import { Icon, Div, Text, Button } from "atomize";

export default function Header() {
  return (
    <Div m={{t:"30px"}}>
      <Text tag="h1" textSize="display1">
      Welcome to ChatApp <Icon name="Email" size="30px" />
      </Text>
      <br /><br/>
      <Button
        m="0 auto"
        textColor="white"
        bg="info700"
        hoverBg="info900"
        shadow="2"
        hoverShadow="4"
      >
          Login
        </Button>
    </Div>
  );
}
