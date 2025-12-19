import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import './index.css'

function App() {
  return (
    <div className="app">
      <Home />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  )
}

export default App
