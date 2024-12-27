import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router, Routes, Route, Switch} from "react-router-dom";
import PDPContent from "./PDPContent";

import Footer from "home/Footer";
const Header = React.lazy(() => import("home/Header"));

import "remixicon/fonts/remixicon.css";
import "./index.scss";



const App = () => (
  <Router>
    <div className=" text-3xl mx-auto max-w-6xl">
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      <div className="my-10">
        <Routes>
          <Route path="/product/:id" element={<PDPContent/>} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)