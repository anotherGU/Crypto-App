import "./App.css";
import React from "react";
import { CryptoContextProvider } from "./context/crypto-context";
import AppLayout from "./components/layout/AppLayout";

function App() {
  return (
    <CryptoContextProvider>
      <AppLayout />
    </CryptoContextProvider>
  );
}

export default App;
