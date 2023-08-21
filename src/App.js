
import './App.css';
import NavigationBars from './Component/NavigationBars';
import FeaturedPost from './Component/FeaturedPost';
import Footer from './Component/Footer';
import Buttons from './Component/Buttons';

function App() {
  return (
    
    <div className="App">
      <NavigationBars />
      {/* <CustomButtons type ="button" background = "yellow">Github</CustomButtons> */}
       
       <Buttons /> 
       <FeaturedPost />
       <Footer />
    </div>
  );
}

export default App;
