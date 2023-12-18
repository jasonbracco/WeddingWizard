import Card from "./Card";

function NotStartedColumn(props) {    

  return (
    <div className="column-content">
      <div className="scrollable-content">
        {props.cards.map((card) => (
          <div className="card" key={card.id}>
            <Card card={card}/>
          </div>
         ))}  
      </div>
    </div>
  );
}

export default NotStartedColumn;