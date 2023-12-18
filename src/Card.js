import { useState } from "react";

function Card(props) {

  const [isEditing, setIsEditing] = useState(false)
  const [updateCard, setUpdateCard] = useState({})

  const editClick = () => {
    setIsEditing(true)
    setUpdateCard({
      title: props.card.title,
      update: props.card.update_text,
      cost: props.card.cost_associated,
      dueDate: props.card.due_date,
      category: props.card.category,
      paymentStatus: props.card.payment_status,
      owner: props.card.owner,
      status: props.card.status,
    })
    console.log(updateCard)
  }

  if (!props.card) {
    return (
      <div className="card-container">
        <div className="card-content">Loading</div>
      </div>
    );
  }

  return (
    <div className="card-container">
      <div className="card-title">
        <strong>{props.card.title}</strong>
      </div>
      <ul className="card-content">
        <li>Update: {props.card.update_text}</li>
        <li>Cost: ${props.card.cost_associated}</li>
        <li>Due By Date: {props.card.due_date}</li>
        <li>Category: {props.card.category}</li>
        <li>Payment Status: {props.card.payment_status}</li>
        <li>Owner: {props.card.owner}</li>
      </ul>
      <div className="card-buttons">
        <button onClick={editClick}>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default Card;
