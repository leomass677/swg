import "./App.css";
import Header from "./Pages/Header";
import Home from "./Pages/Home";
import Footer from "./Pages/Footer";

function App() {
  return (
    <main className="max-w-screen mx-auto">
      <Header className="sticky top-0" />
      <Home />
      <Footer />
    </main>
  );
}

export default App;
