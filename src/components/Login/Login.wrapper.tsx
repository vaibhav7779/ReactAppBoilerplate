import * as React from "react";

type WrapperProps = {
  title: string,
}

const LoginWrapper = ({ title = "Login tsx"}: WrapperProps) => <div>{title}</div>
export default LoginWrapper