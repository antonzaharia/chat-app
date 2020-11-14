import React from "react";
import { Button } from "atomize";

export default function RegButons({loginClick, signupClick}) {
  return (
    <div>
      <Button
        bg="info700"
        hoverBg="info600"
        m={"0 auto"}
        onClick={loginClick}
        hoverShadow="4"
      >
        Login
      </Button>
      <Button
        bg="info700"
        hoverBg="info600"
        m={"0 auto"}
        hoverShadow="4"
        onClick={signupClick}
      >
        Signup
      </Button>
    </div>
  );
}
