import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import React, { Suspense } from "react";

import "i18next";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Suspense>
      <App />
    </Suspense>
  </BrowserRouter>
);
