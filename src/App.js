import './App.css';
import CarCards from './components/CarCards';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';


function App() {


  return (
    <div className='App'>

      <Navbar />
      <Routes>
        <Route
          path={'/:page'}
          element={<CarCards />}
        />
      </Routes>
    </div>
  );
}

export default App;
