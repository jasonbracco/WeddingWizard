import {useState} from 'react';
import Card from "./Card";

function ToDoColumn(props) {

  console.log(props)

  return (
    <div className="column-content">
      <div className="scrollable-content">
        {props.cards.map((card) => (
          <div className="card" key={card.id}>
            <Card card={card}/>
          </div>
        ))} 
      </div>
      <div className="column-price">Total Price in this column is: $0.00</div>
    </div>
  );
}

export default ToDoColumn;
