import React from "react";
import "./index.css";
import { Header } from "./components/Header";
import "boxicons";
import { BrowserRouter as Router } from "react-router-dom";
import { Pages } from "./components/Pages";
import { DataProvider } from "./context/Dataprovider"
import { Cart } from "./components/Cart";
function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Header />
          <Cart/>
          <Pages />
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
