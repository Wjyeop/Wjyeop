import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu";
import Dashboard from "./pages/Dashboard";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import './App.scss';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path='/' element ={<Dashboard/>}/>                
          <Route path='/skills' element ={<Skills/>}/>      
          <Route path='/projects' element ={<Projects/>}/>                          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
