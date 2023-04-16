import React, { useEffect } from "react";
import "./index.css";
import Layout from "./components/Layouts/layout";
import { Navigate, Route, Router, Routes, useNavigate } from "react-router-dom";
import Book from "./components/pages/book";
import Track from "./components/pages/track";
import Order from "./components/pages/order";
import Login from "./components/pages/login";
import Signup from "./components/pages/signup";
import axios from "axios";
import Map1 from "./components/pages/currentLocationMap";
import Billing from "./components/pages/billing";
import tempCityPassByData from "./Data/tempCityPassByData";
import DamageProtection from "./components/pages/damagePotection";
import Success from "./components/pages/success";
import OrderDetail from "./components/pages/orderDetail";
import Profile from "./components/pages/profile";
import NavTest from "./components/pages/navtest";
import PendingOrders from "./components/pages/pendingOrders";
import PreviousOrders from "./components/pages/previousOrder";
import GoogleMapsDirections from "./components/pages/time";

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
        <Route exact path="/track" element={<Track />} />
        <Route exact path="/billing" element={<Billing />} />
        <Route exact path="/insurance" element={<DamageProtection />} />
        <Route exact path="/orderDetail" element={<OrderDetail />} />
        <Route exact path="/pendingOrders" element={<PendingOrders />} />
        <Route exact path="/previousOrders" element={<PreviousOrders />} />
      </Route>
      <Route exact path="/success" element={<Success />} />
      <Route exact path="/profile" element={<Profile />} />
      <Route
        exact
        path="/map"
        element={<Map1 details={tempCityPassByData} />}
      ></Route>
      <Route exact path="/nav" element={<NavTest />}></Route>
      <Route exact path="/dur" element={<GoogleMapsDirections />}></Route>
    </Routes>
  );
}
