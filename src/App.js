/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Outlet } from "@emotiom/react";
import Navigation from "./Navigation";
import Footer from "./Footer";

function App() {
  return <div className="App">
    <Navigation/>
    <main className="content">
      <Outlet/>
    </main>
    <Footer/>
  </div>;
}

export default App;
