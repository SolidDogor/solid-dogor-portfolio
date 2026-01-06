import Presentation from './components/Presentation/Presentation';
import Jobs from './components/Jobs/Jobs';
import Projects from './components/Projects/Projects';
import Technologies from './components/Technologies/Technologies';
import About from './components/About/About';
import './App.css';

function App() {
  return (
    <div className="container">
      <Presentation />
      {/* <Jobs/> */}
      <Projects />
      <Technologies />
      <About />
    </div>
  );
}

export default App;
