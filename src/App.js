import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import BackgroundSound from "./BackgroundSound";
import './App.css';


function App() {
  return (
    <Router baseName="/shellio">
      <Navbar />
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/about" element={<About />} />
      </Routes>
      
       <Header />
      <BackgroundSound />
    
      <Main />
       <Footer />

      
    </Router>
  );
  }

export default App;
