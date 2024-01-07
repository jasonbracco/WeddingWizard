import { useState } from "react";
import { useContext } from "react";
import { CardContext, CostContext } from "./App";

function Card(props) {
  const { allCards, setAllCards } = useContext(CardContext);
  const { totalCost, setTotalCost } = useContext(CostContext);

  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(props.card.title);
  const [updatedUpdate, setUpdatedUpdate] = useState(props.card.update_text);
  const [updatedCost, setUpdatedCost] = useState(props.card.cost_associated);
  const [updatedDueDate, setUpdatedDueDate] = useState(props.card.due_date);
  const [updatedCategory, setUpdatedCategory] = useState(props.card.category);
  const [updatedPaymentStatus, setUpdatedPaymentStatus] = useState(
    props.card.payment_status
  );
  const [updatedOwner, setUpdatedOwner] = useState(props.card.owner);
  const [updatedStatus, setUpdatedStatus] = useState(props.card.status);

  const cardUpdate = async () => {
    const updatedCard = {
      title: updatedTitle,
      update: updatedUpdate,
      cost: updatedCost,
      dueDate: updatedDueDate,
      category: updatedCategory,
      paymentStatus: updatedPaymentStatus,
      owner: updatedOwner,
      status: updatedStatus,
    };
    try {
      const response = await fetch(`/updatecard/${props.card.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedCard),
      });

      if (response.ok) {
        setIsEditing(false);

        try {
          const allCardsResponse = await fetch("/getallcards");
          if (allCardsResponse.ok) {
            const updatedCards = await allCardsResponse.json();
            setAllCards(updatedCards);
            const numericCost = updatedCards
              .map((card) => parseFloat(card.cost_associated))
              .reduce(
                (accumulator, currentValue) => accumulator + currentValue
              );
            setTotalCost(
              numericCost.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })
            );
          } else {
            console.error(
              "Failed fetching updated cards:",
              allCardsResponse.statusText
            );
          }
        } catch (error) {
          console.error("Error fetching updated cards", error);
        }
      } else {
        setIsEditing(false);
        console.error("Failed to update card:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const cardDelete = async () => {
    try {
      const response = await fetch(`/deletecard/${props.card.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        try {
          const allCardsResponse = await fetch("/getallcards");
          if (allCardsResponse.ok) {
            const updatedCards = await allCardsResponse.json();
            setAllCards(updatedCards);
            const numericCost = updatedCards
              .map((card) => parseFloat(card.cost_associated))
              .reduce(
                (accumulator, currentValue) => accumulator + currentValue
              );
            setTotalCost(
              numericCost.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })
            );
          } else {
            console.error(
              "Failed fetching updated cards:",
              allCardsResponse.statusText
            );
          }
        } catch (error) {
          console.error("Error fetching updated cards", error);
        }
      } else {
        console.error("Failed to Delete Card", response.statusText);
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
          Title:
          <input
            required
            type="text"
            placeholder="Title"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <br></br>
          Update:
          <input
            required
            type="text"
            placeholder="Update"
            value={updatedUpdate}
            onChange={(e) => setUpdatedUpdate(e.target.value)}
          />
          <br></br>
          Cost:
          <input
            required
            type="text"
            placeholder="Cost"
            value={updatedCost}
            onChange={(e) => setUpdatedCost(e.target.value)}
          />
          <br></br>
          Due By:
          <input
            required
            type="text"
            placeholder="Due By Date"
            value={updatedDueDate}
            onChange={(e) => setUpdatedDueDate(e.target.value)}
          />
          <br></br>
          Category:
          <select
            value={updatedCategory}
            onChange={(e) => setUpdatedCategory(e.target.value)}
          >
            <option value="Food and Drink">Food and Drink</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Rentals">Rentals</option>
            <option value="Paper Goods">Paper Goods</option>
            <option value="Clothing">Clothing</option>
            <option value="Lodging">Lodging</option>
            <option value="Venue">Venue</option>
            <option value="Wedding Planner">Wedding Planner</option>
            <option value="Travel and Transport">Travel/Transport</option>
            <option value="Photography and Videography">
              Photography/Videography
            </option>
            <option value="Decorations and Florals">
              Decorations and Florals
            </option>
            <option value="Add Ons">Add Ons</option>
          </select>
          <br></br>
          Payment Status:
          <select
            value={updatedPaymentStatus}
            onChange={(e) => setUpdatedPaymentStatus(e.target.value)}
          >
            <option value="Unpaid">Unpaid</option>
            <option value="Partial">Partial</option>
            <option value="Full">Fully Paid</option>
          </select>
          <br></br>
          Owner:
          <select
            value={updatedOwner}
            onChange={(e) => setUpdatedOwner(e.target.value)}
          >
            <option value="Venture North">Venture North</option>
            <option value="Julia">Julia</option>
            <option value="Jason">Jason</option>
            <option value="Jason and Julia">Jason and Julia</option>
          </select>
          <br></br>
          Status:
          <select
            value={updatedStatus}
            onChange={(e) => setUpdatedStatus(e.target.value)}
          >
            <option value="Not Started">Not Started</option>
            <option value="Next To Do">Next To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
          <div className="card-buttons">
            <button onClick={() => setIsEditing(false)}>Back</button>
            <button onClick={cardUpdate}>Submit Changes</button>
          </div>
        </div>
      ) : (
        <div className="card-container">
          <div className="card-title">
            <strong>{props.card.title}</strong>
          </div>
          <ul className="card-content">
            <li><em>Update:</em> {props.card.update_text}</li>
            <li><em>Cost:</em> ${props.card.cost_associated}</li>
            <li><em>Due By Date:</em> {props.card.due_date}</li>
            <li><em>Category:</em> {props.card.category}</li>
            <li><em>Payment Status:</em> {props.card.payment_status}</li>
            <li><em>Owner:</em> {props.card.owner}</li>
          </ul>
          <div className="card-buttons">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={cardDelete}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
