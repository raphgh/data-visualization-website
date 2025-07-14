import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar.js';
import Home from './Home';
import About from './About';
import Footer from './Footer';
import './i18n';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
