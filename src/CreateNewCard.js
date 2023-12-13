import { useState } from "react";

function CreateNewCard() {
  const [cardTitle, setCardTitle] = useState("");
  const [currentUpdate, setCurrentUpdate] = useState("");
  const [cost, setCost] = useState("");
  const [dueByDate, setDueByDate] = useState("");
  const [category, setCategory] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [owner, setOwner] = useState(" ");

  const createNewCardSubmit = async (event) => {
    event.preventDefault();

    const newCard = {
      title: cardTitle,
      update: currentUpdate,
      cost: cost,
      dueDate: dueByDate,
      category: category,
      paymentStatus: paymentStatus,
      owner: owner,
    };

    try {
      const response = await fetch("/createCard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCard),
      });

      if (response.ok) {
        console.log("Card created!");
        setCardTitle("");
        setCurrentUpdate("");
        setCost("");
        setDueByDate("");
        setPaymentStatus("");
        setOwner("");
      } else {
        console.error("Failed to create card:", response.statusText);
      }
    } 
    catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="card-form-container">
      <form className="card-form" onSubmit={createNewCardSubmit}>
        <label>
          Card Title:
          <input
            type="text"
            placeholder="Title"
            value={cardTitle}
            onChange={(e) => setCardTitle(e.target.value)}
          />
        </label>
        <br></br>
        <br></br>
        <label>
          Current Status:
          <input
            type="text"
            placeholder="Status"
            value={currentUpdate}
            onChange={(e) => setCurrentUpdate(e.target.value)}
          />
        </label>
        <br></br>
        <br></br>
        <label>
          Cost:
          <input
            type="text"
            placeholder="Cost"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </label>
        <br></br>
        <br></br>
        <label>
          Due By:
          <input
            type="text"
            placeholder="Due By Date"
            value={dueByDate}
            onChange={(e) => setDueByDate(e.target.value)}
          />
        </label>
        <br></br>
        <br></br>
        <label>
          Category:
            <select value={category} onChange={(e) => setCategory(e.target.value)} defaultValue="hidden">
                <option value="hidden" hidden>Select</option>
                <option value="food-and-drink">Food and Drink</option>
                <option value="entertainment">Entertainment</option>
                <option value="rentals">Rentals</option>
                <option value="paper-goods">Paper Goods</option>
                <option value="clothing">Clothing</option>
                <option value="travel-transport">Travel/Transport</option>
                <option value="photography-videography">Photography/Videography</option>
                <option value="decorations-florals">Decorations and Florals</option>
                <option value="add-ons">Add Ons</option>
            </select>
        </label>
        <br></br>
        <br></br>
        <label>
          Payment Status:
          <input
            type="text"
            placeholder="Payment Status"
            value={paymentStatus}
            onChange={(e) => setPaymentStatus(e.target.value)}
          />
        </label>
        <br></br>
        <br></br>
        <label>
          Owners:
          <select value={owner} onChange={(e) => setOwner(e.target.value)} defaultValue="Select">
                <option value="hidden" hidden>Select</option>
                <option value="planner">Venture North</option>
                <option value="julia">Julia</option>
                <option value="jason">Jason</option>
            </select>
        </label>
        <br></br>
        <button type="submit">Create Card</button>
      </form>
    </div>
  );
}

export default CreateNewCard;
