
import './App.css';
import{Route, Routes} from "react-router-dom";
import Home from "./routes/Home";
import Contact from './routes/Contact';
import Serivce from './routes/Service';
import About from './routes/About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/about' element={ <About/>}/>
        <Route path='/contact' element={ <Contact/>}/>
        <Route path='/service' element={ <Serivce/>}/>
      </Routes>

      
     
    </div>
  );
}

export default App;
