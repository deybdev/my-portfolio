import AnimatedBackground from "./components/AnimatedBackground";
import Header from "./components/Header";
import "remixicon/fonts/remixicon.css";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <AnimatedBackground />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
