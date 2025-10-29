import "./App.css";
import Header from "./Pages/Header";
import { video } from "./assets/video";

function App() {
  return (
    <>
      <h1 className="text-5xl bg-blue-600">Hello World</h1>
      <Header />
      {/* <video src={video.AI_medium} controls width="full" /> */}
    </>
  );
}

export default App;
