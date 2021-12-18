import './App.scss';
import Login from './components/Login';
import Home from './components/Home';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import SignUp from './components/SignUp';

function App() {

  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>



          <Route index path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          
        </Routes>
      
      
      
      </BrowserRouter>

      
      
    </div>
  );
}

export default App;
