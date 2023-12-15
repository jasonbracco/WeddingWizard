import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Board from './Board';
import CreateNewCard from './CreateNewCard'
import './App.css';

function App() {

  const [allCards, setAllCards] = useState([])

  const todaysDate = new Date()
  const weddingDate = new Date("May 31, 2025 EST")
  const timeUntilWedding = weddingDate.getTime() - todaysDate.getTime()
  const daysUntilWedding = Math.ceil(timeUntilWedding/(1000 * 60 * 60 * 24))

  useEffect(() => {
    fetch('/getallcards')
    .then(response => response.json())
    .then(data => {
      setAllCards(data);
    })
    .catch(error => {
      console.error('Error fetching cards:', error)
    });
  }, [])

  console.log(allCards)
  
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
              <div className>
                <div className="time-cost-filter-widgets">
                  <div className="total-price">
                    <strong>The total price on the board will go here</strong>
                  </div>
                  <div className="countdown-clock">
                    <strong>Days Until Wedding: {daysUntilWedding}</strong>
                  </div>
                  <div className="filter">
                    <strong>Filter Here</strong>
                  </div>
                </div>
                <div>
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
