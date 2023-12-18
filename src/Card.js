import { useState } from "react";

function Card(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedCard, setUpdatedCard] = useState({});
  const [updatedTitle, setUpdatedTitle] = useState(props.card.title);
  const [updatedUpdate, setUpdatedUpdate] = useState(props.card.update_text);
  const [updatedCost, setUpdatedCost] = useState(props.card.cost_associated);
  const [updatedDueDate, setUpdatedDueDate] = useState(props.card.due_date);
  const [updatedCategory, setUpdatedCategory] = useState(props.card.category);
  const [updatedPaymentStatus, setUpdatedPaymentStatus] = useState(props.card.payment_status);
  const [updatedOwner, setUpdatedOwner] = useState(props.card.owner);
  const [updatedStatus, setUpdatedStatus] = useState(props.card.status);

  const editClick = () => {
    setIsEditing(true);
    setUpdatedCard({
      title: updatedTitle,
      update: updatedUpdate,
      cost: updatedCost,
      dueDate: updatedDueDate,
      category: updatedCategory,
      paymentStatus: updatedPaymentStatus,
      owner: updatedOwner,
      status: updatedStatus,
    });
  };

  const cardUpdate = async () => {
    try {
      const response = await fetch(`/updateCard/${props.card.id}`, {
        method: "PUT",
        headers: {
          "Content-TYPE": "application.json",
        },
        body: JSON.stringify(updatedCard),
      });

      if (response.ok) {
        setIsEditing(false);
      } else {
        console.error("Failed to update card:", response.statusText);
      }

    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (!props.card) {
    return (
      <div className="card-container">
        <div className="card-content">Loading</div>
      </div>
    );
  }

  return (
    <div>
      {isEditing ? (
        <div className="card-container">
          <div className="card-title">
            <strong>Title</strong>
          </div>
          <ul className="card-content">
            <li>Update</li>
            <li>Cost</li>
            <li>Due By Date</li>
            <li>Category</li>
            <li>Payment Status</li>
            <li>Owner</li>
          </ul>
          <div className="card-buttons">
            <button onClick={() => setIsEditing(false)}>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
}

export default Card;
