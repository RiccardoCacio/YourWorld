import './App.css';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Temperature from './components/Temperature/Temperature.jsx';
import Carbondioxide from './components/Carbondioxide/Carbondioxide';
import Methane from './components/Metano/Methane';
import Nitrousoxide from './components/Nitrousoxide/Nitrousoxide';
import PolarIce from './components/PolarIce/Ice';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>

          <Route path='/' element={<Home />} />

          <Route path='/temperature' element={<Temperature />} />

          <Route path='/co2' element={<Carbondioxide />} />

          <Route path='/metano' element={<Methane />} />

          <Route path='/no2' element={<Nitrousoxide />} />

          <Route path='/ghiacciopolare' element={<PolarIce />} />

        </Routes>

        <Footer />

      </div>
    </Router>
  );
}

export default App;
