import React from "react";
import MainLayout from "./MainLayout";
import { BrowserRouter as Router } from "react-router-dom";

const AppShell = () => {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
};

export default AppShell;
