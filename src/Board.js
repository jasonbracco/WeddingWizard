import Card from "./Card";
import ToDoColumn from "./ToDoColumn";
import NotStartedColumn from "./NotStartedColumn";
import InProgressColumn from "./InProgressColumn";
import DoneColumn from "./DoneColumn";


function Board() {
  return (
    <div>
      <div className="row">
        <div className="card-column">
          <h2 className="column-header">Not Started</h2>
          <div className="scroll-column">
            <NotStartedColumn />
          </div>
          <br></br>
          <br></br>
        </div>
        <div className="card-column">
          <h2 className="column-header">Next To Do</h2>
          <div className="scroll-column">
            <ToDoColumn />
          </div>
          <br></br>
          <br></br>
        </div>
        <div className="card-column">
          <h2 className="column-header">In Progress</h2>
          <div className="scroll-column">
            <InProgressColumn />
          </div>
          <br></br>
          <br></br>
        </div>
        <div className="card-column">
          <h2 className="column-header">Done</h2>
          <div className="scroll-column">
            <DoneColumn />
          </div>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default Board;
