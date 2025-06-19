import Aboutme from "./Components/About/Aboutme"
import Aman from "./Components/Amanabout/Aman"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Mywork from "./Components/Mywork/Mywork"
import Navbar from "./Components/Navbar"
import Services from "./Components/Services/Services"

function App() {

  return (
    <div>
      <Navbar/>
      <Aman/>
      <Aboutme/>
      <Services/>
      <Mywork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
