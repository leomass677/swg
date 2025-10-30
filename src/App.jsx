import "./App.css";
import Header from "./Pages/Header";
import Home from "./Pages/Home";

function App() {
  return (
    <main>
      <Header className="sticky top-0" />
      <Home />
    </main>
  );
}

export default App;
