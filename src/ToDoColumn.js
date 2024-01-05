import Card from "./Card";

function ToDoColumn(props) {

  return (
    <div className="column-content">
      <div className="scrollable-content">
        {props.cards.map((card) => (
          <div className="card" key={card.title}>
            <Card card={card}/>
          </div>
         ))}  
      </div>
    </div>
  );
}

export default ToDoColumn;
