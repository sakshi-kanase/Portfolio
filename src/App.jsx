import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/layout/Footer";
import BackToTop from "./components/ui/BackToTop";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <main className="overflow-x-hidden pt-[80px]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}

export default App;