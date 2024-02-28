
import Pomodoro from "./components/Pomodoro";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";


const App = () => {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/pomodoro"  element={<Pomodoro />} />

    </Routes>
    </BrowserRouter>
   
  
  );
};

export default App;
