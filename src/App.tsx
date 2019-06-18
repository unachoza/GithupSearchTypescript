import React from "react";
import Search from "./Components/Search";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Search />
      <Footer />
    </div>
  );
};

export default App;
