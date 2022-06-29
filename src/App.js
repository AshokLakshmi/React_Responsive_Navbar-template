import React from "react";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import Routers from "./routers/Routers";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <Routers />
      </div>
      <Footer />
    </div>
  );
}

export default App;
