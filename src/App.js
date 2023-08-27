
import './App.css';
import NavigationBars from './Component/NavigationBars';
import FeaturedPost from './Component/FeaturedPost';
import Footer from './Component/Footer';
import Buttons from './Component/Buttons';
import Home from './Component/Home';
import ReactHooks from './Component/ReactHooks';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
      <>
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<ReactHooks />} />
        <Route path="/nav" element={<NavigationBars />} />
          
        
      </Routes>
    </BrowserRouter> */}

    <BrowserRouter>
    <div className="App">
      <ul className='App-header'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/form">Register Form</Link>
        </li>
        <li>
          <Link to="/nav">Contact Us</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<ReactHooks />} />
        <Route path="/nav" element={<NavigationBars />} />    
      </Routes>
    </div>
    </BrowserRouter>
    
    </>    
  
  );
}

export default App;
