import React from "react";
import Search from "./Components/Form/Search";
import Header from "./Components/Form/Header";
import Footer from "./Components/Form/Footer";
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
