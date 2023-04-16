import { createContext, useState } from "react";
export const loginContext = createContext();

const LoginState = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <loginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {props.children}
    </loginContext.Provider>
  );
};
export default LoginState;
