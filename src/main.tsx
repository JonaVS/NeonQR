import "@fontsource/monoton";
import "@fontsource/bakbak-one"
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import Layout from "./components/Layout/Layout";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider resetCSS theme={theme}>
        <Layout>
          <App />
        </Layout>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);