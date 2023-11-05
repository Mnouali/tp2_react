import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import Slider from './slider/Slider';
// import Join from './Projet/pages/Join';
// import Navabr from './Projet/pages/navabr';
 
import { BrowserRouter,Route,routes } from 'react-router-dom';
 
 

function App() {
  return (
    <BrowserRouter className="App">
     <Slider/>
       {/* <h1>hh</h1>
       <Routes>
       
            <Route path='/' element={ <Navabr/>}></Route>
            <Route path='join' element={<Join/>}/>
       </Routes>
  */}
   
    </BrowserRouter>
  );
}

export default App;
