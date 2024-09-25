import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { InputProvider } from "./context/inputContext.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <InputProvider>
        <App />
      </InputProvider>
    </BrowserRouter>
  </StrictMode>
);
