import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import "remixicon/fonts/remixicon.css";

const AppShell = React.lazy(() => import("home/AppShell"));

const App = () => {
  const rootElement = document.getElementById("app");
  if (!rootElement) throw new Error("Failed to find the root element");

  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.Suspense fallback="Loading...">
      <AppShell />
    </React.Suspense>
  );
};

export default App;
