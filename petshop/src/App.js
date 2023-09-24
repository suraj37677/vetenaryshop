import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import Home from './pages/Home';
import Appointement from './pages/Appointement';
import Service from './pages/Service';
import Blog from './pages/Blog';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <div className="App">
      <Hero/>
      <Router>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/appointment' element={<Appointement/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/blog' element={<Blog/>}/>
        </Routes>
      </Router>
  </div>
  );
}

export default App;
