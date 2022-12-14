import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChargersPage } from "./chargers";
import reportWebVitals from "./reportWebVitals";
import { Header } from "./components/Layout/Header";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { Route, BrowserRouter, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route path="/" element={<ChargersPage />} />
        </Routes>
      </ThemeProvider>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
