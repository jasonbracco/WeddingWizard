import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Board from './Board';
import CreateNewCard from './CreateNewCard'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <CreateNewCard />
        <br></br>
        <div className="time-cost-widgets">
          <div className="total-price">
            The total price on the board will go here
          </div>
          <div className="countdown-clock">
            The countdown clock will go here
          </div>
        </div>
        <Board />
        <br></br>
      </div>
    </Router>
  );
}

export default App;
