import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import ApperanceProvider from "./contexts/AppearanceContext.jsx";
import TweetProvider from "./contexts/TweetContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApperanceProvider>
      <TweetProvider>
        <App />
      </TweetProvider>
    </ApperanceProvider>
  </React.StrictMode>
);
