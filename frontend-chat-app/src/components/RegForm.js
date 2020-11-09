import React from "react";
import { Input, Icon } from "atomize";

export default function RegForm({ signup, onChange }) {
  return (
    <>
      {!signup ? "" : <Input
        onChange={onChange}
        placeholder="Full Name"
        p={{ x: "2.5rem" }}
        name="name"
        prefix={
          <Icon
            name="UserSolid"
            color="warning800"
            size="16px"
            cursor="pointer"
            pos="absolute"
            top="50%"
            left="0.75rem"
            transform="translateY(-50%)"
          />
        }
      />}
      <Input
        onChange={onChange}
        placeholder="Email"
        p={{ x: "2.5rem" }}
        type="email"
        name="email"
        prefix={
          <Icon
            name="Email"
            color="danger800"
            size="16px"
            cursor="pointer"
            pos="absolute"
            top="50%"
            left="0.75rem"
            transform="translateY(-50%)"
          />
        }
      />
      <Input
        onChange={onChange}
        placeholder="Password"
        p={{ x: "2.5rem" }}
        type="password"
        name="password"
        prefix={
          <Icon
            name="EyeSolid"
            color="danger800"
            size="16px"
            cursor="pointer"
            pos="absolute"
            top="50%"
            left="0.75rem"
            transform="translateY(-50%)"
          />
        }
      />
      {!signup ? "" : <Input
        onChange={onChange}
        placeholder="Re-type password"
        p={{ x: "2.5rem" }}
        type="password"
        name="password_confirmation"
        prefix={
          <Icon
            name="EyeSolid"
            color="danger800"
            size="16px"
            cursor="pointer"
            pos="absolute"
            top="50%"
            left="0.75rem"
            transform="translateY(-50%)"
          />
        }
      />}
    </>
  );
}
