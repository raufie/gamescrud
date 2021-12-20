import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import AddGame from './components/AddGame/AddGame'
import AllGames from './components/AllGames/AllGames'
import { apiUrl } from './config/restUrl';
import './App.css';

function App() {

  return (
    <Router className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddGame isForEdit={false} />} />
        <Route path="/edit/:id/" element={<AddGame isForEdit={true} />} />
        <Route path="/games/:page" element={<AllGames />} />
      </Routes>
    </Router>
  );
}

export default App;
