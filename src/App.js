import './App.scss';
import Login from './components/Login';
import Home from './components/Home';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {

  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>



          <Route index path="/" element={<Login />} />
          
          <Route path="/home" element={<Home />} />

        </Routes>
      
      
      
      </BrowserRouter>

      
      
    </div>
  );
}

export default App;
