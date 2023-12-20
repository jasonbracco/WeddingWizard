import { useState, useEffect, createContext } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Board from './Board';
import CreateNewCard from './CreateNewCard'
import './App.css';

const CardContext = createContext([]);
const CostContext = createContext();

export { CardContext };
export { CostContext };

function App() {

  const [allCards, setAllCards] = useState([])
  const [totalCost, setTotalCost] = useState(0)

  const cardContextValue = { allCards, setAllCards }
  const costContextValue = { totalCost, setTotalCost }

  const todaysDate = new Date()
  const weddingDate = new Date("May 31, 2025 EST")
  const timeUntilWedding = weddingDate.getTime() - todaysDate.getTime()
  const daysUntilWedding = Math.ceil(timeUntilWedding/(1000 * 60 * 60 * 24))

  useEffect(() => {
    fetch('/getallcards')
    .then(response => response.json())
    .then(data => {
      setAllCards(data);
      console.log(data)
      const numericCost = (data.map(card => parseFloat(card.cost_associated)).reduce((accumulator, currentValue) => accumulator + currentValue))
      setTotalCost(numericCost.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      }));
    })
    .catch(error => {
      console.error('Error fetching cards:', error)
    });
    setTotalCost(allCards.map(card => card.cost))

  }, [])


  return (
    <Router>
      <div className="App">
        <div className="navbar">
          <NavBar />
        </div>
        <br></br>
        <CardContext.Provider value={cardContextValue}>
        <CostContext.Provider value={costContextValue}>
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
                    <strong>Total Cost: {totalCost}</strong>
                  </div>
                  <div className="countdown-clock">
                    <strong>Days Until Wedding: {daysUntilWedding}</strong>
                  </div>
                  <div className="filter">
                    <strong>Filter By Category:</strong>
                  </div>
                </div>
                <div>
                  <Board/>
                </div>
              </div>
            }
          />
        </Routes>
        </CostContext.Provider>
        </CardContext.Provider>
      </div>
    </Router>
  );
}

export default App;
