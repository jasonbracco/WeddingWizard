import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Board from './Board';
import CreateNewCard from './CreateNewCard'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="navbar">
          <NavBar />
        </div>
        <br></br>
        <Routes>
          <Route 
            path="/createnew"
            element={
            <div>
              <CreateNewCard />
            </div>}
          />
          <Route 
            path="/"
            element={
              <div className="main-page-container">
                <div className="time-cost-filter-widgets">
                  <div className="total-price">
                    The total price on the board will go here
                  </div>
                  <div className="countdown-clock">
                    The countdown clock will go here
                  </div>
                  <div className="filter">
                    Filter Here
                  </div>
                </div>
                <div className="board-container">
                  <Board />
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
