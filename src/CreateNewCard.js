import { useState } from "react";

function CreateNewCard() {
  const [cardTitle, setCardTitle] = useState("");
  const [currentUpdate, setCurrentUpdate] = useState("");
  const [cost, setCost] = useState("");
  const [dueByDate, setDueByDate] = useState("");
  const [category, setCategory] = useState("hidden");
  const [paymentStatus, setPaymentStatus] = useState("hidden");
  const [owner, setOwner] = useState("hidden");
  const [status, setStatus] = useState("hidden")
  const [ownerError, setOwnerError] = useState(false);
  const [paymentStatusError, setPaymentStatusError] = useState(false)
  const [categoryError, setCategoryError] = useState(false);
  const [statusError, setStatusError] = useState(false)
  

  const createNewCardSubmit = async (event) => {
    event.preventDefault();

    setOwnerError(false);
    setPaymentStatusError(false);
    setCategoryError(false);
    setStatusError(false)
    console.log(currentUpdate)
    console.log(status)

    if (category === "hidden") {
      setCategoryError(true);
    } else if (paymentStatus === "hidden") {
        setPaymentStatusError(true);
    } else if (owner === "hidden") {
      setOwnerError(true);
    } else if (status === "hidden") {
        setStatusError(true);
    } else {
      const newCard = {
        title: cardTitle,
        update: currentUpdate,
        cost: cost,
        dueDate: dueByDate,
        category: category,
        paymentStatus: paymentStatus,
        owner: owner,
        status: status
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
          setCategory("hidden");
          setDueByDate("");
          setPaymentStatus("hidden");
          setOwner("hidden");
          setStatus("hidden")
        } else {
          console.error("Failed to create card:", response.statusText);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className="card-form-container">
      <form className="card-form" onSubmit={createNewCardSubmit}>
        <label>
          Card Title:
          <input
            required
            type="text"
            placeholder="Title"
            value={cardTitle}
            onChange={(e) => setCardTitle(e.target.value)}
          />
        </label>
        <br></br>
        <br></br>
        <label>
          Cost:
          <input
            required
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
            required
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
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            defaultValue="hidden"
          >
            <option value="hidden" hidden>
              Select
            </option>
            <option value="food-and-drink">Food and Drink</option>
            <option value="entertainment">Entertainment</option>
            <option value="rentals">Rentals</option>
            <option value="paper-goods">Paper Goods</option>
            <option value="clothing">Clothing</option>
            <option value="travel-transport">Travel/Transport</option>
            <option value="photography-videography">
              Photography/Videography
            </option>
            <option value="decorations-florals">Decorations and Florals</option>
            <option value="add-ons">Add Ons</option>
          </select>
        </label>
        {categoryError ? (
          <label className="form-error-text">Please Select An Option</label>
        ) : null}
        <br></br>
        <br></br>
        <label>
          Payment Status:
          <select
            value={paymentStatus}
            onChange={(e) => setPaymentStatus(e.target.value)}
            defaultValue="Select"
          >
            <option value="hidden" hidden>
              Select
            </option>
            <option value="none">Unpaid</option>
            <option value="partial">Partial</option>
            <option value="full">Fully Paid</option>
          </select>
        </label>
        {paymentStatusError ? (
          <label className="form-error-text">Please Select An Option</label>
        ) : null}
        <br></br>
        <br></br>
        <label>
          Owner:
          <select
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
            defaultValue="Select"
          >
            <option value="hidden" hidden>
              Select
            </option>
            <option value="planner">Venture North</option>
            <option value="julia">Julia</option>
            <option value="jason">Jason</option>
          </select>
        </label>
        {ownerError ? (
          <label className="form-error-text">Please Select An Option</label>
        ) : null}
        <br></br>
        <br></br>
        <label>
          Status:
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            defaultValue="Select"
          >
            <option value="hidden" hidden>
              Select
            </option>
            <option value="not-started">Not Started</option>
            <option value="next-to-do">Next To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </label>
        {statusError ? (
          <label className="form-error-text">Please Select An Option</label>
        ) : null}
        <br></br>
        <button type="submit">Create Card</button>
      </form>
    </div>
  );
}

export default CreateNewCard;
