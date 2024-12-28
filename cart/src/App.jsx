import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import "remixicon/fonts/remixicon.css";
import "./index.scss";


import MainLayout from "home/MainLayout";

const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(
  <Router>
    <MainLayout />
  </Router>
);