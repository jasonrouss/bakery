import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./container/Home";
import About from "./container/About";

import Header from "./container/Header";
import Footer from "./container/Footer";
function App() {
  return (
    <div className="bg-slate-100 scroll-smooth">
      <Router>
        <>
       <Header/>

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
