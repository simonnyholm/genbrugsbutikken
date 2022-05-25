import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
