/** @format */

import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Error from "./components/Error";
import Services from "./components/Services";
import Experience from "./components/Experience";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// google how to use react-loaders
// toastify
function App() {
  return (
    <div className='App'>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/services' element={<Services />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
