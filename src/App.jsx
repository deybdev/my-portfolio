import AnimatedBackground from "./components/AnimatedBackground";
import Header from "./components/Header";
import "remixicon/fonts/remixicon.css";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";


function App() {
  return (
    <>
      <AnimatedBackground />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </>
  );
}

export default App;
