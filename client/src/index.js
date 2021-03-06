import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";

import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from './routes/Dashboard';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
      <Routes>
          <Route path="" element={<Login />} />
          {/* <Route path="dashboard" element={<Dashboard />} />
          <Route path="register" element={<App />} /> */}
          <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
  </BrowserRouter>,
rootElement
);