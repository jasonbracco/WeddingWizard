import { useState } from "react";
import { useContext } from "react";
import { CardContext } from './App';

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

  const { allCards, setAllCards } = useContext(CardContext);

  const createNewCardSubmit = async (event) => {
    event.preventDefault();

    setOwnerError(false);
    setPaymentStatusError(false);
    setCategoryError(false);
    setStatusError(false)

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
        cost_associated: cost,
        due_date: dueByDate,
        category: category,
        paymentStatus: paymentStatus,
        owner: owner,
        status: status
      };

      try {
        const response = await fetch("/createcard", {
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
          setStatus("hidden");
          setAllCards([...allCards, newCard])
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
            <option value="Food and Drink">Food and Drink</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Rentals">Rentals</option>
            <option value="Paper Goods">Paper Goods</option>
            <option value="Clothing">Clothing</option>
            <option value="Travel and Transport">Travel/Transport</option>
            <option value="Photography and Videography">
              Photography/Videography
            </option>
            <option value="Decorations and Florals">Decorations and Florals</option>
            <option value="Add Ons">Add Ons</option>
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
            <option value="None">Unpaid</option>
            <option value="Partial">Partial</option>
            <option value="Full">Fully Paid</option>
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
            <option value="Venture North">Venture North</option>
            <option value="Julia">Julia</option>
            <option value="Jason">Jason</option>
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
            <option value="Not Started">Not Started</option>
            <option value="Next To Do">Next To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
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
