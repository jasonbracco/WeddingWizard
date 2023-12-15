import { useState } from "react";
import ToDoColumn from "./ToDoColumn";
import NotStartedColumn from "./NotStartedColumn";
import InProgressColumn from "./InProgressColumn";
import DoneColumn from "./DoneColumn";

function Board(props) {
  const cards = props.cards

  const [notStartedCards, setNotStartedCards] = useState(cards.filter((card) => card.status === 'not-started'))
  const [toDoCards, setToDoCards] = useState(cards.filter((card) => card.status === 'next-to-do'))
  const [inProgressCards, setInProgressCards] = useState(cards.filter((card) => card.status === 'in-progress'))
  const [doneCards, setDoneCards] = useState(cards.filter((card) => card.status === 'done'))
  
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
            <ToDoColumn cards={toDoCards}/>
          </div>
          <br></br>
          <br></br>
        </div>
        <div className="card-column">
          <h2 className="column-header">In Progress</h2>
          <div className="scroll-column">
            <InProgressColumn cards={inProgressCards}/>
          </div>
          <br></br>
          <br></br>
        </div>
        <div className="card-column">
          <h2 className="column-header">Done</h2>
          <div className="scroll-column">
            <DoneColumn cards={doneCards}/>
          </div>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default Board;
