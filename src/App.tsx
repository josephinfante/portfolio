import Footer from './components/Footer'
import Header from './components/Header'
import About from './pages/About'
import Equikly from './pages/Equikly'
import Home from './pages/Home'
import { useApp } from './hooks/useApp'

function App() {
  const { handleSwitchTheme } = useApp()
  
  return (
    <>
      <Header handleSwitchTheme={handleSwitchTheme}/>
      <section>
        <Home />
        <About />
        <div id='projects'>
          <Equikly />
        </div>
      </section>
      <Footer />
    </>
  )
}

export default App
