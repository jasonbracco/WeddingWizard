import { useContext } from "react";
import { CardContext } from './App';
import ToDoColumn from "./ToDoColumn";
import NotStartedColumn from "./NotStartedColumn";
import InProgressColumn from "./InProgressColumn";
import DoneColumn from "./DoneColumn";

function Board() {

  const { allCards } = useContext(CardContext);

  const notStartedCards = allCards.filter((card) => card.status === "Not Started");
  const toDoCards = allCards.filter((card) => card.status === "Next To Do");
  const inProgressCards = allCards.filter((card) => card.status === "In Progress");
  const doneCards = allCards.filter((card) => card.status === "Done");

  return (
    <div>
      <div className="row">
        <div className="card-column">
          <h2 className="column-header">Not Started</h2>
          <div className="scroll-column">
            <NotStartedColumn cards={notStartedCards} />
          </div>
          <br></br>
          <br></br>
        </div>
        <div className="card-column">
          <h2 className="column-header">Next To Do</h2>
          <div className="scroll-column">
            <ToDoColumn cards={toDoCards} />
          </div>
          <br></br>
          <br></br>
        </div>
        <div className="card-column">
          <h2 className="column-header">In Progress</h2>
          <div className="scroll-column">
            <InProgressColumn cards={inProgressCards} />
          </div>
          <br></br>
          <br></br>
        </div>
        <div className="card-column">
          <h2 className="column-header">Done</h2>
          <div className="scroll-column">
            <DoneColumn cards={doneCards} />
          </div>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default Board;
