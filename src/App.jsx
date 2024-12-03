import { useState } from "react";
import Navbar from "./components/Navbar";
import NewsList from "./components/NewslIST.JSX";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";

function App() {
  const [category, setCategory] = useState("home");

  return (
    <>
      <Navbar setCategory={setCategory} />
      <NewsList category={category} />
      <Footer />
    </>
  );
}

export default App;
