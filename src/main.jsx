import { createRoot } from "react-dom/client";
import RoutingConfig from "./config/RoutingConfig";
import { SearchProvider } from "./context/SearchContext";
import "./index.css";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SearchProvider>
      <RoutingConfig />
    </SearchProvider>
  </StrictMode>,
);
