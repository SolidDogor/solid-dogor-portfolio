import Header from './components/Header/Header'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import './App.css'

function App() {
  return (
    <div className='container'>
      <Header/>
      <Projects/>
      <Skills/>
      <About/>
      <Contact/>
    </div>
  )
}

export default App
