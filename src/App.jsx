import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import First from "./components/first/First";
import Footer from "./components/footer/Footer";
import Navbars from "./components/navbar2/Navbars";
import Second from "./components/second/Second";
import Third from "./components/third/Third";
import Carousels from "./components/carousel/Carousels";

import Forms from "./components/form/Forms";

function App() {
  return (
    <>
      <Navbars />
      <First />
      <Second />
      <Third />
      <Carousels />
      <Contact />
      <About />
      <Forms />
      <Footer />
    </>
  );
}

export default App;
