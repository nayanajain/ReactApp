
import './App.css';
import NavigationBars from './Component/NavigationBars';
import FeaturedPost from './Component/FeaturedPost';
import Footer from './Component/Footer';
import Buttons from './Component/Buttons';
import ReactHooks from './Component/ReactHooks';

function App() {
  return (
    
    <div className="App">
      <ReactHooks />
      <NavigationBars /> 
       <Buttons /> 
       <FeaturedPost />
       <Footer />
    </div>
  );
}

export default App;
