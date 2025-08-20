import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import reset from "./reset.css";
import { ApiProvider } from "./context/APIContext";
import { ContentProvider } from "./context/ContentContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApiProvider>
    <ContentProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </ContentProvider>
    </ApiProvider>
  </React.StrictMode>
);
