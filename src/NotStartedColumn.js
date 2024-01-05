import Card from "./Card";

function NotStartedColumn(props) {    

  console.log(props)

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
 
export default NotStartedColumn;