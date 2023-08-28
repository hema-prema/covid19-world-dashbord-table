import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./header";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Header />
    <div className="app">
      <App />
    </div>
  </StrictMode>
);
