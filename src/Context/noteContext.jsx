import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const noteContext = createContext();

const NoteState = (props) => {
  const [bookData, setbookData] = useState({});
  const [userInfo, setUserInfo] = useState(null);
  // useEffect(() => {
  //   if (!userInfo) {
  //     axios.get("/profile").then(({ data }) => {
  //       setUserInfo(data);
  //     });
  //   }
  // }, []);
  return (
    <noteContext.Provider value={{ bookData, setbookData, userInfo }}>
      {props.children}
    </noteContext.Provider>
  );
};
export default NoteState;
