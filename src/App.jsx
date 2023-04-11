import React from "react";
import Layout from "./components/Layouts/layout";
import { Route, Routes } from "react-router-dom";
import Book from "./components/pages/book";
import Track from "./components/pages/track";
import "./index.css";
import Order from "./components/pages/order";
import initialDetails from "./Data/temptrack.js";
import SearchList from "./components/pages/searchList";
import Login from "./components/pages/login";
import Signup from "./components/pages/signup";
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:4000";
axios.defaults.withCredentials = true;

export default function () {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route path="/" element={<Layout />}>
        <Route exact path="/book" element={<Book />} />
        <Route exact path="/order" element={<Order />} />
        <Route
          exact
          path="/track"
          element={<Track details={initialDetails} />}
        />
        {/* <Route exact path="/success" element={<Success />} /> */}
        <Route exact path="/list" element={<SearchList />} />
      </Route>
    </Routes>
  );
}