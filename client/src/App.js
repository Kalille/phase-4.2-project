import logo from './logo.svg';
import './App.css';
import Signup from "./components/Signup"
import { BrowserRouter as Router , Route, Routes} from "react-router-dom"

import HomePage from "./components/HomePage"
// import Login from "./components/Login"
import NavBar from "./components/NavBar"


function App() {

 return (
   
  
    
     
       
    <Router>
      <Routes>
        <Route
        index
         path="Homepage"
         element={<HomePage/>} />
        <Route 
        index
         path="Signup" 
         element={<Signup/>} />
      </Routes>
    </Router>
  

    

     
  
   

    
    
  );
}

export default App;
