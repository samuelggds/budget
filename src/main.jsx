import React from "react";
import ReactDOM from "react-dom";
import { Globalstyles } from "./styles/globalStyles.js";
import Rotas from "./routes/routes.jsx";
import { GlobalProvider } from "./hooks/globalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalProvider>
      <Globalstyles />
      <Rotas />
    </GlobalProvider>
  </React.StrictMode>
);
