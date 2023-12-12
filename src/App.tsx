import Footer from "./Components/Footer"
import Header from "./Components/Header"
import About from "./Sections/About"
import Contact from "./Sections/Contact"
import Home from "./Sections/Home"
import Projects from "./Sections/Projects"



function App() {
  

  return (
    <>
      <Header/>
      <div className="flex flex-col gap-24 w-[min(1100px,_100%)] mx-auto">
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
      </div>
      <Footer/>
    </>
  )
}

export default App
