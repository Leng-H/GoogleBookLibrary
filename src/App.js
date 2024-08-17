import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div id="app">
      {/* NavBar */}
      <Navbar />

      {/* Content */}
      <section id="main-content">
        <Home />
      </section>

      {/* Footer */}
      <section id="footer">Footer</section>
    </div>
  );
}

export default App;
