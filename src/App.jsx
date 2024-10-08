
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'

function App() {

  return (
    <>
      <NavBar></NavBar>
      <Home></Home>
      <About></About>
      <Portfolio></Portfolio>
      <Skills></Skills>
      <Contact></Contact>
    </>
  )
}

export default App
