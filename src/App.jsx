import "./App.css";
import About from "./components/about/About";
import Chefs from "./components/chefs/Chefs";
import Contact from "./components/contact/Contact";
import First from "./components/first/First";
import Footer from "./components/footer/Footer";
import Navbars from "./components/navbar2/Navbars";
import Second from "./components/second/Second";
import Third from "./components/third/Third";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <>
      <Navbars />
      <First />
      <Second />
      <Third />
      <Contact />
      <About />
      <Chefs />
      <Footer />
    </>
  );
}

export default App;
