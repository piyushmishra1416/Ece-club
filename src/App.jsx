//import Card from "./layouts/Crousal/Card"
import Landing from "./components/Landing"
import Testimonials from "./layouts/Crousal/Testimonials"
import { NavBar } from "./layouts/Navbar"
import reviews from "./data"
//import Slider from "./layouts/Crousal/Slider";



function App() {
  

  return (
    <>
    <NavBar/>
    <Testimonials reviews={reviews}/>
    <Landing />
  
    </>
  )
}

export default App
