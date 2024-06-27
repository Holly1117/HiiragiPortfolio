import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { CustomCSS } from "./styles/CustomCSS";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={CustomCSS.Theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
reportWebVitals();
