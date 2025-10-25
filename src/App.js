import {Routes, Route} from "react-router-dom" 
import SignUp from "./Components/SignUp" 
import Home from "./Components/Home" 
import './App.css';

function App() {
  return (
    <>
    
       <Routes>
        <Route path="/" element={<SignUp/>} ></Route>
       <Route path="/home" element={<Home/>} ></Route>
       
        </Routes>
      
 
 </>
  );
}

export default App;
