import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const noteContext = createContext();

const NoteState = (props) => {
  const [emailLog, setEmailLog] = useState();
  const [bookData, setbookData] = useState({});
  // const [userInfo, setUserInfo] = useState();

  // useEffect(async () => {
  //   if (!userInfo) {
  //     const response = await axios.post("/profile");
  //     setUserInfo(response.data);
  //     // axios.get("/profile").then(({ data }) => {
  //     //   setUserInfo(data);
  //     // });
  //   }
  // }, []);
  return (
    <noteContext.Provider
      value={{ bookData, setbookData, emailLog, setEmailLog }}
    >
      {props.children}
    </noteContext.Provider>
  );
};
export default NoteState;
