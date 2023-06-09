import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import NoteState from "./Context/noteContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <NoteState>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </NoteState>
);
