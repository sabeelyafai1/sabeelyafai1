import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import GitHubStats from './components/GitHubStats';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <Hero />
      <About />
      <TechStack />
      <GitHubStats />
      <Contact />
    </div>
  );
}

export default App;
