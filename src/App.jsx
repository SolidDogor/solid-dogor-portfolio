import Presentation from './components/Presentation/Presentation'
import Jobs from './components/Jobs/Jobs'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import './App.css'

function App() {
  return (
    <div className='container'>
      <Presentation/>
      {/* <Jobs/> */}
      <Projects/>
      <Skills/>
      <About/>
      <Contact/>
    </div>
  )
}

export default App
