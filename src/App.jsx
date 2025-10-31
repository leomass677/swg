import "./App.css";
import Header from "./Pages/Header";
import Home from "./Pages/Home";

function App() {
  return (
    <main className="max-w-screen mx-auto">
      <Header className="sticky top-0" />
      <Home />
    </main>
  );
}

export default App;
