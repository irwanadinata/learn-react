import React from "react";
import { Buttton } from "../components/button";
import Input from "../components/input";

const Login = () => {
  return (
    <>
      <form action={handleLogin()}>
        <Input label="Username" id="username" name="username" type="text" />
        <Input label="Password" id="password" name="password" type="password" />
        <Buttton label="Login" type="submit" />
      </form>
    </>
  );
};
export default Login;
