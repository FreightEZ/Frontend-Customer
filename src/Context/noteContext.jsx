import { createContext, useState } from "react";
export const noteContext = createContext();

const NoteState = (props) => {
    const [bookData, setbookData]= useState({});
    return (
      <noteContext.Provider value={{ bookData, setbookData }}>
        {props.children}
      </noteContext.Provider>
    );
  };
  export default NoteState;