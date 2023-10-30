
import Landing from "./components/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import People from "./components/People";
import ResponsiveAppBar from "./components/Navbar";

function App() {
  return (
    <>
      
      <Router>
      <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" component={<Landing />} />
          <Route path="/people" element={<People />} />
          {/* <Route path="/about" component={About} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
