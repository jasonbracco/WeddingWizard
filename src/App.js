import NavBar from './NavBar';
import Board from './Board';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
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
  );
}

export default App;
