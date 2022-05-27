import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import UseDarkMode from "./UseDarkMode";

function App() {
  const { theme, toggleTheme } = UseDarkMode();
  return (
    <div
      style={{
        background: theme === "dark" ? "#000" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
      }}
      className="App"
    >
      <div>
        {" "}
        <button type="button" onClick={toggleTheme}>
          Skift farvetema
        </button>
      </div>
      <Navigation />
      <main className="content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;
