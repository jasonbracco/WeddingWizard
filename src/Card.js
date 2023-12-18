import { useState } from "react";

function Card(props) {
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
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default Card;
