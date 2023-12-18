import { useContext } from "react";
import { CardContext } from "./App";
import ToDoColumn from "./ToDoColumn";
import NotStartedColumn from "./NotStartedColumn";
import InProgressColumn from "./InProgressColumn";
import DoneColumn from "./DoneColumn";

function Board() {
  const { allCards } = useContext(CardContext);

  console.log(allCards)

  const notStartedCards = allCards.filter((card) => card.status === "Not Started");
  const toDoCards = allCards.filter((card) => card.status === "Next To Do");
  const inProgressCards = allCards.filter((card) => card.status === "In Progress");
  const doneCards = allCards.filter((card) => card.status === "Done");

  console.log(toDoCards)
  const notStartedCost = notStartedCards
    .map((card) => parseFloat(card.cost_associated))
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    .toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

  const toDoCost = toDoCards
    .map((card) => parseFloat(card.cost_associated))
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    .toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

  const inProgressCost = inProgressCards
    .map((card) => parseFloat(card.cost_associated))
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    .toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

  const doneCost = doneCards
    .map((card) => parseFloat(card.cost_associated))
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    .toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

  return (
    <div>
      <div className="row">
        <div className="card-column">
          <h2 className="column-header">Not Started</h2>
          <div className="scroll-column">
            <NotStartedColumn cards={notStartedCards} />
          </div>
          <div className="column-price">Total Price in this column is: {notStartedCost}</div>
          <br></br>
          <br></br>
        </div>
        <div className="card-column">
          <h2 className="column-header">Next To Do</h2>
          <div className="scroll-column">
            <ToDoColumn cards={toDoCards} />
          </div>
          <div className="column-price">Total Price in this column is: {toDoCost}</div>
          <br></br>
          <br></br>
        </div>
        <div className="card-column">
          <h2 className="column-header">In Progress</h2>
          <div className="scroll-column">
            <InProgressColumn cards={inProgressCards} />
          </div>
          <div className="column-price">Total Price in this column is: {inProgressCost}</div>
          <br></br>
          <br></br>
        </div>
        <div className="card-column">
          <h2 className="column-header">Done</h2>
          <div className="scroll-column">
            <DoneColumn cards={doneCards} />
          </div>
          <div className="column-price">Total Price in this column is: {doneCost}</div>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default Board;
