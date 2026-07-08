import { LangProvider } from './context/LangContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <LangProvider>
      <div className="min-h-screen bg-gray-950">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Education />
          <Experience />
          <Projects />
        </main>
        <Footer />
      </div>
    </LangProvider>
  );
}