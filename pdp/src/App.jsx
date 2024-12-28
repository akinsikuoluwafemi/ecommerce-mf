import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import MainLayout from "home/MainLayout";


import "remixicon/fonts/remixicon.css";
import "./index.scss";


const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(
  <Router>
    <MainLayout />
  </Router>
);