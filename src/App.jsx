import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Achievements from "./components/Achievements";
import GitHubSection from "./components/GitHubSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";
import { ScrollProgress, ScrollToTop } from "./components/ScrollExtras";
import Loader from "./components/Loader";

function App() {
  return (
    <ThemeProvider>
      <Loader />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Certificates />
        <Achievements />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </ThemeProvider>
  );
}

export default App;
