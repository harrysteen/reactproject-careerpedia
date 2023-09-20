import './App.css';
import Home from './pages/Home/Home';
import Trining from './pages/Trining/Trining';
import Contact from './pages/Contact/Contact';
import Pricing from './pages/pricing/Pricing';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          
          <Route path='/' element={<Home />} />
          <Route path='/Trining' element={<Trining />} />
          <Route path='/Pricing' element={<Pricing />} />
          <Route path='/Contact' element={<Contact />} />
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
