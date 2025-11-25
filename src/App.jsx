import "./App.css";
import Header from "./Pages/Header";
import Home from "./Pages/Home";
import Footer from "./Pages/Footer";
import Router from "./Router/Router";

function App() {
  return (
    <main className="max-w-screen mx-auto  ">
      <Header className="sticky top-0" />
      <Router />
      <Footer />
    </main>
  );
}

export default App;
