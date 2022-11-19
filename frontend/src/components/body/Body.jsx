import React from "react";
import { Route, Routes } from "react-router-dom";

import styles from "./body.module.css";
import Home from "../home/Home";
import Login from "../login_register/Login";
import Register from "../login_register/Register";
import Product from "../product/Product";

import Calendar from '../Calendar';
import Success from "../global/modal/success/Success";

const Body = () => {

  return (
    <div className={styles.body}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/producto/:id" element={<Product />}></Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/success" element={< Success />}/>
      </Routes>
    </div>
  );
};

export default Body;
