import './App.css';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Temperature from './components/temperature/Temperature.jsx';
import Carbondioxide from './components/carbondioxide/Carbondioxide';
import Metano from './components/metano/Metano';
import Nitrousoxide from './components/nitrousoxide/Nitrousoxide';
import Ghiacciopolare from './components/ghiacciopolare/Ghiacciopolare';
import Footer from './components/footer/Footer';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>

          <Route path='/' element={<Home />} />

          <Route path='/temperature' element={<Temperature />} />

          <Route path='/co2' element={<Carbondioxide />} />

          <Route path='/metano' element={<Metano />} />

          <Route path='/no2' element={<Nitrousoxide />} />

          <Route path='/ghiacciopolare' element={<Ghiacciopolare />} />

        </Routes>

        <Footer />

      </div>
    </Router>
  );
}

export default App;
